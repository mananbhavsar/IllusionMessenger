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
  title: string = 'Group Options';
  userlist: Array<any> = [];
  participants: Array<any> = [];
  flash: boolean = true;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
  ) {
    this.group_id = this.navParams.data;
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
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }s

  createTopic() {
    this.navCtrl.push(CreateTopicPage, this.group_id);
  }

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }
}
