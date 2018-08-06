import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-forward-message',
  templateUrl: 'forward-message.html',
})
export class ForwardMessagePage {
  title: string = 'Forward To..';
  SelectedTopics: any = [];
  topicList : any = [];
  query : string;
  page : number = 0;
  searchInputBtn : boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
   public connection : ConnectionProvider) {
    console.log(this.navParams.data);
    this.topicList.push({
      TopicName: 'asv',
      TopicID: 1
    },
      {
        TopicName: 'hmjhg',
        TopicID: 2
      },
      {
        TopicName: 'ghjgh',
        TopicID: 3
      },
      {
        TopicName: 'ghjgh',
        TopicID: 4
      })
  }

  getTopics(){
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/', {
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        },false).then((response: any) => {
          if (response.TopicList.length > 0) {
            response.TopicList.forEach(list => {
              this.topicList.push(list);
            });
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {
          this.page = -1;
          reject();
        });
      }
    });
  }

  selectTopic(topic) {
    console.log(topic);
    
    if (!this.in_array(this.SelectedTopics, topic.TopicID)) {
      this.SelectedTopics.push(topic);
    } else {
      if (this.in_array(this.SelectedTopics, topic.TopicID)) {
    console.log(this.SelectedTopics);

        this.SelectedTopics.splice(this.SelectedTopics.indexOf(topic), 1);
      }
    }    
  }

  in_array(array, TopicID) {
    if (array && TopicID) {
      return array.some((item) => {
        return item.TopicID === TopicID;
      });
    }
  }

  initializeItems() {
    this.page = 0;
    this.getTopics().catch(error => {
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
      this.topicList = [];
      // this.getTopics().catch(error => {
      // });

    } else {
      this.topicList = [];      
      this.query = null;
      this.initializeItems();
    }
  }

  searchTopic(){
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.topicList = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  InsertChat(){

  }



}
