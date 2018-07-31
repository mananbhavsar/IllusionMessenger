import { Component, group } from '@angular/core';
import { IonicPage, Events, ViewController, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';

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
  page: number = 1;
  GroupID: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCntl: ViewController,
    public events: Events,
    public actionSheetCtrl: ActionSheetController) {
    this.createGroupForm = this.formBuilder.group({
      Group: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('[A-Za-z ]*')]],
      GroupCode: ['', [Validators.required, Validators.maxLength(10)]],
      search: []
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
      },false).then((response: any) => {
        console.log(response);
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
    return array.some((item) => {
      return item.UserID === userID;
    });
  }


  getUserDetails() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetUserList', {
          PageNumber: this.page,
          RowsPerPage: 20
        }).then((response: any) => {
          console.log(response);
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
              console.log(this.userDetail);

            }
            this.page++;
            this.initialiseItems();
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

  initialiseItems() {
    this.groupDetail2 = this.groupDetail;
  }

  searchUser() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      return false;
    }
    this.searchInputBtn = true;
    return true;
  }

  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.groupDetail = this.groupDetail.filter((item) => {
        return (item.User.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.groupDetail = this.groupDetail2.filter((item) => {
        return item.User;
      });
    }

  }

  onCancel(event) {
    console.log(event);

  }

  userAction(event, user) {
    if (event.checked) {
      if (this.in_array(this.userDetail,user.UserID)) {
        this.userDetail.push(user);
      }
    } else {
      if (this.in_array(this.userDetail,user.UserID)) {
        this.userDetail.splice(this.userDetail.indexOf(user), 1);
        user.IsAdmin = false;
      }
    }
    console.log(this.userDetail);

  }

  makeAdmin(user) {
    console.log(user);
    if (this.in_array(this.userDetail,user.UserID)) {
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
      this.connection.doPost('Chat/CreateGroup', {
        Group: this.createGroupForm.get('Group').value,
        GroupCode: this.createGroupForm.get('GroupCode').value,
        UserID: this.userDetail.map(userId => userId.UserID),
        IsAdmin: this.userDetail.map(IsAdmin => IsAdmin.IsAdmin)
      }).then((response: any) => {
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
      this.connection.doPost('Chat/CreateGroup', {
        GroupID : this.GroupID,
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



  dismiss(event) {
    this.viewCntl.dismiss(event);
  }


}
