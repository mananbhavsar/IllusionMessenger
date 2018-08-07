import { Injectable,ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Events, Nav} from 'ionic-angular';
import * as _ from 'underscore';
import { UserProvider } from '../user/user';
import { FlashPage } from '../../pages/flash/flash';
import { HomePage } from '../../pages/home/home';


@Injectable()
export class FlashNewsProvider {
  flashNews: any = [];
  @ViewChild(Nav) nav: Nav;
  constructor(
    private events: Events,
    private user : UserProvider
  ) {

  }

  openUnreadFlashNews(FlashNews) {
    console.log('flash');
    this.user.hasLoggedIn().then((user) => {
      if (!_.isEmpty(user)) {
        let ref = firebase.database().ref('FlashNews/' + user.LoginUserID
          + '/' + FlashNews.FlashID);
        ref.on('value', (status) => {
          console.log(status.val());
          // if (status.val() === true) {
          //   // show popup
          //   ref.set(true);
          //   // this.nav.setRoot(HomePage, { news: FlashNews, id: FlashNews.FlashID });
          // }
        });
      }
    });

  }
}
