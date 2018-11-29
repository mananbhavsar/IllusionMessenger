import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';
import { DateProvider } from '../../../providers/date/date';
import { Platform } from 'ionic-angular/platform/platform';
import { NotificationsProvider } from '../../../providers/notifications/notifications';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-advance-request',
  templateUrl: 'advance-request.html',
})
export class AdvanceRequestPage {
  advanceRequestForm: FormGroup;
  type: any;
  title: string = 'Advance Request';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public event: Events,
    public platform : Platform,
    public _network : Network,
    public storage : Storage,
    public events : Events,
    public notifications : NotificationsProvider,
    public date: DateProvider) {
    this.advanceRequestForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      remark: ['']
    });
    this.setTitle();
  }

  submit() {
    return new Promise((resolve, reject) => {
      if (this._network.type === 'none') {
        this.events.publish('toast:create', 'You seems to be offline' + '!');
        resolve(true);
      } else {
      this.connection.doPost('Payroll/Set_AdvanceRequest_Payroll', {
        CompanyID : this.connection.user.CompanyID,
        Date: this.date.toUTCISOString(new Date(), false),
        RequestAmount: this.advanceRequestForm.get('amount').value,
        Remark: this.advanceRequestForm.get('remark').value,
        IsWeb : this.platform.is('core')
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.event.publish('toast:create',response.Data.Message);
          this.notifications.sends(response.OneSignalTransaction);
          this.advanceRequestForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    }
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
