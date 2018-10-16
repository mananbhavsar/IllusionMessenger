import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

import { Global } from "../../app/global";

import { ConnectionProvider } from "../connection/connection";
import { Platform } from 'ionic-angular';

@Injectable()
export class NotificationsProvider {

  constructor(
    private _oneSignal: OneSignal,
    private _connection: ConnectionProvider,
    private _platform: Platform,
  ) {

  }

  sends(notifications, page = null, params = null, image_url = null) {
    if (notifications && notifications.length) {
      notifications.forEach(notification => {
        this.send(notification.DeviceID, notification.Title, notification.Message, notification.Badge, page, params, image_url).catch(error => { });
      });
    }
  }

  send(player_ids, headings, contents, badge, page = null, params = null, image_url = null) {
    return new Promise((resolve, reject) => {
      if (player_ids === null) {
        reject('Player Id is required');
        return;
      }
      //checking if its an string
      if (typeof player_ids === 'string') {
        player_ids = [player_ids];
      }
      //checking if headings is a string
      if (typeof headings === 'string') {
        headings = {};
        headings[this._connection.user.MyLanguage] = headings;
      }
      //checking if content is a string
      if (typeof contents === 'string') {
        contents = {};
        contents[this._connection.user.MyLanguage] = contents;
      }

      let notificationObj: any = {
        include_player_ids: player_ids,
        data: {
          badge: badge,
        },
        headings: headings,
        priority: 10,
        contents: contents,
        android_accent_color: 'FF' + Global.color.primary,
        ios_badgeType: 'SetTo',
        ios_badgeCount: badge,
      };
      console.log(notificationObj);

      //checking if need to open page
      if (page) {
        notificationObj.data.page = page;
      }
      //checking if need to open page with params
      if (page) {
        notificationObj.data.params = params;
      }
      //checking if needs to show image
      if (image_url) {
        notificationObj['ios_attachments'] = {
          'attachment-1': image_url,
        };
        notificationObj['big_picture'] = image_url;
      }
      if (this._platform.is('cordova')) {
        this._oneSignal.postNotification(notificationObj).then(response => {
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      } else {
        resolve('sent');
      }
    });
  }
}
