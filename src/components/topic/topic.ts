import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import * as firebase from 'firebase';
import { Events, ModalController, NavController } from 'ionic-angular';
import * as moment from "moment";
import { ForwardTopicPage } from '../../pages/topic/forward-topic/forward-topic';
import { ConnectionProvider } from '../../providers/connection/connection';
import { DateProvider } from '../../providers/date/date';
import { ReadMessageProvider } from '../../providers/read-message/read-message';
import { OfflineStorageProvider } from '../../providers/offline-storage/offline-storage';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';

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
  badgeCountPath: any = [];
  pushedTopicID: any = [];
  badgeCount: number = 0;
  badgePath: any = [];
  constructor(
    private navCtrl: NavController,
    private zone: NgZone,
    private connection: ConnectionProvider,
    private _date: DateProvider,
    public events: Events,
    public read: ReadMessageProvider,
    public modal: ModalController,
    private storage: Storage,
    public offlineStorage: OfflineStorageProvider
  ) {

  }
  // ngBeforeViewInit(){
  //   this.badgeCountPath = [];
  //   this.storage.get('offline:badgeCount').then((paths: any) => {
  //     console.log(paths);

  //     if (_.isEmpty(paths)) {
  //       paths = [];
  //     }
  //     paths.forEach(path => {
  //       this.pushItem(path);
  //     });
  //   });
  // }

  ngOnChanges() {
    if (this.topic) {
      let path = 'Badge/' + this.connection.user.id + '/Groups/' + this.topic.GroupCode + '/Topics/' + this.topic.TopicCode;
      let topicRef = firebase.database().ref(path);
      if (this.badgeCount) {
        topicRef.off('value');
      }
      topicRef.on('value', snapshot => {
        this.badgeCount = snapshot.val();
      });
      let badgePath = { 'path': path, 'Count': this.badgeCount };
      this.pushItem(badgePath);
      this.saveOfflineData().then(status => {
      }).catch(error => {
      });
    }
  }

  pushItem(item) {
    let topicID = '';
    if (item) {
      topicID = item.path.substring(item.path.lastIndexOf('/') + 1);
    }
    let index = this.pushedTopicID.indexOf(topicID);
    if (index === -1) {//push
      this.badgeCountPath.push(item);
      this.pushedTopicID.push(topicID);
    } else {
      this.badgeCountPath[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:badgeCount').then(path => {
        path = this.badgeCountPath;
        this.storage.set('offline:badgeCount', path).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  openTopic(event) {
    event.preventDefault();
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
    this.read.read(null, topic.TopicCode).then((response: any) => {
      this.events.publish('loading:close');
      this.events.publish('read:message', response);
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
    let modal = this.modal.create(ForwardTopicPage, topic);
    modal.present();
  }


}
