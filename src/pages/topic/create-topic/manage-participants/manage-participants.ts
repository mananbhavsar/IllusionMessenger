import { ConnectionProvider } from './../../../../providers/connection/connection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-manage-participants',
  templateUrl: 'manage-participants.html',
})
export class ManageParticipantsPage {
  participants: Array<any> = [];
  participantsCopy: Array<any> = [];

  selectedParticipantIDs: Array<number> = [];

  assigned: number = 0;

  tags: Array<any> = [];
  tagsIdMap: Array<string> = [];
  userTagsMap: any = {};
  tagsSelected: any = {};// tag_id:boolean

  group_name: string = 'loading';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private connection: ConnectionProvider,
    private events: Events,
  ) {
    this.group_name = this.navParams.data.group_name;

    this.participants = this.navParams.data.participants;
    this.participantsCopy = this.navParams.data.participants;

    this.selectedParticipantIDs = this.navParams.data.selectedParticipantIDs;

    this.assigned = this.navParams.data.assigned;
    this.setTags();
  }


  setTags() {
    this.participants.forEach((user, index) => {
      if (user.Tag.length) {
        user.Tag.forEach(tag => {
          //selectedAt 0
          if (!('selectedAt' in user)) {
            this.participants[index].selectedAt = 0;
          }

          //if already selected
          if (this.selectedParticipantIDs.indexOf(user.User[0].UserID) > -1) {
            this.participants[index].selectedAt = new Date().getTime() + index;
          }

          if (this.tagsIdMap.indexOf(tag.TagID) === -1) {
            this.tagsIdMap.push(tag.TagID);
            this.tags.push({
              id: tag.TagID,
              name: tag.Tag
            });

            this.tagsSelected[tag.TagID] = false;
          }

          //adding to userMap
          if (!(tag.TagID in this.userTagsMap)) {
            this.userTagsMap[tag.TagID] = [];
          }
          this.userTagsMap[tag.TagID].push(user.User[0].UserID);
        });
      }
    });
  }

  tagClicked(tag_id) {
    //toggle tag selection
    this.tagsSelected[tag_id] = !this.tagsSelected[tag_id];
    //selecting users
    this.userTagsMap[tag_id].forEach((userID, index) => {
      //escape for logged in user
      if (this.connection.user.LoginUserID !== userID) {
        this.participantSelected(userID, index, this.tagsSelected[tag_id]);
      }
    });
  }

  getUserByID(userID) {
    let found = null;
    this.participants.some(user => {
      if (user.User[0].UserID === userID) {
        found = user;
        return true;
      }
      return false;
    });
    return found;
  }

  getIndexByID(userID) {
    let found = null;
    this.participants.some((user, index) => {
      if (user.User[0].UserID === userID) {
        found = index;
        return true;
      }
      return false;
    });
    return found;
  }

  participantSelected(user_id, index, selected) {
    if (selected) {
      if (this.selectedParticipantIDs.indexOf(user_id) === -1) {
        this.selectedParticipantIDs.push(user_id);
      }
      this.participants[this.getIndexByID(user_id)].selectedAt = new Date().getTime() + index;
    } else {
      //remove user
      this.selectedParticipantIDs.splice(this.selectedParticipantIDs.indexOf(user_id), 1);
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

  setParticipants(user_id) {
    let index = this.getIndexByID(user_id);
    if (this.selectedParticipantIDs.indexOf(user_id) === -1) {
      this.selectedParticipantIDs.push(user_id);

      this.participants[index].selectedAt = new Date().getTime();
    } else {
      this.selectedParticipantIDs.splice(this.selectedParticipantIDs.indexOf(user_id), 1);
      //checking if this user was assigned
      if (this.assigned === user_id) {
        this.assigned = 0;
      }
      //take it down
      // this.participants[index].selectedAt = 0;
    }
  }

  inSelectedParticipants(user_id) {
    return this.selectedParticipantIDs && this.selectedParticipantIDs.indexOf(user_id) > -1;
  }

  initializeItems() {
    this.participants = this.participantsCopy;
  }

  toggleAssign(user_id, event) {
    event.preventDefault();
    event.stopPropagation();

    //checking if same user selected
    if (this.assigned === user_id) {
      this.assigned = 0;
    } else {
      this.assigned = user_id;
    }
  }

  onCancel() {
    this.initializeItems();
  }

  onClear() {
    this.initializeItems();
  }

  create() {
    this.dismiss({
      selectedParticipantIDs: this.selectedParticipantIDs,
      assigned: this.assigned,
    });
  }

  dismiss(data) {
    //checking if Responsible is selected
    if (this.assigned || _.isEmpty(data)) {
      this.viewCtrl.dismiss(data);
    } else if (!_.isEmpty(data)) {
      this.events.publish('alert:basic', 'No assignee selected!', 'Kindly select Responsible/Assignee');
    }
  }

  isHidden(user_id) {
    return this.connection.user.LoginUserID === user_id;
  }

  getTags(tags) {
    if (tags && tags.length) {
      return tags.map(tag => {
        return tag.Tag;
      }).join(', ');
    }
    return '';
  }

  getTrackBy(index, user) {
    return user.User[0].UserID;
  }
}
