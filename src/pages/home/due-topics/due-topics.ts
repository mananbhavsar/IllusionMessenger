import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { OfflineStorageProvider } from '../../../providers/offline-storage/offline-storage';


@IonicPage()
@Component({
  selector: 'page-due-topics',
  templateUrl: 'due-topics.html',
})
export class DueTopicsPage {
  title: string = 'loading';
  topics: Array<any> = null;
  day: number = 0;
  page: number = 0;
  headerbuttonsOption: any = [];
  pushedTopicsID: Array<any> = [];
  query: string = null;
  searchInputBtn: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    public _offlineStorage: OfflineStorageProvider,
    public storage: Storage,
    public connection: ConnectionProvider) {
    this.day = this.navParams.data.Day;
  }


  ionViewWillEnter() {
    this.topics = [];
    this.setTitle();
    this._offlineStorage.get('offline:due-topics', this.topics, this.day).then((data: any) => {
      if (!data) {
        this.topics = [];
      } else {
        this.page = 0;
        data.forEach(group => {
          this.pushItem(group);
        });
      }
    });
    this.getData();

  }

  dismiss(event) {
    this.viewCntl.dismiss();
  }

  headerButtonClicked(event) {
    switch (event.name) {
      case 'search':
        this.searchData();
        break;
    }
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

  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetTaskDueInDaysDetail', {
          Days: this.day,
          PageNumber: this.page,
          Query: this.query
        }, false).then((response: any) => {
          if (!_.isEmpty(response.TopicList)) {
            response.TopicList.forEach(item => {
              if (this.topics.indexOf(item.TopicID) === -1) {
                this.pushItem(item);
              }
            });
            this.page++;
            this._offlineStorage.set('offline:due-topics', this.topics, this.day);
            resolve(true);
          } else {
            this._offlineStorage.set('offline:due-topics', [], this.day);
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {

        });
      }
    });
  }

  refresh(refresher) {
    this.topics = [];
    this.page = 0;
    this.getData().then(status => {
      this.query = null;
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    });
  }

  paginate(paginator) {
    this.getData().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }

  searchData() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.topics = [];
      this.query = null;
      this.pushedTopicsID = [];
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  initializeItems() {
    this.page = 0;
    this.getData().catch(error => {
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


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.topics = [];
      this.pushedTopicsID = [];
      this.getData().catch(error => {
      });

    } else {
      this.topics = [];
      this.query = null;
      this.initializeItems();
    }
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
