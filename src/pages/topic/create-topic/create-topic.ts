import { NotificationsProvider } from './../../../providers/notifications/notifications';
import { ChatPage } from './../../chat/chat';
import { FirebaseTransactionProvider } from './../../../providers/firebase-transaction/firebase-transaction';
import { UserAutoCompleteService } from './user-auto-complete';
import { Global } from './../../../app/global';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'underscore';
import { AutoCompleteComponent } from 'ionic2-auto-complete-ng5';
import * as  moment from "moment";
import { locale } from 'moment';
import { ManageParticipantsPage } from "./manage-participants/manage-participants";

@IonicPage()
@Component({
  selector: 'page-create-topic',
  templateUrl: 'create-topic.html',
})
export class CreateTopicPage {
  group_id: number = 0;
  participants: Array<any> = [];
  selectedParticipantIDs: Array<number> = [];
  selectedParticipants: any = {}; //id:index 
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
    private _firebaseTransaction: FirebaseTransactionProvider,
    public modalCtrl: ModalController,
    private events: Events,
    private notifications: NotificationsProvider,
  ) {
    this.group_id = this.navParams.data;
    this.global = Global;
    this.createForm = this.formBuilder.group({
      group_id: [''],
      private: [true],
      name: ['', [Validators.required]],
      participants: [''],
      due_date: [moment().format()]
    });
  }

  ionViewDidEnter() {
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.group_id,
    }).then((response: any) => {
      this.participants = response.UserDetail;
    }).catch(error => {
      console.log(error);
    })
  }

  removeParticipant(userID) {
    if (userID in this.selectedParticipants) {
      delete this.selectedParticipants[userID];
      this.selectedParticipantIDs.splice(this.selectedParticipantIDs.indexOf(userID), 1);
      this.setSelectedParticipants();
    }
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

  getUserName(userID) {
    let index = this.selectedParticipants[userID];
    if (this.participants[index]) {
      return this.participants[index].User[0].User;
    }
    return '';
  }

  getCurrentTime() {
    return moment().format();
  }

  submitForm() {
    if (this.createForm.valid) {
      let dueDate = this.createForm.get('due_date').value;
      if (dueDate) {
        dueDate = moment(dueDate).toISOString();
      }
      this.connection.doPost('Chat/CreateGroupTopic', {
        Private: this.createForm.get('private').value,
        Topic: this.createForm.get('name').value,
        GroupID: this.group_id,
        DueDate: dueDate,
        UserList: this.createForm.get('participants').value,
        StatusID: 1
      }, 'creating topic').then((response: any) => {
        let data = response.Data;
        let params = {
          topicID: data.TopicID,
          groupID: this.group_id
        };

        if (data.Message) {
          this.events.publish('toast:created', data.Message);
        }
        //update in Firebase/Badge
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
        //send notification
        this.notifications.sends(response.OneSignalTransaction, 'ChatPage', params);

        this.navCtrl.push(ChatPage, params);
      }).catch(error => {

      });
    }
  }


  addParticipants() {
    let modal = this.modalCtrl.create(ManageParticipantsPage, {
      participants: this.participants,
      selectedParticipants: this.selectedParticipants,
      selectedParticipantIDs: this.selectedParticipantIDs,
    });

    modal.onDidDismiss(data => {
      this.selectedParticipants = data.selectedParticipants;
      this.selectedParticipantIDs = data.selectedParticipantIDs;
      this.setSelectedParticipants();
    });
    modal.present();
  }
}
