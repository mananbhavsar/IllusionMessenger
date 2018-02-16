import { ConnectionProvider } from './../../providers/connection/connection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  group_id: number = 0;
  title: string = 'Loading';
  group: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
  ) {
    this.group_id = this.navParams.data;
  }

  ionViewDidEnter() {
    this.group = {
      ActiveTopicList: [{
        Name: 'Topic 1A',
        badge: 1,
      }],
      SystemTopicList: [{
        Name: 'Topic 2A',
        badge: 3,
      }],
      ClosedTopicList: [{
        Name: 'Topic 3A',
        badge: 0,
      }],
    }
    // this.getGroupDetails();
  }

  getGroupDetails() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupDetail', {
        GroupID: this.group_id
      }).then(group => {
        console.log(group);
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  refresh(refresher) {
    this.getGroupDetails().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }

  isEmpty(object) {
    return _.isEmpty(object);
  }

  openTopic(topic) {

  }

  headerButtonClicked(event) {
    this.openGroupOptions(event);
  }

  openGroupOptions(event) {
    //open Option Group
    
  }


}
