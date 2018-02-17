import { ConnectionProvider } from './../../providers/connection/connection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupOptionsPage } from './../group/group-options/group-options';
import { CloseTopicPage } from '../close-topic/close-topic';
import * as _ from 'underscore';

import * as  moment from "moment";
import { locale } from 'moment';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  group_id: number = 0;
  title: string='';
  group: any = {};
  badges:Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider){
    this.title=this.navParams.data.Group;
    this.group_id = this.navParams.data.GroupID;
  }

  ionViewDidEnter() {
     this.getGroupDetails();
  }

  getGroupDetails() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupDetail', {
        GroupID: this.group_id
      }).then(group => {
        this.group =group;
        console.log(group);
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  getExpiry(DueDate) {
    let momentDate = moment(DueDate, 'YYYY/MM/DD');
      if (moment().diff(momentDate) < 0) {
      return 'due in ' + momentDate.fromNow(true);
    } else {
      return 'expired ' + momentDate.fromNow();
    }
  }
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
  closeTopic(){
  this.navCtrl.push(CloseTopicPage,this.group_id);
  }

  headerButtonClicked(event) {
    this.openGroupOptions(event);
  }

  openGroupOptions(event) {
    this.navCtrl.push(GroupOptionsPage,this.group_id);    
  }

}
