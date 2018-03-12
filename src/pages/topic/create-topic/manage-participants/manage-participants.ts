import { ConnectionProvider } from './../../../../providers/connection/connection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-manage-participants',
  templateUrl: 'manage-participants.html',
})
export class ManageParticipantsPage {
  participants: Array<any> = [];
  participantsCopy: Array<any> = [];

  selectedParticipants: any = {};
  selectedParticipantIDs: Array<number> = [];

  tags: Array<any> = [];
  tagsIdMap: Array<string> = [];
  userTagsMap: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private connection: ConnectionProvider,
  ) {

    this.participants = this.navParams.data.participants;
    this.participantsCopy = this.navParams.data.participants;

    this.selectedParticipants = this.navParams.data.selectedParticipants;
    this.selectedParticipantIDs = this.navParams.data.selectedParticipantIDs;

    this.setTags();
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


  tagClicked(tag_id, index) {
    //selecting users
    for (let userID in this.userTagsMap[tag_id]) {
      //escape for logged in user
      if (this.connection.user.LoginUserID === userID) {
        continue;
      }

      let indexInParticipants = this.userTagsMap[tag_id][userID];
      let user = this.participantsCopy[indexInParticipants];
      this.participantSelected(user.User[0].UserID, indexInParticipants);
    }
  }

  participantSelected(user_id, index) {
    if (!(user_id in this.selectedParticipants)) {
      this.selectedParticipantIDs.push(user_id);
      this.selectedParticipants[user_id] = index;
    }
  }


  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  getData(event) {
    this.initializeItems();
    let val = event.target.value;
    if (val && val.trim() !== '') {
      let tempUser = [];
      this.participants.forEach((user) => {
        if (user.User[0].User.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          tempUser.push(user);
        }
      });
      this.participants = tempUser;
    }
  }

  setParticipants(user_id, index) {
    if (this.selectedParticipantIDs.indexOf(user_id) === -1) {
      this.selectedParticipantIDs.push(user_id);
      this.selectedParticipants[user_id] = index;
    } else {
      this.selectedParticipantIDs.splice(this.selectedParticipantIDs.indexOf(user_id), 1);
      delete this.selectedParticipants[user_id];
    }
  }

  inSelectedParticipants(user_id) {
    return this.selectedParticipantIDs && this.selectedParticipantIDs.indexOf(user_id) > -1;
  }

  initializeItems() {
    this.participants = this.participantsCopy;
  }

  onCancel() {
    this.initializeItems();
  }

  onClear() {
    this.initializeItems();
  }

  dismiss() {
    this.viewCtrl.dismiss(
      {
        selectedParticipants: this.selectedParticipants,
        selectedParticipantIDs: this.selectedParticipantIDs,
      });
  }

  isHidden(user_id) {
    return this.connection.user.LoginUserID === user_id;
  }
}
