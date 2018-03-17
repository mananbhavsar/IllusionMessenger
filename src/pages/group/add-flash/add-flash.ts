import { DateProvider } from './../../../providers/date/date';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as  moment from "moment";
import { locale } from 'moment';
import { UserProvider } from '../../../providers/user/user';
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-add-flash',
  templateUrl: 'add-flash.html',
})
export class AddFlashPage {
  addFlashForm: FormGroup;
  group_id: number = 0;
  group_name: string = 'loading';

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private connection: ConnectionProvider,
    public user: UserProvider,
    public navParams: NavParams,
    private _date: DateProvider,
    private viewController: ViewController,
    private events: Events
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;

    this.addFlashForm = this.formBuilder.group({
      flash_message: ['', [Validators.required, Validators.maxLength(160)]],
      start_date: [moment().format()],
      end_date: [moment().add(2, 'hours').format()],
    });
  }

  addFlash() {
    this.connection.doPost('Chat/CreateFlashNews', {
      GroupID: this.group_id,
      Flash: this.addFlashForm.get('flash_message').value,
      StartDate: this._date.toUTCISOString(new Date(), false),
      EndDate: this._date.toUTCISOString(this.addFlashForm.get('end_date').value, true),
    }).then((response: any) => {
      if (('Status' in response) && response.Status === 0) {
        this.events.publish('toast:error', response.Message);
      } else {
        this.dismiss(response);
      }
    }).catch(error => {
      this.events.publish('toast:error', error);
    });
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }
}