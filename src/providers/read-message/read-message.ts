import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Events } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../connection/connection';
import { FirebaseTransactionProvider } from '../firebase-transaction/firebase-transaction';
@Injectable()
export class ReadMessageProvider {
  groupCode: any = [];
  topicCode: any = [];

  messagePath: firebase.database.Reference;
  message: any = {};
  userID: number;
  users: any = [];
  dataDetails: any = [];
  readAll: boolean;
  constructor(
    public connection: ConnectionProvider,
    public _firebaseTransaction: FirebaseTransactionProvider,
    public events: Events

  ) {

  }
// to read message 
  read(selectedGroup: any, selectedTopic: any, readAll: boolean = false) {
    return new Promise((resolve, reject) => {
      // check if message is from group or topic
      if (!_.isEmpty(selectedGroup)) {
        this.groupCode = selectedGroup;
      }
      if (!_.isEmpty(selectedTopic)) {
        this.topicCode = selectedTopic;
      }
      this.connection.doPost('Chat/ReadAll', {
        ReadAll: readAll,
        GroupCode: this.groupCode.map(GroupCode => GroupCode.GroupCode),
        TopicCode: this.topicCode.toString(),
      }).then((response: any) => {
        if (response) {
          if (response.FireBaseTransaction) {
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
          }
          response.Data.forEach((unreadData, index) => {
            let basePath = 'Communications/' + unreadData.GroupCode + '/' + unreadData.TopicCode + '/' + 'Chat/';
            this.getMessageDetail(unreadData, basePath);
          });
          this.events.publish('read:message', response);
        }
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });

  }
// get list of messages which are unread
  getMessageDetail(unreadData, basePath) {
    firebase.database().ref(basePath).orderByKey().limitToLast(unreadData.Count).once('value', (snapshot) => {
      let messages: any;
      messages = snapshot.val();
      for (let key in messages) {
        let messageKeyRef = basePath + key;
        this.doReading(messageKeyRef, messages[key], unreadData);
      }
    });
  }
 // set message is read 
  doReading(messageKeyRef, messages, unreadData) {
    //adding myself to read list
    if (messages.Read && this.connection.user.LoginUserID in messages.Read) {//already read by me
      if (messages.Status !== 2) { // & not 2 already
        this.updateStatus(messageKeyRef, messages, unreadData);
      }
    } else {
      //now making it read by me
      firebase.database().ref(messageKeyRef + '/Read/' + this.connection.user.LoginUserID).set(firebase.database.ServerValue.TIMESTAMP).then(result => {
        if (this.message.Status !== 2) { // & not 2 already
          this.updateStatus(messageKeyRef, messages, unreadData);
        }
      });
    }
  }


  /**
   * update status of message if sent by other user id
   * 1: if 
   * 2: if read by all
   */
  updateStatus(messageKeyRef, messages, unreadData) {
    /**
     * if sent by 
     * 1. Dentist
     *  1.1 even if single GroupUser reads, make it 2
     * 2. Group User
     *  2.1 If any single dentist read, make it 1
     *  2.2 read by all dentist & group users, make it 2
     */
    if (!('UserID' in messages)) {
      messages['UserID'] = 0;
    }
    if (messages.UserID !== unreadData.UserID) { //avoid same user type also
      let status = -1;
      //checking if read by all
      if (_.size(messages.Read) === unreadData.UserCount) {
        status = 2;
      } else {
        status = 1;
      }
      if (status > 0) {
        firebase.database().ref(messageKeyRef + '/Status').set(status);
      }
    }
  }

}
