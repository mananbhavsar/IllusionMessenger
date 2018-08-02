import { Component } from '@angular/core';
import { Events, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { CreateUserPage } from '../create-user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  title: string = 'Users';
  users: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public connection: ConnectionProvider,
    public events: Events
  ) {
    this.getUsers();
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetUserList')
        .then((response: any) => {
          this.users = response.UserList;
          console.log(this.users);
        });
    }).catch((error) => {

    });
  }

  addUser() {
    let modal = this.modal.create(CreateUserPage);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getUsers();
      }
    });
    modal.present();
  }

  updateUser(user) {
    let modal = this.modal.create(CreateUserPage, user);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getUsers();
      }
    });
    modal.present();
  }

  removeUser(user, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveUser', {
        UserID: user.IserID,
        User: user.User,
        UserCode: user.UserCode
      }).then((response: any) => {
        if (response) {
          this.events.publish('toast:create', response.Data.Message);
          this.users.splice(index, 1);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }



  refresh(refresher) {
    this.getUsers().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }
}
