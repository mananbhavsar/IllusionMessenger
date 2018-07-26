import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-create-tag',
  templateUrl: 'create-tag.html',
})
export class CreateTagPage {
  createTagForm: FormGroup;
  title: string = 'Create Tag';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider
  ) {
    this.createTagForm = this.formBuilder.group({
      tag: ['', [Validators.required, Validators.maxLength(30)]],
      tag_code: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  createTag() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('CreateTag', {
        TagCode: this.createTagForm.get('tag_code').value,
        Tag: this.createTagForm.get('tag').value
      }).then((response) => {

      }).catch((error) => {
        reject();
      });
    });
  }


}
