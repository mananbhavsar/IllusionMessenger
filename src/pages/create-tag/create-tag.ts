import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Events, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../providers/connection/connection';
import * as _ from 'underscore';
@IonicPage()
@Component({
  selector: 'page-create-tag',
  templateUrl: 'create-tag.html',
})
export class CreateTagPage {
  createTagForm: FormGroup;
  title: string = 'Create Tag';
  TagID: number;
  tagButton: string = 'Create Tag';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCntl: ViewController,
    public events: Events
  ) {
    this.createTagForm = this.formBuilder.group({
      Tag: ['', [Validators.required, Validators.maxLength(30)]],
      TagCode: ['', [Validators.required, Validators.maxLength(10)]],
    });
    if (!_.isEmpty(this.navParams.data.Tag)) {
      this.tagButton = 'Update';
      this.TagID = this.navParams.data.TagID;
      this.createTagForm.setValue({
        Tag: this.navParams.data.Tag,
        TagCode: this.navParams.data.TagCode
      });
    }
  }

  createTag() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateTag', {
        TagCode: this.createTagForm.get('TagCode').value,
        Tag: this.createTagForm.get('Tag').value
      }).then((response: any) => {
        this.events.publish('toast:create', response.Data.Message);
        resolve(true);
        this.createTagForm.reset();
        this.dismiss(response);
      }).catch((error) => {
        reject();
      });
    });
  }

  updateTag() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateTag', {
        TagID: this.TagID,
        TagCode: this.createTagForm.get('TagCode').value,
        Tag: this.createTagForm.get('Tag').value
      }).then((response: any) => {
        this.events.publish('toast:create', response.Data.Message);
        resolve(true);
        this.createTagForm.reset();
        this.dismiss(response);
      }).catch((error) => {
        reject();
      });
    });
  }

  dismiss(event) {
    this.viewCntl.dismiss(event);
  }


}
