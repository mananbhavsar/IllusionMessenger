import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Events, Nav } from 'ionic-angular';
import * as _ from 'underscore';
import { UserProvider } from '../user/user';


@Injectable()
export class FlashNewsProvider {
  flashNews: any = {};
  currentlyopened: number = 0;
  flashID: number;
  wastheredataLastTime: boolean = false;
  constructor(
    private events: Events,
    private user: UserProvider
  ) {
    //this will check on regular interval if any pending
    setInterval(() => {
      this.checkAndOpen();
    }, 30000);
  }

  openUnreadFlashNews(FlashNews) {
    this.flashID = FlashNews.FlashID;
    //check if this flash has opened
    firebase.database().ref('FlashNews/' + this.flashID + '/' + this.user._user.LoginUserID).on('value', (status) => {
      if (status.val() === null) {
        if (!(this.flashID in this.flashNews)) {
          this.flashNews[this.flashID] = FlashNews;
        }
      }
    });
  }

  checkAndOpen() {
    if (!_.isEmpty(this.flashNews) && this.currentlyopened === 0) {
      this.wastheredataLastTime = true;
      let flash: any = this.flashNews[this.flashID];
      this.currentlyopened = flash.FlashID;
      // show popup
      this.events.publish('page:setroot', {
        page: 'FlashPage',
        params: { news: flash, id: flash.FlashID, isPage: true },
      });
    }
    else {
      if (this.wastheredataLastTime) {
        this.wastheredataLastTime = false;
        this.events.publish('page:setroot', {
          page: 'HomePage',
          params: null,
        });
      }
    }
  }

  markRead(flashID) {
    firebase.database().ref('FlashNews/' + flashID + '/' + this.user._user.LoginUserID).set(true).then(() => {
      this.events.publish('loading:create');
      this.checkAndOpen();
      delete this.flashNews[flashID];
      this.currentlyopened = 0;
    });
  }
}
