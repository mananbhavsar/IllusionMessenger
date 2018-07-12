import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import * as moment from "moment";
import { ConnectionProvider } from '../../providers/connection/connection';
import { DateProvider } from '../../providers/date/date';


@Component({
  selector: 'topic',
  templateUrl: 'topic.html'
})
export class TopicComponent {
  @Input() topic: any = null;
  @Input() type: string = null;
  @Input() group_id: number = 0;

  @Output() clicked = new EventEmitter();

  badgeCount: number = 0;
  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private connection: ConnectionProvider,
    private _date: DateProvider,
  ) {

  }

  ngOnChanges() {
    if (this.topic) {
      let topicRef = firebase.database().ref('Badge/' + this.connection.user.id + '/Groups/' + this.topic.GroupCode + '/Topics/' + this.topic.TopicCode);
      console.log('Badge/' + this.connection.user.id + '/Groups/' + this.topic.GroupCode + '/Topics/' + this.topic.TopicCode);
      if (this.badgeCount) {
        topicRef.off('value');
      }
      topicRef.on('value', snapshot => {
        this.badgeCount = snapshot.val();
        console.log(this.badgeCount);
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

  isExpired(date) {
    if (moment(date).isValid() && Math.abs(moment().diff(moment(date), 'years')) < 20) {
      return (new Date().getTime() - this._date.fromServerFormat(date).toDate().getTime()) > 0;
    }
    return null;
  }
}
