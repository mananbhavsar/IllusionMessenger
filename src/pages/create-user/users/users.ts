import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Events, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { CreateUserPage } from '../create-user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  title: string = 'Users';
  users: Array<any> = null;
  pushedUsersID: Array<any> = [];
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
  }

  ionViewWillEnter() {
    this.users = [];
    this.storage.get('offline:users').then((users: any) => {
      if (_.isEmpty(users)) {
        users = [];
      }
      this.page = 0;
      users.forEach(user => {
        this.pushItem(user);
      });
    });
    this.getUsers();
  }

  getUsers() {
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
              this.pushItem(list);
            });
            this.page++;
            this.saveOfflineData().then(status => {
              resolve(status);
            });
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

  pushItem(item) {
    let index = this.pushedUsersID.indexOf(item.UserID);
    if (index === -1) {//push
      this.users.push(item);
      this.pushedUsersID.push(item.UserID);
    } else {
      this.users[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:users').then(users => {
        users = this.users;
        this.storage.set('offline:users', users).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }


  initializeItems() {
    this.page = 0;
    this.pushedUsersID = [];
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
      this.pushedUsersID = [];
      this.getUsers().catch(error => {
      });
    } else {
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
    this.page = 0;
    this.storage.get('offline:users').then((users: any) => {
      if (_.isEmpty(users)) {
        users = [];
      }
      users.forEach(user => {
        this.pushItem(user);
      });
    });
    this.getUsers().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }
}
