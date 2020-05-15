import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from "moment";
import { ConnectionProvider } from '../../../providers/connection/connection';
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-daily-shedule',
  templateUrl: 'daily-shedule.html',
})
export class DailyShedulePage {
  title: string = 'Task due today';
  topics: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    public connectionProvider: ConnectionProvider) {

  }

  ionViewDidEnter() {
    this.topics = [];
    this.getData();
  }

  dismiss(event) {
    this.navCtrl.setRoot('HomePage');
  }

  // daily popup of today's all topics
  getData() {
    return new Promise((resolve, reject) => {
      this.connectionProvider.doPost('Chat/MyTaskDueToday', {
      }, false).then((response: any) => {
        if (response.TopicList.length > 0) {
          this.topics = response.TopicList;
        } else {
          this.topics = [];
        }
        resolve(true);
      }).catch((error) => {
        reject();
      });
    });
  }

  refresh(refresher) {
    this.topics = [];
    this.getData().then((response) => {
      refresher.complete();
    }).catch((error) => {
      refresher.complete();
    })
  }
  // on click of ok set seen and don't show again
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
