import { CreateTopicPage } from './../../topic/create-topic/create-topic';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddFlashPage } from '../../add-flash/add-flash';

@IonicPage()
@Component({
  selector: 'page-group-options',
  templateUrl: 'group-options.html',
})
export class GroupOptionsPage {
  group_id: number = null;
  title: string = 'Group Options';
  userlist: Array<any> = [];
  participants: Array<any> = [];
  group: Array<any> = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider) {
    this.group_id = this.navParams.data;
    console.log(this.group_id);
  }

  ionViewDidEnter() {
    this.getParticipants();
  }

  getParticipants() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetGroupUserDetail', {
        GroupID: this.group_id
      }).then((response: any) => {
        this.userlist = response;
        console.log(this.userlist);
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }s

  createTopic() {
    this.navCtrl.push(CreateTopicPage,this.group_id);
  }

  addFlashNews(){
    this.navCtrl.push(AddFlashPage,this.group_id);
  }

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }
}
