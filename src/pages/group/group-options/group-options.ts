import { CreateTopicPage } from './../../topic/create-topic/create-topic';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroupOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-options',
  templateUrl: 'group-options.html',
})
export class GroupOptionsPage {
  group_id: number = null;
  title:string='Options';
  userlist: Array<any> = [];
  participants: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
  ) {
    this.group_id = this.navParams.data;
  }

  ionViewDidEnter() {
    //this.getParticipants();
    this.getUserDetails();
  }

  getUserDetails()
  {
    this.userlist= [{
      "UserID": 1,
      "UserCode": "1027",
      "User": "Sanjay Panchal",
      "TagID": 1,
      "TagCode": "MA",
      "Tag": "Mobile App Development Team"
    }, {
      "UserID": 7,
      "UserCode": "011",
      "User": "Roshan",
      "TagID": 1,
      "TagCode": "MA",
      "Tag": "Mobile App Development Team"
    }, {
      "UserID": 8,
      "UserCode": "012",
      "User": "Lalita",
      "TagID": 1,
      "TagCode": "MA",
      "Tag": "Mobile App Development Team"
    }]
  }

  getParticipants() {
   return new Promise((resolve, reject) => {
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.group_id
    }).then(response => {
      resolve(true);
    }).catch(error => {
      reject(error);
    });
  });
  }

  openCreateTopic() {
    this.navCtrl.push(CreateTopicPage, this.group_id);
  }
}
