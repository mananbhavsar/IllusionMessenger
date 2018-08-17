import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ActionSheetController, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from "moment";
import * as _ from 'underscore';
import { ConnectionProvider } from '../../../providers/connection/connection';
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

  topics: Array<any> = [];
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
    private actionSheetController: ActionSheetController,
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;
    this.group_code = this.navParams.data.group_code;

  }

  ionViewDidEnter() {
    this.initializeItems();
    this.getDetails().then(status => {
      this.setForBadge();
    }).catch(error => {

    });
    this.initializeItems();
  }

  getData(event) {
    this.initializeItems();
    let val = event.target.value;
    if (val) {
      this.query = val.trim();
      this.getDetails().catch(error => {

      });
    }
  }

  getDetails() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject(false);
      } else {
        let params = {
          GroupID: this.group_id,
          StatusID: 1,
          DisablePaging: true,
          PageNumber: this.page,
          RowsPerPage: 20,
          OrderBy: this.sort_by,
          Order: this.sort_order,
        };
        if (this.query) {
          params['Query'] = this.query;
        }
        this.connection.doPost('Chat/GetClosedTopicDetail', params, false).then((response: any) => {
          let data = response.ClosedTopicList;
          if (data.length > 0) {
            data.forEach(list => {
              this.topics.push(list);
            });
            this.page++;
            resolve(true);
          } else {
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

  initializeItems() {
    this.page = 0;
    this.topics = [];
  }

  onCancel() {
    this.initializeItems();
  }

  onClear() {
    this.initializeItems();
    this.query = '';
    this.getDetails();
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
      groupID: this.group_id
    });
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
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
