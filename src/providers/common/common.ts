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

  build_query(params) {

    var esc = encodeURIComponent;
    return Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
  }

  hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }


  joinAnd(array: Array<string>): string {
    let joined = '';
    if (array.length === 1) {
      joined = array[0];
    } else if (array.length === 2) {
      //joins all with "and" but no commas
      //example: "bob and sam"
      joined = array.join(' and ');
    } else if (array.length > 2) {
      //joins all with commas, but last one gets ", and" (oxford comma!)
      //example: "bob, joe, and sam"
      joined = array.slice(0, -1).join(', ') + ', and ' + array.slice(-1);
    }
    return joined;
  }

}
