import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import * as firebase from 'firebase';
import { Events, NavController, ModalController } from 'ionic-angular';
import * as moment from "moment";
import { ConnectionProvider } from '../../providers/connection/connection';
import { DateProvider } from '../../providers/date/date';
import { ForwardTopicPage } from '../../pages/topic/forward-topic/forward-topic';
import { ReadMessageProvider } from '../../providers/read-message/read-message';

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

  badgeCount: number = 0;
  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private connection: ConnectionProvider,
    private _date: DateProvider,
    public events: Events,
    public read: ReadMessageProvider,
    public modal : ModalController
  ) {

  }

  ngOnChanges() {
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

  readSelected(topic) {
    this.read.readMessage(null, topic.TopicCode).then((response: any) => {
      if (response) {
       
      }
    });
  }

  setPriority(event) {
    event.preventDefault();
    event.stopPropagation();

    this.connection.doPost('Chat/SetPriority', {
      TopicID: this.topic.TopicID,
      IsPriority: !this.topic.IsPriority
    }, false).then((response: any) => {
      this.events.publish('priority:set');
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

  forwardToGroup(topic) {
    console.log(topic);
    
    let modal = this.modal.create(ForwardTopicPage,topic);
    modal.present();
  }


}
