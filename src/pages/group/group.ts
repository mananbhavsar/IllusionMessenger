import { DateProvider } from './../../providers/date/date';
import { CreateTopicPage } from './../topic/create-topic/create-topic';
import { ChatPage } from './../chat/chat';
import { ConnectionProvider } from './../../providers/connection/connection';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular';
import { GroupOptionsPage } from './../group/group-options/group-options';
import { CloseTopicPage } from './../topic/close-topic/close-topic';

import * as _ from 'underscore';
import * as  moment from "moment";
import { locale } from 'moment';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  @ViewChild('slides') slides: Slides;

  group_id: number = 0;
  title: string = '';
  group: any = {};
  badges: any = {};
  page: number = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    private _date: DateProvider,
    private modalController: ModalController,
  ) {
    this.title = this.navParams.data.Group;
    this.group_id = this.navParams.data.GroupID;
  }

  ionViewDidEnter() {
    this.getGroupDetails().then(status => {

    }).catch(error => {

    });
  }

  getGroupDetails() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupDetail', {
        GroupID: this.group_id,
        PageNumber: this.page,
        RowsPerPage: 20,
        Query: '',
      }, false).then((response: any) => {
        this.group = response;

        this.setForBadge();
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }

  setForBadge() {
    firebase.database().ref('Badge/' + this.connection.user.id + '/Groups/' + this.group['GroupDetail'][0].GroupCode + '/Topics').on('value', snapshot => {
      snapshot = snapshot.val();
      if (snapshot && !_.isEmpty(snapshot)) {
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
      return (new Date().getTime() - this._date.fromServerFormat(date).toDate().getTime()) > 0;
    }
    return null;
  }

  getExpiry(dueDate) {
    switch (this.isExpired(dueDate)) {
      case null:
        return '';

      case true:
        return this._date.fromServerFormat(dueDate).from(moment());

      case false:
        return this._date.fromServerFormat(dueDate).from(moment());
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
      groupID: this.group_id,
    });
  }

  viewAllClosedTopics() {
    let closeTopicModal = this.modalController.create(CloseTopicPage, {
      group_id: this.group_id,
      group_name: this.title,
      group_code: this.group['GroupDetail'][0].GroupCode,
    });
    closeTopicModal.onDidDismiss(data => {
      if (data) {
        //this.navCtrl.pop();
      }
    });
    closeTopicModal.present();
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
    let groupOptionsModal = this.modalController.create(GroupOptionsPage, {
      group_id: this.group_id,
      group_name: this.title,
    });
    groupOptionsModal.onDidDismiss(data => {
      if (data) {
        this.group = [];
        this.page = 0;
        setTimeout(() => {
          this.getGroupDetails();
          //if needs to go to ChatPage
          if (data.page && data.page === 'ChatPage') {
            this.navCtrl.push(ChatPage, data.params);
          }
        });
      }
    });
    groupOptionsModal.present();
  }
}