import { Component } from '@angular/core';
import { Events, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { AddFlashPage } from '../add-flash/add-flash';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { FirebaseTransactionProvider } from './../../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from './../../../providers/notifications/notifications';
import { CreateTopicPage } from './../../topic/create-topic/create-topic';
import { OfflineStorageProvider } from '../../../providers/offline-storage/offline-storage';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-group-options',
  templateUrl: 'group-options.html',
})
export class GroupOptionsPage {
  group_id: number = null;
  title: string = 'Group Options';
  group_name: string = 'loading';
  userlist: Array<any> = [];
  participants: Array<any> = [];
  group: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    private modalController: ModalController,
    private viewController: ViewController,
    private events: Events,
    public network: Network,
    public _offlineStorage: OfflineStorageProvider,
    private notifications: NotificationsProvider,
    private _firebaseTransaction: FirebaseTransactionProvider,
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;
  }

  ionViewDidLoad() {
    this.getParticipants();
  }

  getParticipants() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupUserDetail', {
        GroupID: this.group_id
      },false).then((response: any) => {
        this.userlist = response;
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  createTopic() {
    if (this.network.type !== 'none') {
      let createTopicModal = this.modalController.create(CreateTopicPage, {
        group_id: this.group_id,
        group_name: this.group_name,
      });
      createTopicModal.onDidDismiss(data => {
        this.setTitle();
        if (data) {
          this.dismiss({
            page: 'ChatPage',
            params: data
          });
        }
      });
      createTopicModal.present();
    } else {
      this.events.publish('toast:create', 'You seems to be offline');
    }
  }

  addFlashNews() {
    if (this.network.type !== 'none') {
      let flashModal = this.modalController.create(AddFlashPage, {
        group_id: this.group_id,
        group_name: this.group_name,
      });
      flashModal.onDidDismiss(data => {
        this.setTitle();
        if (data) {
          this.events.publish('toast:create', data.Data.Message);
          this.notifications.sends(data.OneSignalTransaction);
          this._firebaseTransaction.doTransaction(data.FireBaseTransaction).catch(error => {

          });
          this.dismiss(data);
        }
      });
      flashModal.present();
    } else {
      this.events.publish('toast:create', 'You seems to be offline');
    }
  }

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  isYou(id) {
    if (id) {
      return id === this.connection.user.LoginUserID;
    }
    return false;
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Group Options';
    });
  }


  getTitle() {
    return this.title;
  }
}
