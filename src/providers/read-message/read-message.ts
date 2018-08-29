import { Injectable } from '@angular/core';
import { ConnectionProvider } from '../connection/connection';
import { FirebaseTransactionProvider } from '../firebase-transaction/firebase-transaction';
import * as _ from 'underscore';
import { Events } from 'ionic-angular';
import * as firebase from 'firebase';
@Injectable()
export class ReadMessageProvider {
  groupCode: any = [];
  topicCode: any = [];
  basePath : any;
  messagePath : firebase.database.Reference;
  messageKeyRef : string;
  message : any = {};
  userID : number;
  users :any;
  dataDetails : any = {};
  constructor(
    public connection: ConnectionProvider,
    public _firebaseTransaction: FirebaseTransactionProvider,
    public events : Events

  ) {
  }

  read(selectedGroup: any, selectedTopic: any) {
    return new Promise((resolve, reject) => {
    if (!_.isEmpty(selectedGroup)) {
      this.groupCode = selectedGroup;
    }
    if(!_.isEmpty(selectedTopic)){
      this.topicCode = selectedTopic;
    }
      this.connection.doPost('Chat/ReadAll', {
        ReadAll: false,
        GroupCode: this.groupCode.map(GroupCode => GroupCode.GroupCode),
        TopicCode: this.topicCode.toString(),
      }).then((response: any) => {
        if (response) {
          this.dataDetails = response.Data[0];
          if (response.FireBaseTransaction) {
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
          }
        this.basePath = 'Communications/' + this.dataDetails.GroupCode + '/' + this.dataDetails.TopicCode + '/' + 'Chat/';
        this.getMessageDetail(this.dataDetails.Count);
        this.events.publish('read:message',response);
        }
        resolve(response.Data[0]);
      }).catch((error) => {
        reject();
      });
    });

  }

  getMessageDetail(messageCount){
    firebase.database().ref(this.basePath).orderByKey().limitToLast(messageCount).once('value', (snapshot) => {
    let messages : any;
    messages = snapshot.val();
    console.log(messages);
    for(let key in messages){
      console.log(key);
      this.messageKeyRef = this.basePath + key;
      this.doReading(messages[key]);
    }
  });
  }

  doReading(message) {
    console.log(message);
    
      //adding myself to read list
      if (message.Read && this.dataDetails.UserID in message.Read) {//already read by me
        if (message.Status !== 2) { // & not 2 already
          this.updateStatus(message);
        }
      } else {
        //now making it read by me
        firebase.database().ref(this.messageKeyRef + '/Read/' + this.dataDetails.UserID).set(firebase.database.ServerValue.TIMESTAMP).then(result => {
          if (this.message.Status !== 2) { // & not 2 already
            this.updateStatus(message);
          }
        });
    }
  }


  /**
   * update status of message if sent by other user id
   * 1: if 
   * 2: if read by all
   */
  updateStatus(message) {
    console.log(message);
    
    /**
     * if sent by 
     * 1. Dentist
     *  1.1 even if single GroupUser reads, make it 2
     * 2. Group User
     *  2.1 If any single dentist read, make it 1
     *  2.2 read by all dentist & group users, make it 2
     */
    if (!('UserID' in message)) {
      message['UserID'] = 0;
    }
    if (message.UserID !== this.dataDetails.UserID) { //avoid same user type also
      let status = -1;
      //checking if read by all
      if (_.size(message.Read) === this.dataDetails.UserCount) {
        status = 2;
      } else {
        status = 1;
      }
      console.log(status);
      
      if (status > 0) {
        firebase.database().ref(this.messageKeyRef + '/Status').set(status);
      }
    }
  }

}
