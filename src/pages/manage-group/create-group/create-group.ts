import { Component } from '@angular/core';
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
  title = "Create Group";
  groupDetail: any = [];
  userDetail: any = [];
  userList: any;
  searchInputBtn: boolean = false;
  groupBtn: string = 'Create Group';
  groupDetail2: any = [];
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
      user_list: [],
      search: []
    });
    this.getUserDetails();

    if (!_.isEmpty(this.navParams.data.Group)) {
      this.groupBtn = 'Update';
      this.createGroupForm.setValue({
        Group: this.navParams.data.Group,
        GroupCode: this.navParams.data.GroupCode
      });
    }
  }


  getUserDetails() {
    this.connection.doPost('Chat/GetUserList').then((response: any) => {
      if (response) {
        this.groupDetail = response.UserList;
        this.initialiseItems();
      }
    }).catch((error) => {

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
    }

    this.groupDetail = this.groupDetail2.filter((item) => {
      return (item.User.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }

  onCancel(event) {
    console.log(event);

  }

  userAction(event, user) {
    if (event.checked) {
      if (this.userDetail.indexOf(user) === -1) {
        user['IsAdmin'] = false;
        this.userDetail.push(user);
      }
    } else {
      if (this.userDetail.indexOf(user) > -1) {
        this.userDetail.splice(this.userDetail.indexOf(user), 1);
        user.IsAdmin = false;
      }
    }
    console.log(this.userDetail);

  }

  makeAdmin(user) {
    console.log(user);
    if (this.userDetail.indexOf(user) !== -1) {
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
      this.connection.doPost('Chat/UpdateGroup', {
        Group: this.createGroupForm.get('Group').value,
        GroupCode: this.createGroupForm.get('GroupCode').value,
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
