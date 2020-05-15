import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  searchInputBtn: boolean = false;
  notifications: Array<any> = null;
  query: any = null;
  page: number = 0;
  title: string = 'Loading';
  pushedNotificationID: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public storage: Storage) {
    this.setTitle();
  }

  ionViewWillEnter() {
    this.notifications = [];
    this.storage.get('offline:manage-groups').then((notifications: any) => {
      if (_.isEmpty(notifications)) {
        notifications = [];
      }
      this.page = 0;
      notifications.forEach(group => {
        this.pushItem(group);
      });
    });
    this.getData();
  }

  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('', {
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        }, false).then((response: any) => {
          if (response.NotificationList.length > 0) {
            response.NotificationList.forEach(list => {
              this.pushItem(list);
            });
            this.page++;
            this.saveOfflineData().then(status => {
              resolve(status);
            }).catch(error => {
              reject(error);
            });
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch(error => {
          this.page = -1;
          reject();
        });
      }
    });
  }

  pushItem(item) {
    let index = this.pushedNotificationID.indexOf(item.ID);
    if (index === -1) {//push
      this.notifications.push(item);
      this.pushedNotificationID.push(item.ID);
    } else {
      this.notifications[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:notifications').then(Notifications => {
        Notifications = this.notifications;
        this.storage.set('offline:notifications', Notifications).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  paginate(paginator) {
    this.getData().then(status => {
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
    this.notifications = [];
    this.page = 0;
    return new Promise((resolve, reject) => {
      this.storage.get('offline:notifications').then((notifications: any) => {
        if (_.isEmpty(notifications)) {
          notifications = [];
        }
        notifications.forEach(notification => {
          this.pushItem(notification);
        });
      });
      this.getData().then((data) => {
        refresher.complete();
      }).catch((error) => {
        refresher.complete();
      })
    });
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Notifications';
    });
  }



  getTitle() {
    return this.title;
  }

  SearchNotification() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.notifications = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  initializeItems() {
    this.page = 0;
    this.notifications = [];
    this.pushedNotificationID = [];
    this.getData().catch(error => {
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
      this.notifications = [];
      this.pushedNotificationID = [];
      this.getData().catch(error => {
      });
    } else {
      this.notifications = [];
      this.query = null;
      this.initializeItems();
    }
  }

}
