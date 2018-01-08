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

  

}
