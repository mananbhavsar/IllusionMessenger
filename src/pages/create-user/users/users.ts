import { Component } from '@angular/core';
import { IonicPage, Events, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CreateUserPage } from '../create-user';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  title: string = 'Users';
  users: any = [];
  page: number = 1;
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
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetUserList')
          .then((response: any) => {
            this.users = response.UserList;
            console.log(this.users);
            this.page++;
            console.log(this.page);
            
            resolve(true);
          });
      }
    }).catch((error) => {
      this.page = -1;
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
        UserID: user.UserID
      }).then((response: any) => {
        if (response) {
          this.users.splice(index, 1);
          this.events.publish('toast:create', response.Data.Message);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  paginate(paginator) {
    this.getUsers().then(status => {
      console.log(status);

      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
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
