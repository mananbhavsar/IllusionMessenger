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
  
  messagePath : firebase.database.Reference;
  messageKeyRef : string;
  message : any = {};
  userID : number;
  users :any = [];
  dataDetails : any = [];
  readAll:boolean;
  constructor(
    public connection: ConnectionProvider,
    public _firebaseTransaction: FirebaseTransactionProvider,
    public events : Events

  ) {
  }

  read(selectedGroup: any, selectedTopic: any,readAll : boolean = false) {
    return new Promise((resolve, reject) => {
    if (!_.isEmpty(selectedGroup)) {
      this.groupCode = selectedGroup;
    }
    if(!_.isEmpty(selectedTopic)){
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
          response.Data.forEach((unreadData,index) => {   
            let basePath = 'Communications/' + unreadData.GroupCode + '/' + unreadData.TopicCode + '/' + 'Chat/';
            this.getMessageDetail(unreadData, basePath); 
          });
        this.events.publish('read:message',response);
        }
        resolve(response.Data);
      }).catch((error) => {
        reject();
      });
    });

  }

  getMessageDetail(message,basePath){
    firebase.database().ref(basePath).orderByKey().limitToLast(message.Count).on('value', (snapshot) => {
    let messages : any;
    messages = snapshot.val();
    for(let key in messages){
      this.messageKeyRef = basePath + key;
      this.doReading(messages[key],message);
    }
  });
  }

  doReading(messages,message) {
      //adding myself to read list
      if (messages.Read && message.UserID in messages.Read) {//already read by me
        if (messages.Status !== 2) { // & not 2 already
          this.updateStatus(messages,message);
        }
      } else {
        //now making it read by me
        firebase.database().ref(this.messageKeyRef + '/Read/' + message.UserID).set(firebase.database.ServerValue.TIMESTAMP).then(result => {
          if (this.message.Status !== 2) { // & not 2 already
            this.updateStatus(messages,message);
          }
        });
  }
  }


  /**
   * update status of message if sent by other user id
   * 1: if 
   * 2: if read by all
   */
  updateStatus(messages,message) {
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
    if (messages.UserID !== message.UserID) { //avoid same user type also
      let status = -1;
      //checking if read by all
      if (_.size(messages.Read) === message.UserCount) {
        status = 2;
      } else {
        status = 1;
      }
      if (status > 0) {
        firebase.database().ref(this.messageKeyRef + '/Status').set(status);
      }
    }
  }

}
