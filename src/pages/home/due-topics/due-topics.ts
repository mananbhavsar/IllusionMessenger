import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-due-topics',
  templateUrl: 'due-topics.html',
})
export class DueTopicsPage {
  title: string = 'loading';
  topics: any = [];
  day: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    public connection: ConnectionProvider) {
    this.day = this.navParams.data.Day;

    this.getData();
    this.setTitle();
  }

  dismiss() {
    this.viewCntl.dismiss();
  }

  getData() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetTaskDueInDaysDetail', {
        Days: this.day
      }).then((response: any) => {
        if (response) {
          this.topics = response.TopicList;
          resolve(true);
        }
      }).catch((error) => {

      });
    });
  }

  refresh(refresher) {
    this.getData().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    });
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      switch (this.day) {
        case -1:
          this.title = 'Past task due days';
          break;
        case 0:
          this.title = 'Task due today';
          break;
        default:
          this.title = 'Task due in ' + this.day + ' days';
      }
    });
  }

  getTitle() {
    return this.title;
  }


}
