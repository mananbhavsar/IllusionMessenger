import { Injectable } from '@angular/core';
import { Platform, ModalController, Events, normalizeURL } from 'ionic-angular';

import { Global } from '../../app/global';

import { File } from '@ionic-native/file';


@Injectable()
export class CommonProvider {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isCordova: boolean = false;

  constructor(
    private file: File,
    private platform: Platform,
    private events: Events,
  ) {
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');
    this.isCordova = this.platform.is('cordova');
  }

  getDataDirectory() {
    return new Promise((resolve, reject) => {
      if (this.isCordova) {
        if (this.isAndroid) {
          //creating folder
          this.file.createDir(this.file.externalRootDirectory, Global.APP_NAME, false).then(entry => {
            resolve(this.file.externalRootDirectory + Global.APP_NAME + '/');
          }).catch(error => {
            if (error.code === 12) { //Dir Exist
              resolve(this.file.externalRootDirectory + Global.APP_NAME + '/');
            } else {
              reject(error);
            }
          });
        } else { //iOS
          resolve(this.file.dataDirectory);
        }
      } else {
        resolve(this.file.dataDirectory);
      }
    });
  }

  build_query(params) {

    var esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

}
