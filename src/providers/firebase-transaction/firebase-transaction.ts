import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from 'underscore';

@Injectable()
export class FirebaseTransactionProvider {

  constructor() {
  }

  doTransaction(transations: Array<{ Path?: string, Value?: number, ValueStr?: string }>) {
    return new Promise((resolve, reject) => {
      if (!_.isEmpty(transations)) {
        var processed = 0;
        transations.forEach((object) => {
          let value: any = null;
          if (object.Value !== null) {
            value = object.Value;
          }
          if (object.ValueStr !== null) {
            value = object.ValueStr;
          }
          if (value !== null) {
            let path = object.Path;
            firebase.database().ref(path).set(value).then(result => {
              processed++;
              if (processed === transations.length) {
                resolve(true);
              }
            });
          } else {
            processed++;
            if (processed === transations.length) {
              resolve(true);
            }
          }
        });
      } else {
        reject('Empty');
      }
    });
  }

}
