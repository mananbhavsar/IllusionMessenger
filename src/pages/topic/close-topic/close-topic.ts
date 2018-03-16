import { ChatPage } from './../../chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';

import * as  moment from "moment";
import { locale } from 'moment';
import { ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-close-topic',
  templateUrl: 'close-topic.html',
})
export class CloseTopicPage {
  group_id: number = null;
  group_name: string = 'loading';

  topics: Array<any> = [];
  page: number = 0;
  list: Array<any> = [];
  query: string = null;

  showSearch: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
    private viewController: ViewController,
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;
  }

  ionViewDidLoad() {
    this.getDetails();
    this.initializeItems();
  }

  getData(event) {
    this.initializeItems();
    let val = event.target.value;

    this.query = val.trim();
    this.getDetails().catch(error => {
      
    });
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
          RowsPerPage: 20
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
    console.log('cancel');
  }

  onClear() {
    this.initializeItems();
    console.log('clear');
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

}
