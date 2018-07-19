import { Component, ViewChild, EventEmitter, Input, NgZone, Output } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, DateTime } from 'ionic-angular';
import { Events } from 'ionic-angular';
import * as moment from "moment";
import { ConnectionProvider } from '../../providers/connection/connection';
import { DateProvider } from '../../providers/date/date';
import { Select } from 'ionic-angular/components/select/select';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'topic',
  templateUrl: 'topic.html'
})
export class TopicComponent {
  @Input() topic: any = null;
  @Input() type: string = null;
  @Input() group_id: number = 0;
  @Output() clicked = new EventEmitter();
  @Input() selectable: boolean;
  @Output() selected = new EventEmitter();
  @Input() isChecked: boolean = false;
  selectedTopics: any = [];
  @ViewChild('reminder') reminder: DateTime;
  reminderOpened: boolean = false;

  badgeCount: number = 0;
  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private connection: ConnectionProvider,
    private _date: DateProvider,
    public events: Events
  ) {

  }

  ngOnChanges() {
    console.log(this.topic);

    if (this.topic) {
      let topicRef = firebase.database().ref('Badge/' + this.connection.user.id + '/Groups/' + this.topic.GroupCode + '/Topics/' + this.topic.TopicCode);
      if (this.badgeCount) {
        topicRef.off('value');
      }
      topicRef.on('value', snapshot => {
        this.badgeCount = snapshot.val();

      });

    }
  }

  openTopic() {
    this.zone.run(() => {
      this.clicked.emit({
        topic: this.topic,
        type: this.type
      });
    });
    this.navCtrl.push('ChatPage', {
      topicID: this.topic.TopicID,
      groupID: this.group_id,
    });
  }

  readMessage(ev, topic) {
    this.topic.IsRead = ev.checked;
    this.selected.emit({
      checked: this.topic.IsRead,
      TopicCode: this.topic.TopicCode,
    });
  }

  setPriority(event) {
    event.preventDefault();
    event.stopPropagation();

    this.connection.doPost('Chat/SetPriority', {
      TopicID: this.topic.TopicID,
      IsPriority: !this.topic.IsPriority
    }).then((response: any) => {
      this.topic.IsPriority = !this.topic.IsPriority;
      this.events.publish('toast:create', response.Data.Message);
    }).catch((error) => { });
  }

  isExpired(date) {
    if (moment(date).isValid() && Math.abs(moment().diff(moment(date), 'years')) < 20) {
      return (new Date().getTime() - this._date.fromServerFormat(date).toDate().getTime()) > 0;
    }
    return null;
  }

  setReminder(event) {
    event.preventDefault();
    event.stopPropagation();
    this.reminder.mode = 'ios';
    this.reminder.open();
    this.reminder.setValue(this._date.fromServerFormat(this.topic.CreationDate_UTC).format());
    this.reminderOpened = true;
    this.reminder.ionCancel.subscribe(cancel => {
      this.reminderOpened = false;
    });
  }

  reminderDateChanged(remider) {
    if (!this.reminderOpened) {
      return;
    }
    let changedDate = new Date();
    let changedMoment = moment(changedDate);
    changedDate.setFullYear(remider.year);
    changedDate.setMonth(remider.month - 1);
    changedDate.setDate(remider.day);
    changedDate.setHours(remider.hour);
    changedDate.setMinutes(remider.minute);
    changedDate.setSeconds(remider.second);

    let SelectedDateTime = moment(this._date.get(changedDate), 'Do MMM, hh:mm A');
    let CreationDateTime = moment(this._date.get(this.topic.CreationDate_UTC), 'Do MMM, hh:mm A');

    let utcString = this._date.toUTCISOString(changedMoment);

    if (changedMoment.isValid()) {
      if (SelectedDateTime.isAfter(CreationDateTime)) {
        this.connection.doPost('Chat/SetSelfReminder', {
          GroupID: this.topic.GroupID,
          TopicID: this.topic.TopicID,
          SchedulerDateTime : utcString,
          Message : this.topic.Topic
        }, false).then((response : any) => {0
          this.reminderOpened = false;
          this.events.publish('toast:create', response.Data.Message);
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
      console.log("invalid");
    }

  }
}
