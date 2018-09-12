import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as moment from 'moment';
import { DateProvider } from '../../../providers/date/date';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-over-time',
  templateUrl: 'over-time.html',
})
export class OverTimePage {
  overtTimeForm: FormGroup;
  type: any;
  title: string = 'Over Time Form';
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public date: DateProvider,
    public event: Events) {
    this.overtTimeForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      remark: ['']
    });
    this.setTitle();
  }

  getType(type) {
    this.type = type;
  }

  submit() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateFlashNews', {
        Date: this.overtTimeForm.get('date').value,
        Type: this.type,
        Remark: this.overtTimeForm.get('remark').value
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.overtTimeForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  getDate(event) {
    if (moment(this.overtTimeForm.get('date').value).isAfter(moment().format('DD MMM YYYY'))) {
      this.event.publish('toast:error', 'Selected date must be less than today');
      this.overtTimeForm.setErrors({ 'invalid': true });
    }
    console.log(this.date.toUTCISOString(moment(this.overtTimeForm.get('date').value)));
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Over Time Form';
    });
  }

  getTitle() {
    return this.title;
  }





}
