import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import moment from 'moment';
import * as _ from 'underscore';
@IonicPage()
@Component({
  selector: 'page-advance-request',
  templateUrl: 'advance-request.html',
})
export class AdvanceRequestPage {
  advanceRequestForm: FormGroup;
  type: any;
  title: string = null;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public event: Events) {
    this.advanceRequestForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      remark: ['']
    });
    this.setTitle();
  }

  submit() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/', {
        Date: moment().toNow(),
        Amount: this.advanceRequestForm.get('amount').value,
        Remark: this.advanceRequestForm.get('remark').value
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.advanceRequestForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Advance Request';
    });
  }

  getTitle() {
    return this.title;
  }
}
