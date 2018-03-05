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
import { ManageParticipantsPage } from "../../manage-participants/manage-participants";

@IonicPage()
@Component({
  selector: 'page-create-topic',
  templateUrl: 'create-topic.html',
})
export class CreateTopicPage {
  group_id: number = 0;
  participants: Array<any> = [];
  selectedParticipants: any = {};
  selectedUsers:Array<any> = [];
  _: _.UnderscoreStatic = _;
  tempUser:Array<any> = [];
  users:Array<any>=[];
  tags: Array<any> = [];
  tagsIdMap: Array<string> = [];
  userTagsMap: any = {};
  selectedParticipant:Array<string> = [];
  selectedUser:Array<string> = [];
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
    public modalCtrl:ModalController ,
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
      this.setTags();
    }).catch(error => {
      console.log(error);
    })
  }

  setTags() {
    this.participants.forEach((user, index) => {
      if (user.Tag.length) {
        user.Tag.forEach(tag => {
          if (this.tagsIdMap.indexOf(tag.TagID) === -1) {
            this.tagsIdMap.push(tag.TagID);
            this.tags.push({
              id: tag.TagID,
              name: tag.Tag
            });
          }
          //adding to userMap
          if (!(tag.TagID in this.userTagsMap)) {
            this.userTagsMap[tag.TagID] = {};
          }
          this.userTagsMap[tag.TagID][user.User[0].UserID] = index;
        });
      }
    });
  }

  participantSelected(user) {
    if (!(user.UserID in this.selectedParticipants)) {
      this.selectedParticipants[user.UserID] = user.User;
      this.setSelectedParticipants();
      this.userComplete.clearValue();
      console.log(user.User);
    }
  }

  removeParticipant(index) {
    this.users.splice(index,1);
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
          name: name,
        })
      });
    }
    return participants;
  }

  tagClicked(tag_id, index) {
    //selecting users
    for (let userID in this.userTagsMap[tag_id]) {
      let indexInParticipants = this.userTagsMap[tag_id][userID];
      let user = this.participants[indexInParticipants];
      this.participantSelected(user.User[0]);
    }
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

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  addParticipants(){
    let modal = this.modalCtrl.create(ManageParticipantsPage,{
      participants:this.participants,
    });
    console.log(this.participants);

      modal.onDidDismiss(data=>{
        this.selectedParticipant=data;
        console.log(this.selectedParticipant);
        this.selectedParticipant.forEach(user=>{
            console.log(user);
            this.users.push(user);
        });
        console.log(this.users);     
      });
     modal.present();
  }
}
