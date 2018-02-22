import { UserAutoCompleteService } from './user-auto-complete';
import { Global } from './../../../app/global';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as _ from 'underscore';
import { AutoCompleteComponent } from 'ionic2-auto-complete-ng5';
import * as  moment from "moment";
import { locale } from 'moment';

@IonicPage()
@Component({
  selector: 'page-create-topic',
  templateUrl: 'create-topic.html',
})
export class CreateTopicPage {
  group_id: number = 0;
  participants: Array<any> = [];
  selectedParticipants: any = {};
  _: _.UnderscoreStatic = _;

  global: any = {};
  createForm: FormGroup;
  @ViewChild('userComplete') userComplete: AutoCompleteComponent;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
    private formBuilder: FormBuilder,
    public userAutoCompleteService: UserAutoCompleteService,
  ) {
    this.group_id = this.navParams.data;
    this.global = Global;
    this.createForm = this.formBuilder.group({
      group_id: [''],
      private: [true],
      name: ['', [Validators.required]],
      participants: [''],
      due_date: [new Date().toISOString()]
    });
  }

  ionViewDidEnter() {
    this.initData();
  }

  initData() {    
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.group_id,
    }).then((response: any) => {
      this.participants = response.UserDetail
      this.userAutoCompleteService.participants = this.participants;
    }).catch(error => {
      console.log(error);
    })
  }

  participantSelected(user) {
    this.selectedParticipants[user.UserID] = user.User;
    this.setSelectedParticipants();
    this.userComplete.clearValue();
   }

  removeParticipant(id) {
    delete this.selectedParticipants[id];
    this.setSelectedParticipants();
  }

  setSelectedParticipants() {
    let selectedParticipantString = '';
    if (!_.isEmpty(this.selectedParticipants)) {
      selectedParticipantString = Object.keys(this.selectedParticipants).join(',');
    }
    this.createForm.patchValue({
      'participants': selectedParticipantString
    });
  }

  getSelectedParticipants() {
    let participants = [];
    if (!_.isEmpty(this.selectedParticipants)) {
      _.each(this.selectedParticipants, (name, id) => {
        participants.push({
          id: id,
          name: name
        })
      });
    }
    return participants;
  }

  getCurrentTime(){
     return new Date().toISOString();
  }

  submitForm() {
    if (this.createForm.valid) {
      this.connection.doPost('Chat/CreateGroupTopic', {
        Private: this.createForm.get('private').value,
        Topic: this.createForm.get('name').value,
        GroupID: this.group_id,
        DueDate: this.createForm.get('due_date').value,
        UserList: this.createForm.get('participants').value,   
        StatusID:1     
        }, 'creating topic').then(response => {
          console.log(response);
      }).catch(error => {

      });
    }
  }

}
