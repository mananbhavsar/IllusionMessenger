import { CreateTopicPage } from './../topic/create-topic/create-topic';
import { ChatPage } from './../chat/chat';
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
  title: string = '';
  group: Array<any> = [];
  badges: Array<any> = [];
  page: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider) {
    this.title = this.navParams.data.Group;
    this.group_id = this.navParams.data.GroupID;
  }

  ionViewDidEnter() {
    this.getGroupDetails();
  }

  getGroupDetails() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupDetail', {
        GroupID: this.group_id,
        PageNumber: this.page,
        RowsPerPage: 20
      }).then((response: any) => {
        this.group = response;
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  refresh(refresher) {
    this.page = 0;
    this.getGroupDetails().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }

  getExpiry(DueDate) {
    let momentDate = moment(DueDate, 'YYYY/MM/DD');
    if (moment().diff(momentDate) < 0) {
      return 'Due in ' + momentDate.fromNow(true);
    } else {
      return 'Expired ' + momentDate.fromNow();
    }
  }

  isEmpty(object) {
    return _.isEmpty(object);
  }

  openTopic(topic, index, type) {
    if (topic.Count) {
      topic.Count = 0;
      this.group[type].Count = 0;
    }
    this.navCtrl.push(ChatPage, {
      topicID: topic.TopicID,
      groupID: this.group_id
    });
  }

  closeTopic() {
    this.navCtrl.push(CloseTopicPage, this.group_id);
  }

  headerButtonClicked(event) {
    switch (event.name) {
      case 'options':
        this.openGroupOptions(event);
        break;

      case 'create-topic':
        this.navCtrl.push(CreateTopicPage, this.group_id);
        break
    }
  }

  openGroupOptions(event) {
    this.navCtrl.push(GroupOptionsPage, this.group_id);
  }

}
