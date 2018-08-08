import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Events, Nav } from 'ionic-angular';
import * as _ from 'underscore';
import { UserProvider } from '../user/user';
import { FlashPage } from '../../pages/flash/flash';
import { HomePage } from '../../pages/home/home';


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
    console.log(this.flashID);

    firebase.database().ref('FlashNews/' + this.flashID + '/' + this.user._user.LoginUserID).once('value', (status) => {
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
        params: { news: flash, id: flash.FlashID }
      });
    }
    else {
      if (this.wastheredataLastTime) {
        this.wastheredataLastTime = false;
        this.events.publish('page:setroot', {
          page: 'HomePage',
          params: null
        });
      }
    }
  }

  markRead(flashID) {
    firebase.database().ref('FlashNews/' + flashID + '/' + this.user._user.LoginUserID).set(true);
    delete this.flashNews[flashID];
    this.currentlyopened = 0;
    this.checkAndOpen();
  }
}
