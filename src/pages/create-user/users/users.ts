import { Component } from '@angular/core';
import { IonicPage, ModalController, Events, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { CreateUserPage } from '../create-user';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  title: string = 'Users';
  users: Array<any> = [];
  page: number = 0;
  query: string;
  searchInputBtn: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public connection: ConnectionProvider,
    public events: Events,
    public _network: Network,
    public storage: Storage,
    public actionSheetCntl: ActionSheetController
  ) {
    this.getUsers();
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      if (this._network.type === 'none') {
        this.storage.get('users:offline').then((data: any) => {
          if (data) {
            this.users = data;
            resolve(true);
          }
        });
      } else {
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
                this.users.push(list);
              });
              this.storage.set('users:offline', this.users);
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
      }
    });

  }

  initializeItems() {
    this.page = 0;
    this.getUsers().catch(error => {
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
      this.users = [];
      this.getUsers().catch(error => {
      });

    } else {
      this.users = [];
      this.query = null;
      this.initializeItems();
    }
  }

  headerBtnClicked(event) {
    switch (event.name) {
      case 'search':
        this.SearchTag();
        break;
      case 'add':
        this.addUser();
        break;
    }
  }
  SearchTag() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.users = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  addUser() {
    if (this._network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
      let modal = this.modal.create(CreateUserPage);
      modal.onDidDismiss((data) => {
        if (data) {
          this.getUsers();
        }
      });
      modal.present();
    }
  }

  updateUser(user) {
    if (this._network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
    let modal = this.modal.create(CreateUserPage, user);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getUsers();
      }
    });
    modal.present();
  }
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

  actionSheetOpen(user, index) {
    let actionSheet = this.actionSheetCntl.create({
      title: 'Do You Want to Remove User',
      buttons: [
        {
          text: 'Remove User',
          role: 'destructive',
          handler: () => {
            this.removeUser(user, index);
          }
        },
        {
          text: 'Cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  paginate(paginator) {
    this.getUsers().then(status => {
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
    this.users = [];
    this.getUsers().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }
}
