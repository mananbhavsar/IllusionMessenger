import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-daily-shedule',
  templateUrl: 'daily-shedule.html',
})
export class DailyShedulePage {
  title: string = 'Daily Sheduler';
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

      }).then((response: any) => {
        if (_.isEmpty(response.TopicList)) {
          this.navCtrl.setRoot('HomePage');
        } else {
          this.topics = response.TopicList;
        }
        resolve(true);
      }).catch((error) => {
        reject();
      });
    });
  }

}
