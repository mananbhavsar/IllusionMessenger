import { Injectable } from '@angular/core';
import { ConnectionProvider } from '../connection/connection';
import { FirebaseTransactionProvider } from '../firebase-transaction/firebase-transaction';
import * as _ from 'underscore';
@Injectable()
export class ReadMessageProvider {
  groupCode: any = [];
  topicCode: any = [];
  constructor(
    public connection: ConnectionProvider,
    public _firebaseTransaction: FirebaseTransactionProvider
  ) {
  }

  readMessage(selectedGroup: any, selectedTopic: any) {
    if (!_.isEmpty(selectedGroup)) {
      this.groupCode = selectedGroup;
    }
    if(!_.isEmpty(selectedTopic)){
      this.topicCode = selectedTopic;
    }
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/ReadAll', {
        ReadAll: false,
        GroupCode: this.groupCode.map(GroupCode => GroupCode.GroupCode),
        TopicCode: this.topicCode.toString(),
      }).then((response: any) => {
        if (response) {
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
