import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';
@IonicPage()
@Component({
  selector: 'page-due-topics',
  templateUrl: 'due-topics.html',
})
export class DueTopicsPage {
  title: string = 'loading';
  topics: Array<any> = [];
  day: number = 0;
  page: number = 0;
  headerbuttonsOption: any = [];
  query: string = null;
  searchInputBtn: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    public connection: ConnectionProvider) {
    this.day = this.navParams.data.Day;

    this.getData();
    this.setTitle();
  }

  dismiss(event) {
    console.log(event);
    
    this.viewCntl.dismiss();
    console.log('dismiss');
    
  }

  headerButtonClicked(event) {
    switch (event.name) {
      case 'search':
        this.searchData();
        break;
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
          if (!_.isEmpty(response)) {
            this.topics = response.TopicList;
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {

        });
      }
    });
  }

  refresh(refresher) {
    this.getData().then(status => {
      this.topics = [];
      this.page = 0;
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
