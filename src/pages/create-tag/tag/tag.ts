import { Component } from '@angular/core';
import { IonicPage, Events, ModalController, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { CreateTagPage } from '../create-tag';

@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html',
})
export class TagPage {
  title: string = 'Tags';
  tags: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalCntl: ModalController,
    public events: Events) {
    this.getTags();
  }



  getTags() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetTagList', {

      }).then((response: any) => {
        console.log(response.TagList);
        this.tags = response.TagList;

      }).catch((error) => {
        this.events.publish('toast:create', error);
      });
    });
  }

  removeTag(tag, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveTag', {
        TagID: tag.TagID
      }).then((response: any) => {
        if (response) {
          this.events.publish('toast:create', response.Data.Message);
          this.tags.splice(index, 1);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  updateTag(tag) {
    let modal = this.modalCntl.create(CreateTagPage, tag);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getTags();
      }
    });
    modal.present();
  }

  addTag(event) {
    let modal = this.modalCntl.create(CreateTagPage);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getTags();
      }
    });
    modal.present();
  }

  refresh(refresher) {
    this.getTags().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }
}
