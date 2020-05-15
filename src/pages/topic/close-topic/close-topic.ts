import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { ActionSheetController, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from "moment";
import * as _ from 'underscore';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { OfflineStorageProvider } from '../../../providers/offline-storage/offline-storage';
import { DateProvider } from './../../../providers/date/date';
import { ChatPage } from './../../chat/chat';

@IonicPage()
@Component({
  selector: 'page-close-topic',
  templateUrl: 'close-topic.html',
})
export class CloseTopicPage {
  group_id: number = null;
  group_code: string = null;
  group_name: string = 'loading';

  topics: Array<any> = null;
  pushedTopicsID: Array<any> = [];
  page: number = 0;
  list: Array<any> = [];
  query: string = null;

  showSearch: boolean = false;

  badges: any = {};

  //sort option
  sort_by: string = 'CloseDatime';
  sort_order: string = 'ASC';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
    private viewController: ViewController,
    private _date: DateProvider,
    public storage: Storage,
    public _network: Network,
    public _offlineStorage: OfflineStorageProvider,
    private actionSheetController: ActionSheetController,
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;
    this.group_code = this.navParams.data.group_code;

  }

  ionViewDidEnter() {
    this.topics = [];
    this._offlineStorage.get('offline:Groups-Wise', this.topics, this.group_id, this.group_id).then((data: any) => {
      if (_.isEmpty(data)) {
        this.topics = [];
      } else {
        data.forEach(group => {
          this.pushItem(group);
        });
      }
      this.getDetails().then(status => {
        this.setForBadge();
      }).catch(error => {

      });
    });
  }

  identify(index, item) {
    return item.TopicID;
  }

  pushItem(item) {
    let index = this.pushedTopicsID.indexOf(item.TopicID);
    if (index === -1) {//push
      this.topics.push(item);
      this.pushedTopicsID.push(item.TopicID);
    } else {
      this.topics[index] = item;
    }
  }

  getDetails() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject(false);
      } else {
        this.connection.doPost('Chat/GetClosedTopicDetail',
          {
            GroupID: this.group_id,
            StatusID: 1,
            DisablePaging: true,
            PageNumber: this.page,
            RowsPerPage: 20,
            OrderBy: this.sort_by,
            Order: this.sort_order,
            Query: this.query
          }, false).then((response: any) => {

            if (response.ClosedTopicList.length > 0) {
              if (this.page == 0) {
                this.topics = response.ClosedTopicList;
              } else {
                response.ClosedTopicList.forEach(list => {
                  this.pushItem(list);
                });
              }
              this.page++;
              resolve(status);
              this._offlineStorage.set('offline:Groups-Wise', response.ClosedTopicList, this.group_id, this.group_id).then((data) => {
              });
            } else {
              this._offlineStorage.set('offline:Groups-Wise', [], this.group_id, this.group_id).then((data) => {
              });
              this.page = -1;
              resolve(false);
            }
          }).catch(error => {
            this.page = -1;
            reject(false);
          });
      }
    });
  }

  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.topics = [];
      this.getDetails().catch(error => {
      });

    } else {
      this.topics = [];
      this.query = null;
      this.initializeItems();
    }
  }


  initializeItems() {
    this.page = 0;
    this.getDetails().catch(error => {
    });
  }

  onCancel(event) {
    this.query = null;
    this.initializeItems();
  }

  onClear(event) {
    this.query = null;
    this.initializeItems();
  }

  refresh(refresher) {
    this.page = 0;
    this.topics = [];
    this.getDetails().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }

  paginate(paginator) {
    this.getDetails().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }

  openTopic(topic, index) {
    if (topic.Count) {
      topic.Count = 0;
      this.topics[index].Count = 0;
    }
    this.navCtrl.push(ChatPage, {
      topicID: topic.TopicID,
      groupID: this.group_id,
      Topic: topic
    });
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  toggleSearch() {
    if (this.showSearch) {
      this.showSearch = false;
      this.topics = [];
      this.query = null;
      this.initializeItems();
    } else if (this.showSearch === false) {
      this.showSearch = true;
    }
  }

  isExpired(date) {
    if (moment(date).isValid() && Math.abs(moment().diff(moment(date), 'years')) < 20) {
      return (new Date().getTime() - this._date.fromServerFormat(date).toDate().getTime()) > 0;
    }
    return null;
  }

  setForBadge() {
    firebase.database().ref('Badge/' + this.connection.user.id + '/Groups/' + this.group_code + '/Topics').on('value', snapshot => {
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


  openSortOptions() {
    //creating buttons
    let buttons = [];
    let sortingOptions = {
      'CreationDate': 'Creation Date',
      'DueDate': 'Due Date',
      'CloseDatime': 'Closed Date'
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
    this.page = 0;
    this.topics = [];
    this.getDetails();
  }
}
