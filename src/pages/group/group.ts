import { Component, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { ActionSheetController, IonicPage, ModalController, NavController, NavParams, Slides, Events } from 'ionic-angular';
import * as moment from "moment";
import * as _ from 'underscore';
import { ConnectionProvider } from './../../providers/connection/connection';
import { DateProvider } from './../../providers/date/date';
import { ChatPage } from './../chat/chat';
import { GroupOptionsPage } from './../group/group-options/group-options';
import { CloseTopicPage } from './../topic/close-topic/close-topic';
import { CreateTopicPage } from './../topic/create-topic/create-topic';
import { FlashNewsProvider } from '../../providers/flash-news/flash-news';
import { CommonProvider } from '../../providers/common/common';
import { OfflineStorageProvider } from '../../providers/offline-storage/offline-storage';
import { Network } from '@ionic-native/network';


@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  @ViewChild('slides') slides: Slides;

  group_id: number = 0;
  title: string = '';
  group: Array<any> = null;
  badges: any = {};
  page: number = 0;
  systemGroup: any = [];
  query: string;
  activeTopicList: any = [];
  searchInputBtn: boolean = false;

  //sort option
  sort_by: string = 'CreationDate';
  sort_order: string = 'ASC';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    private _date: DateProvider,
    private modalController: ModalController,
    public flashNewsProvider: FlashNewsProvider,
    public _offlineStorage: OfflineStorageProvider,
    private actionSheetController: ActionSheetController,
    public common: CommonProvider,
    public network: Network,
    public events: Events,
  ) {
    this.group_id = this.navParams.data.GroupID;
    this.setTitle();
  }

  ionViewWillEnter() {
    this.group = [];
    this.activeTopicList = [];
    this._offlineStorage.get('offline:Groups-Wise', this.group, this.group_id).then((data: any) => {
      if (_.isEmpty(data)) {
        this.group = [];
      } else {
        this.group = data;
      }
      this.page = 0;
      this.getGroupDetails();
    });
  }

  getGroupDetails() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject(false);
      } else {
        this.connection.doPost('Chat/GetGroupDetail', {
          GroupID: this.group_id,
          PageNumber: this.page,
          RowsPerPage: 20,
          Query: this.query,
          OrderBy: this.sort_by,
          Order: this.sort_order,
        }, false).then((response: any) => {
          //flash
          if (response.FlashNews) {
            response.FlashNews.forEach((news, key) => {
              this.flashNewsProvider.openUnreadFlashNews(news, this.group_id);
            });
          }
          this.group = response;
          if (this.systemGroup.length == 0) {
            this.systemGroup = response.SystemTopicList;
          } if (this.group) {
            this._offlineStorage.set('offline:Groups-Wise', this.group, this.group_id);
            response.ActiveTopicList.forEach(list => {
              this.activeTopicList.push(list);
            });
            this.setForBadge();
            this.page++;
            resolve(true);
          } else {
            this.activeTopicList = [];
            this.page = -1;
            resolve(false);
          }
        }).catch(error => {
          this.page = -1;
          resolve(false);
        });
      }
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
    this.group = null;
    this.activeTopicList = [];
    this.getGroupDetails().then(status => {
      // this.common.registerDevice(true);
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }

  paginate(paginator) {
    this.getGroupDetails().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
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

  openGeneralTopic(topic, index, type) {
    if (topic) {
      if (topic.Count) {
        topic.Count = 0;
        this.group[type].Count = 0;
      }
      this.navCtrl.push(ChatPage, {
        topicID: topic.TopicID,
        groupID: this.group_id,
        Topic: topic
      });
    }
  }

  topicCliked(event) {
    if (event && event.topic) {
      if (event.topic.Count) {
        event.topic.Count = 0;
        //make count zero
        this.group[event.type].Count = 0;
      }

    }
  }

  viewAllClosedTopics() {
    let closeTopicModal = this.modalController.create(CloseTopicPage, {
      group_id: this.group_id,
      group_name: this.title,
      group_code: this.group['GroupDetail'][0].GroupCode,
    });
    closeTopicModal.onDidDismiss(data => {
      this.setTitle();
      //refresh page
      this.page = 0;//to keep consistency
      this.ionViewWillEnter();
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
        break;

      case 'search':
        this.searchData();

    }
  }

  searchData() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.group = [];
      this.activeTopicList = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  initializeItems() {
    this.page = 0;
    this.activeTopicList = [];
    this.getGroupDetails().catch(error => {
    });
  }

  onClear(event) {
    this.query = null;
    this.activeTopicList = [];
    this.initializeItems();
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.activeTopicList = [];
      this.getGroupDetails().catch(error => {
      });

    } else {
      this.query = null;
      this.activeTopicList = [];
      this.initializeItems();
    }
  }



  openGroupOptions(event) {
    let groupOptionsModal = this.modalController.create(GroupOptionsPage, {
      group_id: this.group_id,
      group_name: this.title,
    });
    groupOptionsModal.onDidDismiss(data => {
      this.setTitle();
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

  openSortOptions() {
    //creating buttons
    let buttons = [];
    let sortingOptions = {
      'CreationDate': 'Creation Date',
      'DueDate': 'Due Date',
    };
    for (let key in sortingOptions) {
      let label = sortingOptions[key];
      let icon = null;
      if (key === this.sort_by) {
        icon = this.sort_order === 'ASC' ? 'ios-arrow-round-up-outline' : 'ios-arrow-round-down-outline';
      }
      buttons.push({
        text: label,
        icon: icon,
        handler: () => {
          //if not selected initially, making it desc so it could be reversed later
          if (this.sort_by !== key) {
            this.sort_order = 'DESC';
          }
          this.sort_by = key;
          this.sort_order = this.sort_order === 'ASC' ? 'DESC' : 'ASC';
          this.doSorting();
        }
      });
    }

    //cancel button
    buttons.push({
      text: 'Cancel',
      role: 'cancel',
    });
    //creating action sheet
    let sortActionSheet = this.actionSheetController.create({
      title: 'Select sort options',
      buttons: buttons
    });
    sortActionSheet.present();
  }

  doSorting() {
    this.group = [];
    this.page = 0;
    this.getGroupDetails();
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = this.navParams.data.Group;
    });
  }

  getTitle() {
    return this.title;
  }
}