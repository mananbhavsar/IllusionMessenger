import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseTransactionProvider {

  constructor() {
  }

  doTransaction(transations) {
    for (let path in transations) {
      let count = transations[path];
      if (isNaN(count)) {
        count = 0;
      } else {
        count = parseInt(transations[path]);
      }
      firebase.database().ref(path).transaction(countOnFirebase => {
        //null prevention
        countOnFirebase = countOnFirebase || 0;
        //checking if count negative to update
        if (countOnFirebase === 0 && count < 0) {
          return countOnFirebase;
        }
        return countOnFirebase + count;
      });
    }
  }

}
