import { FirebaseTransactionProvider } from './../../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from './../../../providers/notifications/notifications';
import { CreateTopicPage } from './../../topic/create-topic/create-topic';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events } from 'ionic-angular';
import { AddFlashPage } from '../add-flash/add-flash';

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
      }).then((response: any) => {
        this.userlist = response;
        console.log(this.userlist);
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  createTopic() {
    let createTopicModal = this.modalController.create(CreateTopicPage, {
      group_id: this.group_id,
      group_name: this.group_name,
    });
    createTopicModal.onDidDismiss(data => {
      if (data) {
        this.dismiss({
          page: 'ChatPage',
          params: data
        });
      }
    });
    createTopicModal.present();
  }

  addFlashNews() {
    let flashModal = this.modalController.create(AddFlashPage, {
      group_id: this.group_id,
      group_name: this.group_name,
    });
    flashModal.onDidDismiss(data => {
      if (data) {
        this.events.publish('toast:create', data.Data.Message);
        this.notifications.sends(data.OneSignalTransaction);
        this._firebaseTransaction.doTransaction(data.FireBaseTransaction).catch(error => {

        });
        this.dismiss(data);
      }
    });
    flashModal.present();
  }

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }
}
