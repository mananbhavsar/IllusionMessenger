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
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  group_id: number = 0;
  title: string = '';
  group: Array<any> = [];
  badges: any = {};
  page: number = 0;
  color: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    public angularFireDatabase: AngularFireDatabase,
  ) {
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

        this.setForBadge();
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  setForBadge() {
    this.angularFireDatabase.object('Badge/' + this.connection.user.id + '/Groups/' + this.group['GroupDetail'][0].GroupCode + '/Topics').snapshotChanges().subscribe(snapshot => {
      snapshot = snapshot.payload.val();
      if (!_.isEmpty(snapshot)) {
        this.badges = snapshot;
      }
    });
  }

  getBadge(topicCode) {
    if (!(topicCode in this.badges)) {
      this.badges[topicCode] = 0;
    }
    return this.badges[topicCode];
  }

  refresh(refresher) {
    this.page = 0;
    this.getGroupDetails().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }

  isExpired(date) {
    if (moment(date).isValid() && Math.abs(moment().diff(moment(date), 'years')) < 20) {
      return (new Date().getTime() - moment(date).toDate().getTime()) > 0;
    }
    return null;
  }

  getExpiry(dueDate) {
    switch (this.isExpired(dueDate)) {
      case null:
        return '';

      case true:
        return moment(dueDate).from(moment());

      case false:
        return moment(dueDate).from(moment());
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
