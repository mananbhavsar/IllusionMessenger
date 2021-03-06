import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from './../../../../providers/connection/connection';


@IonicPage()
@Component({
  selector: 'page-manage-participants',
  templateUrl: 'manage-participants.html',
})
export class ManageParticipantsPage {
  protected _participants: Array<any> = [];
  protected _participantsCopy: Array<any> = [];

  protected _selectedParticipantIDs: Array<number> = [];

  protected _assigned: number = 0;

  tags: Array<any> = [];
  tagsIdMap: Array<string> = [];
  userTagsMap: any = {};
  tagsSelected: any = {};// tag_id:boolean

  group_name: string = 'loading';
  is_from_chat: boolean = false;

  backButtonUnregister: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private connection: ConnectionProvider,
    private events: Events,
    private platform: Platform,
  ) {
    this.group_name = this.navParams.data.group_name;

    this._participants = this.navParams.data.participants.slice();
    this._participantsCopy = this.navParams.data.participants.slice();

    this._selectedParticipantIDs = this.navParams.data.selectedParticipantIDs.slice();
    this.is_from_chat = this.navParams.data.is_from_chat;

    this._assigned = this.navParams.data.assigned;
    this.setTags();

    this.backButtonUnregister = this.platform.registerBackButtonAction(() => { });
  }

  ionViewWillLeave() {
    this.backButtonUnregister();
  }

  setTags() {
    this._participants.forEach((user, index) => {
      if (user.Tag.length) {
        user.Tag.forEach(tag => {
          //selectedAt 0
          if (!('selectedAt' in user)) {
            this._participants[index].selectedAt = 0;
          }

          //if already selected
          if (this._selectedParticipantIDs.indexOf(user.User[0].UserID) > -1) {
            this._participants[index].selectedAt = new Date().getTime() + index;
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
    //selecting users
    this.userTagsMap[tag_id].forEach((userID, index) => {
      //escape for logged in user
      if (this.connection.user.LoginUserID !== userID) {
        this.participantSelected(userID, index, !this.tagsSelected[tag_id]);
      }
    });
    //toggle tag selection
    this.tagsSelected[tag_id] = !this.tagsSelected[tag_id];
  }

  getUserByID(userID) {
    let found = null;
    this._participants.some(user => {
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
    this._participants.some((user, index) => {
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
      if (this._selectedParticipantIDs.indexOf(user_id) === -1) {
        this._selectedParticipantIDs.push(user_id);
      }
      this._participants[this.getIndexByID(user_id)].selectedAt = new Date().getTime() + index;
    } else {
      //remove user
      this._selectedParticipantIDs.splice(this._selectedParticipantIDs.indexOf(user_id), 1);
      //checking if current user was responsible
      if (this._assigned === user_id) {
        this._assigned = 0;
      }

      //take it down
      index = this.getIndexByID(user_id);
      this._participants[index].selectedAt = -3000;
      setTimeout(() => {
        index = this.getIndexByID(user_id);
        if (this._participants[index].selectedAt === -3000) {
          this._participants[index].selectedAt = 0;
        }
      }, 3000);
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
      this._participants.forEach((user) => {
        if (user.User[0].User.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          tempUser.push(user);
        }
      });
      this._participants = tempUser;
    }
  }

  _setParticipants(user_id) {
    let index = this.getIndexByID(user_id);
    let selected: boolean = true;
    if (this._selectedParticipantIDs.indexOf(user_id) === -1) {
      selected = true;

      this._selectedParticipantIDs.push(user_id);

      this._participants[index].selectedAt = new Date().getTime();
    } else {
      this._selectedParticipantIDs.splice(this._selectedParticipantIDs.indexOf(user_id), 1);
      //checking if this user was assigned
      if (this._assigned === user_id) {
        this._assigned = 0;
      }
      //take it down
      this._participants[index].selectedAt = -3000;
      setTimeout(() => {
        index = this.getIndexByID(user_id);
        if (this._participants[index].selectedAt === -3000) {
          this._participants[index].selectedAt = 0;
        }
      }, 3000);

      selected = false;
    }

    this.processTagSelectionDeselection(user_id, selected);
  }

  /**
   * if all users inside tag selected then we will select tag
   * if any of user unselected and tag was selected, we will unselect tag
   */
  processTagSelectionDeselection(user_id, selected) {
    if (selected) {
      for (let tagID in this.tagsSelected) {
        if (this.tagsSelected[tagID] === false && this.userTagsMap[tagID].indexOf(user_id) > -1) {//Tag not yet selected && has this user 
          //check if every other user selected
          if (this.userTagsMap[tagID].every(user_id_in_tag => {
            return this._selectedParticipantIDs.indexOf(user_id_in_tag) > -1;
          })) {
            this.tagsSelected[tagID] = selected;
          }
        }
      }
    } else {
      for (let tagID in this.tagsSelected) {
        if (this.tagsSelected[tagID] === true && this.userTagsMap[tagID].indexOf(user_id) > -1) {//Tag selected && has this user 
          this.tagsSelected[tagID] = selected;
        }
      }
    }

  }

  inSelectedParticipants(user_id) {
    return this._selectedParticipantIDs && this._selectedParticipantIDs.indexOf(user_id) > -1;
  }

  initializeItems() {
    this._participants = this._participantsCopy;
  }

  toggleAssign(user_id, event) {
    event.preventDefault();
    event.stopPropagation();

    //checking if same user selected
    if (this._assigned === user_id) {
      this._assigned = 0;
    } else {
      this._assigned = user_id;
    }
  }

  onCancel() {
    this.initializeItems();
  }

  onClear() {
    this.initializeItems();
  }

  create() {
    //checking if Responsible is selected
    if (this._assigned || _.isEmpty(this._selectedParticipantIDs)) {
      this.dismiss({
        selectedParticipantIDs: this._selectedParticipantIDs,
        assigned: this._assigned,
      });
    } else if (!_.isEmpty(this._selectedParticipantIDs)) {
      this.events.publish('alert:basic', 'No assignee selected!', 'Kindly select Responsible/Assignee');
    }

  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
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

  getGlowClass(time: number = 0) {
    if (time < 0) {
      return 'pulse-down';
    } else if ((time + 2000) > new Date().getTime()) {
      return 'pulse-up'
    }
    return '';
  }
}
