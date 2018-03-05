import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController , ActionSheetController,Events} from 'ionic-angular';
import { SavedMediaPage } from "../../pages/chat/saved-media/saved-media";
import { ConnectionProvider } from '../../providers/connection/connection';
import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from "../../providers/notifications/notifications";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChatOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-options',
  templateUrl: 'chat-options.html',
})
export class ChatOptionsPage {

  participants: Array<any> =[];
  title:  string ='';
  dataDirectory = null;
  topicCode: string = null;
  topicID: string = null;
  groupID: string = null;
  statusID:number;
  data: any = {};
  closeButton:Array<any>=[];
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private modal: ModalController,
   public actionSheetCtrl:ActionSheetController,   
   public connection: ConnectionProvider,
   public events: Events,   
   private _firebaseTransaction: FirebaseTransactionProvider,   
   private _notifications: NotificationsProvider,
   public storage: Storage,
   ) {
   	this.participants = this.navParams.data.user;
   	this.title = this.navParams.data.user.Topic;
    this.topicID = this.navParams.data.user.TopicID;
    this.groupID = this.navParams.data.user.GroupCode;
    this.statusID=this.navParams.data.user.StatusID;
    console.log(this.statusID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatOptionsPage');
    if (this.data.StatusID === 1) {
          
        }
  }

  openSavedMedia(){
  let params = {
          path: this.dataDirectory,
          folder: this.topicCode,
        };
  
  let savedMediaModal = this.modal.create(SavedMediaPage, params);
        savedMediaModal.onDidDismiss(data => {

        });
        savedMediaModal.present();
  }

  closeGroup(){
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
}
