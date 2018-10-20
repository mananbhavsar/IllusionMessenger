import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as moment from "moment";
import * as firebase from 'firebase';
import * as _ from 'underscore';
import { TabsPage } from '../../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-daily-shedule',
  templateUrl: 'daily-shedule.html',
})
export class DailyShedulePage {
  title: string = 'Task due today';
  topics: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    public connectionProvider: ConnectionProvider) {

  }

  ionViewDidLoad() {
    this.getData();
  }

  dismiss(event) {
    this.navCtrl.setRoot('HomePage');
  }


  getData() {
    return new Promise((resolve, reject) => {
      this.connectionProvider.doPost('Chat/MyTaskDueToday', {

      },false).then((response: any) => {
        if (_.isEmpty(response.TopicList)) {
          // this.navCtrl.setRoot('HomePage');
        } else {
          this.topics = response.TopicList;
        }
        resolve(true);
      }).catch((error) => {
        reject();
      });
    });
  }

  refresh(refresher) {
    this.getData().then((response) => {
      refresher.complete();
    }).catch((error) => {
      refresher.complete();
    })
  }

  dueTopicsSeen() {
    let date = moment().format('YYYY/MM/DD');
    let ref = firebase.database().ref('DailyScheduler/' + this.connectionProvider.user.LoginUserID
      + '/' + date);
    ref.on('value', (status) => {
      if (status.val() === null) {
        // update to firebase
        ref.set(true);
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

}
