import { Global } from './../../../app/global';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-topic',
  templateUrl: 'create-topic.html',
})
export class CreateTopicPage {
  group_id: number = 0;
  participants: Array<any> = [];
  selectedParticipants: Array<any> = [];
  
  global: any = {};
  createForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    private formBuilder: FormBuilder,
  ) {
    this.group_id = this.navParams.data;
    this.global = Global;
    this.createForm = this.formBuilder.group({
      group_id: [''],
      private: [''],
      name: ['', [Validators.required]],
      participants: ['', [Validators.required]]
    });
  }

  ionViewDidEnter() {
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.group_id,
    }).then((response: any) => {
      this.participants = response.GroupUserList;

    }).catch(error => {
      console.log(error);
    })
  }

  getParticipants(keyword: string) {
    let results = [];
    this.participants.forEach((user, index) => {
      if (user.User.indexOf(keyword) > -1) {
        results.push({
          name: user.User,
          value: user.UserCode
        });
      }
    });
    return results;
  }

}
