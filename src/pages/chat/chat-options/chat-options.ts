import { DateProvider } from './../../../providers/date/date';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, Events, ViewController } from 'ionic-angular';
import { SavedMediaPage } from "./saved-media/saved-media";
import { ConnectionProvider } from '../../../providers/connection/connection';
import { FirebaseTransactionProvider } from '../../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from "../../../providers/notifications/notifications";
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../../providers/user/user';

import * as moment from 'moment';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-chat-options',
  templateUrl: 'chat-options.html',
})
export class ChatOptionsPage {
  data: any = {}
  title: string = '';
  topicCode: string = null;
  topicID: string = null;
  groupID: number = null;
  group_name: string = 'loading';

  statusID: number;
  closeButton: boolean = false;

  path: string = null;

  amIAdmin: boolean = false;
  amIResponsible: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public connection: ConnectionProvider,
    public user: UserProvider,
    public events: Events,
    private _firebaseTransaction: FirebaseTransactionProvider,
    private _notifications: NotificationsProvider,
    public storage: Storage,
    private viewController: ViewController,
    private _date: DateProvider,
  ) {
    this.data = this.navParams.data.data;
    this.title = this.navParams.data.data.Topic + '\'s options';
    this.topicID = this.navParams.data.data.TopicID;
    this.groupID = this.navParams.data.data.GroupID;
    this.statusID = this.navParams.data.data.StatusID;
    this.topicCode = this.navParams.data.folder;

    this.path = this.navParams.data.path;
    this.group_name = this.navParams.data.group_name;

    this.processParticipants();
  }

  processParticipants() {
    if (!_.isEmpty(this.data)) {
      this.data.User.forEach((user, index) => {
        //converting to boolean
        if (typeof this.data.User[index].IsAdmin === 'string') {
          this.data.User[index].IsAdmin = user.IsAdmin === 'true';
        }
        if (typeof this.data.User[index].IsResponsible === 'string') {
          this.data.User[index].IsResponsible = user.IsResponsible === 'true';
        }

        //checking admin for me
        if (user.UserID === this.connection.user.LoginUserID && user.IsAdmin) {
          this.amIAdmin = true;
        }
      });
    }
  };

  openSavedMedia() {
    let params = {
      path: this.path,
      folder: this.topicCode,
      topic_group_name: this.navParams.data.user.Topic + ' / ' + this.group_name
    };

    let savedMediaModal = this.modal.create(SavedMediaPage, params);
    savedMediaModal.onDidDismiss(data => {

    });
    savedMediaModal.present();
  }

  closeGroup() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Do You Want to Close ',
      buttons: [
        {
          text: 'Close it now!',
          role: 'destructive',
          handler: () => {
            this.connection.doPost('Chat/UpdateTopicStatus', {
              GroupID: this.groupID,
              TopicID: this.topicID,
              StatusID: 2
            }).then((response: any) => {
              this.data.StatusID = 2;

              if (this.data.StatusID = 2) {
                this.closeButton = true;
                this.data.CloseDatime_UTC = this._date.toUTCISOString(new Date(), false);
              }
              if (response.Data.Message) {
                this.events.publish('toast:create', response.Data.Message);
              }
              //firebase 
              if (response.FireBaseTransaction) {
                this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
              }
              //send notification
              if (response.OneSignalTransaction) {
                this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
                  topicID: this.topicID,
                  groupID: this.groupID,
                });
              }
            }).catch(error => {
              console.log(error);
            });
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
        }]
    });
    actionSheet.present();
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  userOptionsClicked(participant, index) {
    //only if I'm admin
    if (this.amIAdmin && this.statusID === 1) {
      let buttons = [];
      if (participant.UserID !== this.connection.user.LoginUserID) {//can't remove/add self
        //make, remove admin
        if (participant.IsAdmin) {
          //if not by created
          if (this.removeAsAdmin)
            buttons.push({
              role: 'destructive',
              text: 'Remove as Admin',
              handler: () => {
                this.removeAsAdmin(participant, index);
              }
            });
        } else {
          buttons.push({
            text: 'Make Admin',
            handler: () => {
              this.makeAsAdmin(participant, index);
            }
          });
        }
      }
      //make, remove responsibel
      if (this.amIResponsible) {
        if (participant.IsResponsible) {
          buttons.push({
            role: 'destructive',
            text: 'Remove as Responsible',
            handler: () => {

            }
          });
        } else {
          buttons.push({
            text: 'Mark Responsible',
            handler: () => {

            }
          });
        }
      }
      if (buttons.length) { //at least on button other than cancel
        //cancel button
        buttons.push({
          role: 'cancel',
          text: 'Cancel',
          handler: () => {

          }
        });
        let userOptionActionSheet = this.actionSheetCtrl.create({
          title: 'Take Action',
          buttons: buttons
        }).present();
      }
    }
  }

  makeAsAdmin(participant, index) {
    this.connection.doPost('Chat/MakeAdmin', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //making admin
      this.data.User[index].IsAdmin = true;
    }).catch(error => {

    });
  }

  removeAsAdmin(participant, index) {
    this.connection.doPost('Chat/RemoveAdmin', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //removing admin
      this.data.User[index].IsAdmin = false;
    }).catch(error => {

    });
  }

  isExpired(due_date, close_date) {
    if (close_date === '0001-01-01T00:00:00.00Z' || !moment(close_date).isValid()) {
      close_date = this._date.toUTCISOString(new Date(), false);
    }
    if (moment(due_date).isValid() && moment(close_date).isValid()) {
      return (this._date.fromServerFormat(close_date).toDate().getTime() - this._date.fromServerFormat(due_date).toDate().getTime()) > 0;
    }
    return null;
  }

  isYou(id) {
    if (id) {
      return id === this.connection.user.LoginUserID;
    }
    return false;
  }
}
