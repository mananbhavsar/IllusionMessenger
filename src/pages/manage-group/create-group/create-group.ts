import { Component, group } from '@angular/core';
import { IonicPage, Events, Platform, ViewController, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';
import { FirebaseTransactionProvider } from '../../../providers/firebase-transaction/firebase-transaction';

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  createGroupForm: FormGroup;
  title = "Groups";
  groupDetail: any = [];
  userDetail: any = [];
  userList: any;
  searchInputBtn: boolean = false;
  groupBtn: string = 'Create Group';
  groupDetail2: any = [];
  groupUsers: any = [];
  selected_user: any = [];
  page: number = 0;
  query: string;
  GroupID: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCntl: ViewController,
    public events: Events,
    public platform : Platform,
    public actionSheetCtrl: ActionSheetController,
    public _firebaseTransaction: FirebaseTransactionProvider) {
    this.createGroupForm = this.formBuilder.group({
      Group: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('[A-Za-z ]*')]],
      GroupCode: ['', [Validators.required, Validators.maxLength(10)]],
      search: [],
    
    });
    if (!_.isEmpty(this.navParams.data.Group)) {
      this.groupBtn = 'Update';
      this.GroupID = this.navParams.data.GroupID;
      this.createGroupForm.setValue({
        Group: this.navParams.data.Group,
        GroupCode: this.navParams.data.GroupCode,
        search: ''
      });
    }
    this.getUserDetails();
    this.getUserOfGroup();
  }

  getUserOfGroup() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupDetail_User', {
        GroupID: this.GroupID
      }).then((response: any) => {
        this.groupUsers = response.GroupList_User;
        this.groupUsers.forEach(user => {
          this.selected_user[user.UserID] = user.IsAdmin;
          this.userDetail.push(user);
        });
        resolve(true);
      }).catch((error) => {
        reject();
      })
    });
  }

  in_array(array, userID) {
    if (userID) {
      return array.some((item) => {
        return item.UserID === userID;
      });
    }
  }

  isAdminCheck(UserID) { 
    if (this.in_array(this.userDetail, UserID)) {
      return this.userDetail.some((item) => {
        if (item.UserID === UserID) {
          return item.IsAdmin;
        }
      });
    }
  }

  getUserDetails() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetUserList', {
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        }, false).then((response: any) => {
          if (response.UserList.length > 0) {
            response.UserList.forEach(list => {
              this.groupDetail.push(list);
            });
            if (this.selected_user.length > 0) {
              this.groupDetail.forEach((val, key) => {
                if (val.UserID in this.selected_user) {
                  this.groupDetail[key].IsAdmin = this.selected_user[val.UserID];
                }

              });
            }
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {
          this.page = -1;
          reject();
        });
      }

    });
  }

  paginate(paginator) {
    this.getUserDetails().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }

  searchUser() {
    if (this.searchInputBtn) {
      this.groupDetail = [];
      this.query = null;
      this.page = 0;
      this.initializeItems();
      this.searchInputBtn = false;
      return false;
    }
    this.searchInputBtn = true;
    return true;
  }

  initializeItems() {
    this.page = 0;
    this.getUserDetails().catch(error => {
    });
  }

  onCancel(event) {
    this.query = null;
    this.initializeItems();
  }

  onClear(event) {
    this.query = null;
    this.initializeItems();
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.groupDetail = [];
      this.getUserDetails().catch(error => {
      });
    } else {
      this.groupDetail = [];
      this.query = null;
      this.initializeItems();
    }
  }

  userAction(event, user) {
    if (event.checked) {
      if (!this.in_array(this.userDetail, user.UserID)) {
        this.userDetail.push(user);
        user.IsAdmin = false;
      }
    } else {
      if (this.in_array(this.userDetail, user.UserID)) {
        let removeIndex = this.userDetail.map((item) => {
          return item.UserID
        }).indexOf(user.UserID);
        this.userDetail.splice(removeIndex, 1);
        user.IsAdmin = false;
      }
    }
  }

  makeAdmin(user) {
    if (this.in_array(this.userDetail, user.UserID)) {
      if (user.IsAdmin) {
        this.removeAsAdmin(user);
      } else {
        this.makeAsAdmin(user);
      }
    }
  }

  removeAsAdmin(user) {
    user.IsAdmin = false;
  }

  makeAsAdmin(user) {
    user.IsAdmin = true;
  }

  createGroup() {
    return new Promise((resolve, reject) => {
      if(!this.createGroupForm.valid){
        this.events.publish('toast:error','Fill valid fields in form');
      return;
      }
      this.connection.doPost('Chat/CreateGroup', {
        Group: this.createGroupForm.get('Group').value,
        GroupCode: this.createGroupForm.get('GroupCode').value,
        UserID: this.userDetail.map(userId => userId.UserID),
        IsAdmin: this.userDetail.map(IsAdmin => IsAdmin.IsAdmin),
        IsWeb : this.platform.is('core')
      }).then((response: any) => {
        if (response.FireBaseTransaction) {
          this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
        }
        this.events.publish('toast:create', response.Data.Message);
        this.createGroupForm.reset();
        this.dismiss(null);
      }).catch((error) => {
        reject();
      })
    });
  }

  updateGroup() {
    return new Promise((resolve, reject) => {
      if(!this.createGroupForm.valid){
        this.events.publish('toast:error','Fill valid fields in form');
        return;
      }
      this.connection.doPost('Chat/UpdateGroup', {
        GroupID: this.GroupID,
        Group: this.createGroupForm.get('Group').value,
        GroupCode: this.createGroupForm.get('GroupCode').value,
        Add_UserID: this.userDetail.map(userId => userId.UserID),
        Add_User_IsAdmin: this.userDetail.map(IsAdmin => IsAdmin.IsAdmin)
      }).then((response: any) => {
        this.events.publish('toast:create', response.Data.Message);
        this.createGroupForm.reset();
        this.dismiss(null);
      }).catch((error) => {
        reject();
      })
    });
  }

  takeAction(event){
    switch(event.name){
      case 'Add' :
      this.createGroup();
      break;
      case 'Update' :
      this.updateGroup();
      break;
    }
  }

  dismiss(event) {
    this.viewCntl.dismiss(event);
  }


}
