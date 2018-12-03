import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../connection/connection';

@Injectable()
export class OfflineStorageProvider {
  constructor(
    private storage: Storage,
    public _network: Network,
    public events: Events,
    public connection: ConnectionProvider
  ) {
  }

  set(key, value, subKey = null, subSubKey = null, id = null) {
    
    return new Promise((resolve, reject) => {
      this.storage.get(key).then((data) => {
        //checking data is present
        if (_.isEmpty(data)) {
          data = {
            data: null,
            child: {}
          };
        }
        if (id) {
          if (!(id in data.child[subKey].child[subSubKey].child)) {

            data.child[subKey].child[subSubKey].child[id] = {
              data: null,
              child: {}
            };
          }
          
          data.child[subKey].child[subSubKey].child[id].data = value;
        } else if (subSubKey) {

          if (!(subSubKey in data.child[subKey].child)) {

            data.child[subKey].child[subSubKey] = {
              data: null,
              child: {}
            };
          }
          data.child[subKey].child[subSubKey].data = value;

        } else if (subKey) {   //checking data to subkey
          if (!(subKey in data.child)) {
            data.child[subKey] = {
              data: null,
              child: {}
            };
          }
          data.child[subKey].data = value;
        } else {
          data.data = value;
        }

        this.storage.set(key, data).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
    });
  }


  get(key, value, subData = null, subSubData = null, id = null) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then((data) => {
        if (_.isEmpty(data)) {
          value = null;
        } else {
          value = data.data;
        }
        if (subData) {
          if (subData in data.child) {
            value = data.child[subData].data;
          } else {
            value = null;
          }
        }
        if (subData && subSubData) {
          if (subData in data.child) {
            if (subSubData in data.child[subData].child) {
              value = data.child[subData].child[subSubData].data;
            } else {
              value = null;
            }
          }
        }

        if (subData && subSubData && id) {
          if (subData in data.child) {
            if (subSubData in data.child[subData].child) {
              if (id in data.child[subData].child[subSubData].child) {
                value = data.child[subData].child[subSubData].child[id].data;
              } else {
                value = null;
              }
            }
          }
        }
        resolve(value);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}
