import { Component } from '@angular/core';
import { IonicPage,Events,ViewController, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';


@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  createGroupForm: FormGroup;
  title = "Create Group";
  // user: any = [{
  //   user: 'a'
  // },
  // {
  //   user: 'b'
  // },
  // {
  //   user: 'c'
  // }];
  groupDetail: any = [];
  userDetail: any = [];
  adminList: any[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCntl: ViewController,
    public events : Events,
    public actionSheetCtrl: ActionSheetController) {
    this.createGroupForm = this.formBuilder.group({
      group_name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('[A-Za-z ]*')]],
      group_code: ['', [Validators.required, Validators.maxLength(10)]],
      user_list: [],
    });
    this.getUserDetails();
  }


  getUserDetails() {
    this.connection.doPost('Chat/GetUserList').then((response: any) => {
      this.groupDetail = response.UserList;
      console.log(this.groupDetail);

    }).catch((error) => {

    });
  }

  userAction(event, user) {
    if (event) {
      if (this.userDetail.indexOf(user) === -1) {
        user['IsAdmin'] = false;
        this.userDetail.push(user);
      }
    } else {
      if (this.userDetail.indexOf(user) > -1) {
        this.userDetail.splice(this.userDetail.indexOf(user), 1);
      }
    }
    console.log(this.userDetail);

  }

  adminOptionClicked(user) {
    console.log(event);
    let adminOptionActionSheet;
    let buttons: any = [];
    if (this.userDetail.indexOf(user) > -1) {
      buttons.push({
        role: 'destructive',
        text: 'Remove User',
        handler: () => {
          this.userAction(false, user);
        }
      });
    } else {
      if (this.userDetail.indexOf(user) === -1) {
        buttons.push({
          text: 'Add User',
          handler: () => {
            this.userAction(true, user);
          }
        });
      }
    }

    if (user.IsAdmin) {
      buttons.push({
        role: 'destructive',
        text: 'Remove as Admin',
        handler: () => {
          this.removeAsAdmin(user);
        }
      });
    } else {
      buttons.push({
        text: 'Make Admin',
        handler: () => {
          this.makeAsAdmin(user);
        }
      });
    }

    buttons.push({
      role: 'cancel',
      text: 'Cancel',
      handler: () => {

      }
    });
    adminOptionActionSheet = this.actionSheetCtrl.create({
      title: 'Take Action',
      buttons: buttons
    });
    adminOptionActionSheet.present();

  }

  removeAsAdmin(user) {
    user['IsAdmin'] = false;
  }

  makeAsAdmin(user) {
    user['IsAdmin'] = true;
  }

  createGroup() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateGroup', {
        Group: this.createGroupForm.get('group_name').value,
        GroupCode: this.createGroupForm.get('group_code').value,
        UserID: this.userDetail.map(userId => userId.UserID),
        IsAdmin: this.userDetail.map(IsAdmin => IsAdmin.IsAdmin)
      }).then((response:any) => {
         this.events.publish('toast:create',response.Data.Message);
         this.createGroupForm.reset();
         this.dismiss(null);
      }).catch((error) => {
        reject();
      })
    });
  }

  dismiss(data) {
    this.viewCntl.dismiss();
  }


}
