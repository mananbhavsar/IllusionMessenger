import { Component, ViewChild } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { ActionSheetController, DateTime, Events, IonicPage, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { FirebaseTransactionProvider } from '../../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from "../../../providers/notifications/notifications";
import { UserProvider } from '../../../providers/user/user';
import { ManageParticipantsPage } from '../../topic/create-topic/manage-participants/manage-participants';
import { DateProvider } from './../../../providers/date/date';
import { SavedMediaPage } from "./saved-media/saved-media";
import { RatingPage } from '../rating/rating';






@IonicPage()
@Component({
  selector: 'page-chat-options',
  templateUrl: 'chat-options.html',
})
export class ChatOptionsPage {
  @ViewChild('dueDate') dueDate: DateTime;
  dueDateOpened: boolean = false;

  @ViewChild('reminder') reminder: DateTime;
  reminderOpened: boolean = false;

  data: any = {};
  reminders: any = [];
  title: string = '';
  topicCode: string = null;
  topicID: string = null;
  groupID: number = null;
  group_name: string = 'loading';

  statusID: number;
  closeButton: boolean = false;

  path: string = null;

  amIAdmin: boolean = false;
  amIResponsible: boolean = false;
  responsibleUserID: string = null;
  isBrowser: boolean = false;
  groupMemberCount: number = 0;
  value:number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public connection: ConnectionProvider,
    public user: UserProvider,
    public events: Events,
    public platform: Platform,
    private _firebaseTransaction: FirebaseTransactionProvider,
    private _notifications: NotificationsProvider,
    public storage: Storage,
    private viewController: ViewController,
    private _date: DateProvider,
    private callNumber: CallNumber
  ) {
    this.data = this.navParams.data.data;
    this.groupMemberCount = this.data.User.length;

    this.reminders = this.navParams.data.reminders || [];

    this.topicID = this.navParams.data.data.TopicID;
    this.groupID = this.navParams.data.data.GroupID;
    this.statusID = this.navParams.data.data.StatusID;
    this.topicCode = this.navParams.data.folder;
    this.path = this.navParams.data.path;
    this.group_name = this.navParams.data.group_name;
    this.isBrowser = this.platform.is('core');
    this.value = this.navParams.data.data.Rating;



    this.setTitle();
    this.processParticipants();
  }

  processParticipants() {
    if (!_.isEmpty(this.data)) {
      this.data.User.forEach((user, index) => {
        //converting to boolean
        if (typeof this.data.User[index].IsAdmin === 'string') {
          this.data.User[index].IsAdmin = user.IsAdmin === 'true';
          user.IsAdmin = this.data.User[index].IsAdmin;
        }
        if (typeof this.data.User[index].IsResponsible === 'string') {
          this.data.User[index].IsResponsible = user.IsResponsible === 'true';
          user.IsResponsible = this.data.User[index].IsResponsible;
        }

        //checking admin for me
        if (user.UserID === this.connection.user.LoginUserID && user.IsAdmin) {
          this.amIAdmin = true;
        }
        //checking isResponsible for me
        if (user.UserID === this.connection.user.LoginUserID && user.IsResponsible) {
          this.amIResponsible = true;
        }
        //saving responsible user id
        if (user.IsResponsible) {
          this.responsibleUserID = user.UserID;
        }
      });
    }
  };

  openSavedMedia() {
    let params = {
      path: this.path,
      folder: this.topicCode,
      topic_group_name: this.group_name + ' / ' + this.navParams.data.data.Topic
    };

    let savedMediaModal = this.modal.create(SavedMediaPage, params);
    savedMediaModal.onDidDismiss(data => {
      this.setTitle();
    });
    savedMediaModal.present();
  }

  closureRequest() {
    if (this.amIResponsible) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Do You Want to request for closure? (Request only if task is completed)',
        buttons: [
          {
            text: 'Send Request now!',
            role: 'destructive',
            handler: () => {
              this.connection.doPost('Chat/RequestForClosure', {
                TopicID: this.data.TopicID,
                GroupID: this.data.GroupID,
                IsWeb: this.platform.is('core')
              }).then((response: any) => {
                if (response) {
                  if (response.FireBaseTransaction) {
                    this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
                  }
                  this.data.IsRequestedClosure = 'true';
                }
              }).catch((error) => {

              });
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
          }]
      });
      actionSheet.present();
    }
  }


  cancelClosureRequest() {
    if (this.amIAdmin) {
      this.connection.doPost('Chat/CancelClosureRequest', {
        TopicID: this.data.TopicID,
        GroupID: this.data.GroupID,
        IsWeb: this.platform.is('core')
      }).then((response: any) => {
        if (response) {
          if (response.FireBaseTransaction) {
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
          }
          this.data.IsRequestedClosure = 'false';
        }
      }).catch((error) => {

      });
    }
  }

  callParticipant(event,number) {
    event.preventDefault();
    event.stopPropagation();
    if (number) {
      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        number = "tel:" + number;
        window.location.href = number;
      } else if (this.platform.is('cordova')) {
        this.callNumber.callNumber(number, true);
      }
    }
    return false;
  }

  rescheduleTopic() {
    this.dueDate.mode = 'ios';
    this.dueDate.setValue(this._date.fromServerFormat(this.data.DueDate_UTC).format());
    this.dueDate.open();
    this.dueDateOpened = true;
    this.dueDate.ionCancel.subscribe(cancel => {
      this.dueDateOpened = false;
    });
  }

  resheduleDateTimeChanged(changed) {
    if (!this.dueDateOpened) {
      return;
    }
    //validate
    let changedDate = new Date();
    changedDate.setFullYear(changed.year);
    changedDate.setMonth(changed.month - 1);
    changedDate.setDate(changed.day);
    changedDate.setHours(changed.hour);
    changedDate.setMinutes(changed.minute);
    changedDate.setSeconds(changed.second);

    let changedMoment = moment(changedDate);
    if (changedMoment.isValid()) {
      //checking if more than now
      if (changedMoment.toDate().getTime() >= moment().toDate().getTime()) {
        //make ajax call to change
        let utcString = this._date.toUTCISOString(changedMoment);
        this.connection.doPost('Chat/RescheduleTopic', {
          GroupID: this.groupID,
          TopicID: this.topicID,
          NewDueDate: utcString,
        }).then((response: any) => {
          this.dueDateOpened = false;
          //update in DueDate_UTC/CurrentRescheduleCount
          this.events.publish('toast:create', response.Data.Message);
          this.data.DueDate_UTC = utcString;
          this.data.RescheduleCount = response.Data.CurrentRescheduleCount;
        }).catch(error => {
          this.dueDateOpened = false;
          this.events.publish('toast:error', error);
        });
      } else {
        this.dueDateOpened = false;
        this.events.publish('toast:error', 'New Due Date should be more than now');
      }
    } else {
      this.dueDateOpened = false;
      this.events.publish('toast:error', 'Invalid date');
    }
  }

  closeTopic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Do You Want to Close ',
      buttons: [
        {
          text: 'Close it now!',
          role: 'destructive',
          handler: () => {
            let modal = this.modal.create(RatingPage, {
            });
            modal.onDidDismiss(data => {
              if (data) {
                this.connection.doPost('Chat/UpdateTopicStatus', {
                  GroupID: this.groupID,
                  TopicID: this.topicID,
                  StatusID: 2,
                  Comment: data.Comment,
                  Rating: data.Rate
                }).then((response: any) => {
                  this.data.StatusID = 2;
                  this.data.Comment = data.Comment;
                  this.data.Rating = data.Rate;
                  if (this.data.StatusID = 2) {
                    this.closeButton = true;
                    this.data.CloseDatime_UTC = this._date.toUTCISOString(new Date(), false);
                  }
                  if (response.Data.Message) {
                    this.events.publish('toast:create', response.Data.Message);
                  }
                  //firebase 
                  if (response.FireBaseTransaction) {
                    this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
                  }
                  //send notification
                  if (response.OneSignalTransaction) {
                    this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
                      topicID: this.topicID,
                      groupID: this.groupID,
                    });
                  }
                }).catch(error => {
                });
              }
            });
            modal.present();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
        }]
    });
    actionSheet.present();
  }

  openReminder(event) {
    event.preventDefault();
    event.stopPropagation();

    this.reminder.mode = 'ios';
    this.reminder.setValue(moment().format());
    this.reminder.open();

    this.reminderOpened = true;
    this.reminder.ionCancel.subscribe(cancel => {
      this.reminderOpened = false;
    });
  }

  setReminder(remider) {
    if (!this.reminderOpened) {
      return;
    }
    let changedDate = new Date();
    changedDate.setFullYear(remider.year);
    changedDate.setMonth(remider.month - 1);
    changedDate.setDate(remider.day);
    changedDate.setHours(remider.hour);
    changedDate.setMinutes(remider.minute);
    changedDate.setSeconds(remider.second);
    
    let changedMoment = moment(changedDate);

    let SelectedDateTime = moment(this._date.get(changedMoment), 'Do MMM, hh:mm A');
    let now = moment();

    let utcString = this._date.toUTCISOString(SelectedDateTime);

    if (changedMoment.isValid()) {
      if (SelectedDateTime.isAfter(now)) {
        this.connection.doPost('Chat/SetRemoveSelfReminder', {
          GroupID: this.data.GroupID,
          TopicID: this.data.TopicID,
          SchedulerDateTime: utcString,
          Message: this.data.Topic
        }, false).then((response: any) => {
          if (response) {
            this.data.IsReminderSet = 'true';
            this.reminderOpened = false;
            this.reminders.push({
              GroupID: this.data.GroupID,
              TopicID: this.data.TopicID,
              SchedulerDateTime: utcString,
              Message: this.data.Topic
            });
            this.events.publish('toast:create', response.Data.Message);
          }
        }).catch((error) => {
          this.reminderOpened = false;
          this.events.publish('toast:error', error);
        });
      } else {
        this.reminderOpened = false;
        this.events.publish('toast:error', 'Reminder time should be more than now');
      }
    } else {
      this.reminderOpened = false;
      this.events.publish('toast:error', 'Invalid date');
    }
  }

  removeRemider(event, id, index) {
    this.connection.doPost('Chat/SetRemoveSelfReminder', {
      TopicID: this.data.TopicID,
      GroupID: this.data.GroupID,
      SelfReminderID: id,
      SchedulerDateTime: this._date.toUTCISOString(new Date(), false, false),
    }).then((Response: any) => {
      this.events.publish('toast:create', Response.Data.Message);
      this.reminders.splice(index, 1);
    }).catch((error) => {
      this.events.publish('toast:error', error);
    });
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

  userOptionsClicked(participant, index) {
    //only if I'm admin
    if (this.amIAdmin && this.statusID === 1) {
      let buttons = [];
      if (participant.IsResponsible) {
        return false;
      } else {
        if (participant.UserID !== this.connection.user.LoginUserID) {//can't remove/add self
          //making user reposnsible
          if (!participant.IsResponsible) {
            buttons.push({
              text: 'Mark Responsible',
              handler: () => {
                this.markResponsible(participant, index);
              }
            });
          }
          //make, remove admin
          if (participant.IsAdmin) {
            //if not by created
            if (participant.UserID !== this.data.CreatedByID)
              buttons.push({
                role: 'destructive',
                text: 'Remove as Admin',
                handler: () => {
                  this.removeAsAdmin(participant, index);
                }
              });
          } else {
            buttons.push({
              text: 'Make Admin',
              handler: () => {
                this.makeAsAdmin(participant, index);
              }
            });
          }
          //remove from user 
          if (!participant.IsResponsible && participant.UserID !== this.data.CreatedByID) {//if not responsible or created by
            buttons.push({
              role: 'destructive',
              text: 'Remove from Topic',
              handler: () => {
                this.removeFromTopic(participant, index);
              }
            });
          }
        }

        if (buttons.length) { //at least on button other than cancel
          //cancel button
          buttons.push({
            role: 'cancel',
            text: 'Cancel',
            handler: () => {

            }
          });
          let userOptionActionSheet = this.actionSheetCtrl.create({
            title: 'Take Action',
            buttons: buttons
          });

          userOptionActionSheet.present();
        }
      }
    }
  }

  markResponsible(participant, index) {
    this.connection.doPost('Chat/Change_Responsible', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //making it responsible and removing existing reponsible
      this.data.User[this.getIndexById(this.responsibleUserID)].IsResponsible = false;
      this.data.User[index].IsResponsible = true;
      this.responsibleUserID = participant.UserID;
    }).catch(error => {

    });
  }

  makeAsAdmin(participant, index) {
    this.connection.doPost('Chat/MakeAdmin', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //making admin
      this.data.User[index].IsAdmin = true;
    }).catch(error => {

    });
  }

  removeAsAdmin(participant, index) {
    this.connection.doPost('Chat/RemoveAdmin', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //removing admin
      this.data.User[index].IsAdmin = false;
    }).catch(error => {

    });
  }

  removeFromTopic(participant, index) {
    this.connection.doPost('Chat/Remove_Participant', {
      UserID: participant.UserID,
      GroupID: this.groupID,
      TopicID: this.topicID,
    }).then((response: any) => {
      this.events.publish('toast:create', response.Data.Message);
      //firebase 
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
      }
      //send notification
      if (response.OneSignalTransaction) {
        this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
          topicID: this.topicID,
          groupID: this.groupID,
        });
      }
      //removing 
      delete this.data.User[index];
    }).catch(error => {

    });
  }

  isExpired(due_date, close_date) {
    if (close_date === '0001-01-01T00:00:00.00Z' || !moment(close_date).isValid()) {
      close_date = this._date.toUTCISOString(new Date(), false, false);
    }
    if (moment(due_date).isValid() && moment(close_date).isValid()) {
      return (this._date.fromServerFormat(close_date).toDate().getTime() - this._date.fromServerFormat(due_date).toDate().getTime()) > 0;
    }
    return null;
  }

  isYou(id) {
    if (id) {
      return id === this.connection.user.LoginUserID;
    }
    return false;
  }

  getIndexById(UserID) {
    let index = -1;
    this.data.User.some((user, i) => {
      if (user.UserID === UserID) {
        index = i;
        return true;
      }
    });
    return index;
  }

  addParticipants() {
    /**
     * 1. get all users in group
     * 2. open modal to add
     */
    this.connection.doPost('Chat/GetGroupUserDetail', {
      GroupID: this.groupID,
    }).then((response: any) => {
      //find selected users which is nothing but current users in topic

      let participants = [];
      let selectedParticipantIDs = [];
      this.data.User.forEach((user, index) => {
        selectedParticipantIDs.push(user.UserID);
      });
      //removing self
      if (response.UserDetail.length) {
        let userIndex = -1;
        response.UserDetail.forEach((user, index) => {
          //only adding users which are not in topic
          if (selectedParticipantIDs.indexOf(user.User[0].UserID) === -1) {
            participants.push(user);
          }
        });
      }
      //checking if all added
      if (participants.length) {
        //open modal
        let modal = this.modal.create(ManageParticipantsPage, {
          participants: participants,
          assigned: this.responsibleUserID,
          selectedParticipantIDs: [],
          group_name: this.group_name,
          is_from_chat: true,
        });

        modal.onDidDismiss(data => {
          this.setTitle();
          if (data) {
            //saving new users
            this.connection.doPost('Chat/Add_Participant', {
              UserID: this.connection.user.LoginUserID,
              GroupID: this.groupID,
              TopicID: this.topicID,
              Participants: data.selectedParticipantIDs.join(','),
            }, 'adding').then((response: any) => {
              this.events.publish('toast:create', response.Data.Message);
              //do firebase transaction if any
              if (response.FireBaseTransaction) {
                this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
              }
              //oneSignal transaction
              if (response.OneSignalTransaction) {
                this._notifications.sends(response.OneSignalTransaction);
              }
              //close this and request for initData and open this screen again
              this.dismiss({
                reInitData: true,
                openChatOptions: true
              });
            }).catch(error => { });
          }
        });
        modal.present();
      } else {
        this.events.publish('toast:create', 'All members of group have been added to topic');
      }
    }).catch(error => {
    })
  }

  getTags(participant) {
    let tags = [];

    let tagNames = participant.Tag.split(',');
    let tagIds = participant.TagID.split(',');

    tagNames.forEach((tag, index) => {
      tags.push({
        TagID: tagIds[index],
        Tag: tag,
      })
    });

    return tags;
  }

  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = this.navParams.data.data.Topic + '\'s options';
    });
  }

  getTitle() {
    return this.title;
  }

  trackByUserID(index, user) {
    return user.UserID;
  }
}
