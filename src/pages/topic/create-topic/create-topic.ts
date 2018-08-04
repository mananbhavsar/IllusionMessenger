import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime, Events, IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { AutoCompleteComponent } from 'ionic2-auto-complete-ng5';
import * as moment from "moment";
import * as _ from 'underscore';
import { Global } from './../../../app/global';
import { ConnectionProvider } from './../../../providers/connection/connection';
import { DateProvider } from './../../../providers/date/date';
import { FirebaseTransactionProvider } from './../../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from './../../../providers/notifications/notifications';
import { DateValidator } from './../../../validators/date-validator';
import { ManageParticipantsPage } from "./manage-participants/manage-participants";
import { UserAutoCompleteService } from './user-auto-complete';




@IonicPage()
@Component({
  selector: 'page-create-topic',
  templateUrl: 'create-topic.html',
})
export class CreateTopicPage {
  @ViewChild('dueDate') dueDate: DateTime;
  hourAddition: number = 3;

  title: string = 'Create Topic';

  group_id: number = 0;
  group_name: string = null;

  topic_id: number = 0;
  topic_name: string = null;

  participants: Array<any> = [];
  selectedParticipantIDs: Array<number> = [];
  _: _.UnderscoreStatic = _;


  selectedParticipant: Array<string> = [];
  participantsName: any = {};
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
    private _date: DateProvider,
    private viewController: ViewController,
    private platform: Platform,
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;

    //edit params
    if (this.navParams.data.topic_id) {
      this.topic_id = this.navParams.data.topic_id;
      this.topic_name = this.navParams.data.topic_name;
    }

    this.global = Global;
    this.createForm = this.formBuilder.group({
      private: [true],
      group_id: [''],
      name: ['', [Validators.required, Validators.maxLength(60)]],
      assigned: [0, [Validators.required]],
      participants: [''],
      due_date: new FormControl(moment().local().add(this.hourAddition, 'hours').format())
    }, {
        validator: DateValidator.isBefore
      });
  }

  ionViewDidLoad() {
    this.initData();
  }

  ngAfterViewChecked() {
    //change mode
    this.dueDate.mode = 'ios';
  }

  getSubTitle() {
    let subTitle = '';

    if (this.topic_name) {
      subTitle += this.topic_name + ' / ';
    }
    if (this.group_name) {
      subTitle += this.group_name;
    }

    return subTitle;
  }

  initData() {
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.group_id,
    }).then((response: any) => {
      this.participants = response.UserDetail;
      //removing self
      if (this.participants.length) {
        let userIndex = -1;
        this.participants.forEach((user, index) => {
          //name
          this.participantsName[user.User[0].UserID] = user.User[0].User;
          if (user.User[0].UserID === this.connection.user.id) {
            userIndex = index;
          }
        });
        if (userIndex > -1) {
          this.participants.splice(userIndex, 1);
        }
      }
    }).catch(error => {
    })
  }

  removeParticipant(userID) {
    if (this.selectedParticipantIDs.indexOf(userID) > -1) {
      this.selectedParticipantIDs.splice(this.selectedParticipantIDs.indexOf(userID), 1);

      //checking if this was assined
      if (userID === this.createForm.get('assigned').value) {
        this.createForm.patchValue({
          assigned: userID
        });
      }
    }
  }

  setSelectedParticipants() {
    let selectedParticipantString = '';
    //checking if me added
    if (this.selectedParticipantIDs.indexOf(this.connection.user.LoginUserID) > -1) {
      delete this.selectedParticipant[this.connection.user.LoginUserID];
    }
    if (this.selectedParticipantIDs.length) {
      selectedParticipantString = this.selectedParticipantIDs.join(',');
    }
    this.createForm.patchValue({
      'participants': selectedParticipantString
    });
  }

  getUserName(userID) {
    let found = '';
    this.participants.some(user => {
      if (user.User[0].UserID === userID) {
        found = user.User[0].User;
        return true;
      }
      return false;
    });
    return found;
  }

  submitForm() {
    if (this.createForm.valid) {
      //adding myself if private
      let userList = [];
      if (this.createForm.get('private').value) {
        userList = this.createForm.get('participants').value.split(',');
        for (let i = 0; i < userList.length; i++) {
          userList[i] = parseInt('' + userList[i]);
        }
        //removing self
        if (userList.indexOf(this.connection.user.LoginUserID) > -1) {
          userList.splice(userList.indexOf(this.connection.user.LoginUserID), 1);
        }

        //checking if assinged && selected user is in selected user list
        if (!this.createForm.get('assigned').value) {
          this.events.publish('alert:basic', 'No assignee selected!', 'Kindly select Responsible/Assignee');
          return false;
        } else if (this.createForm.get('assigned').value && userList.indexOf(this.createForm.get('assigned').value) === -1) {
          this.events.publish('alert:basic', 'Improper assignee selected!', 'Kindly select Responsible/Assignee from selected Participants');
          return false;
        }

        //adding logged in user
        if (userList.indexOf(this.connection.user.LoginUserID) === -1) {
          userList.push(this.connection.user.LoginUserID);
        }
      }
      this.connection.doPost('Chat/CreateGroupTopic', {
        Private: this.createForm.get('private').value,
        Topic: this.createForm.get('name').value,
        GroupID: this.group_id,
        DueDate: this._date.toUTCISOString(this.createForm.get('due_date').value),
        UserList: _.uniq(userList).join(','),
        StatusID: 1,
        Responsibles: this.createForm.get('assigned').value,
        IsWeb: this.platform.is('core'),
      }, 'creating topic').then((response: any) => {
        if (('Status' in response) && response.Status === 0) {
          this.events.publish('toast:error', response.Message);
        } else {
          let data = response.Data;
          let params = {
            topicID: data.TopicID,
            groupID: this.group_id
          };

          if (data.Message) {
            this.events.publish('toast:create', data.Message);
          }
          //update in Firebase/Badge
          this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
          //send notification
          this.notifications.sends(response.OneSignalTransaction, 'ChatPage', params);
          this.dismiss(params);
        }
      }).catch(error => {

      });
    }
  }


  addParticipants() {
    let modal = this.modalCtrl.create(ManageParticipantsPage, {
      participants: this.participants,
      assigned: this.createForm.get('assigned').value,
      selectedParticipantIDs: this.selectedParticipantIDs,
      group_name: this.group_name,
      is_from_chat: false,
    });

    modal.onDidDismiss(data => {
      this.setTitle();
      if (data) {
        this.selectedParticipantIDs = data.selectedParticipantIDs;
        this.createForm.patchValue({
          assigned: data.assigned
        });
        this.setSelectedParticipants();

      }
    });
    modal.present();
  }

  isMe(user_id) {
    return this.connection.user.LoginUserID === user_id;
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  getErrorMessage() {
    return 'Due date should be more than ' + moment().add(this.hourAddition - 1, 'hours').format('h A');
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Create Topic';
    });
  }

  getTitle() {
    return this.title;
  }
}
