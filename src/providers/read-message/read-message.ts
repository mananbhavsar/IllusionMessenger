import { Injectable } from '@angular/core';
import { ConnectionProvider } from '../connection/connection';
import { FirebaseTransactionProvider } from '../firebase-transaction/firebase-transaction';
import * as _ from 'underscore';
import { Events } from 'ionic-angular';
@Injectable()
export class ReadMessageProvider {
  groupCode: any = [];
  topicCode: any = [];
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
          this.events.publish('read:message',response.Data);
          if (response.FireBaseTransaction) {
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
          }
        }
        resolve(response);
      }).catch((error) => {
        reject();
      });
    });

  }
}
