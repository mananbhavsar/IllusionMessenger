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
  participants: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
  ) {
    this.group_id = this.navParams.data;
  }

  ionViewDidenter() {
    //this.getParticipants();
  }

  getParticipants() {
    this.connection.doPost('Chat/', {
      group_id: this.group_id
    }).then(response => {

    }).catch(error => {

    });
  }

  openCreateTopic() {
    this.navCtrl.push(CreateTopicPage, this.group_id);
  }
}
