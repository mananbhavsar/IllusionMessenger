<<<<<<< HEAD
import { DateProvider } from './../../../providers/date/date';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as  moment from "moment";
import { locale } from 'moment';
import { UserProvider } from '../../../providers/user/user';
import { HomePage } from '../../home/home';
import { DateValidator } from '../../../validators/date-validator';
import { Platform } from 'ionic-angular/platform/platform';
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events, IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import * as moment from "moment";
import { ConnectionProvider } from '../../../providers/connection/connection';
import { UserProvider } from '../../../providers/user/user';
import { DateValidator } from '../../../validators/date-validator';
import { DateProvider } from './../../../providers/date/date';
import { FileOpsProvider } from '../../../providers/file-ops/file-ops';
>>>>>>> master

@IonicPage()
@Component({
  selector: 'page-add-flash',
  templateUrl: 'add-flash.html',
})
export class AddFlashPage {
  addFlashForm: FormGroup;
  group_id: number = 0;
  group_name: string = 'loading';
<<<<<<< HEAD
  hourAddition: number = 2;
  attachments: Array<any> = [];
  isBrowser: boolean;
  isCordova : boolean;
=======
  attachments: Array<any> = [];
  hourAddition: number = 2;
  isBrowser: boolean;
  flashNews_Attachment: any = [];
>>>>>>> master

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private connection: ConnectionProvider,
    public user: UserProvider,
    public navParams: NavParams,
<<<<<<< HEAD
    public platform : Platform,
    private _date: DateProvider,
    private viewController: ViewController,
    private events: Events
=======
    private _date: DateProvider,
    private viewController: ViewController,
    private events: Events,
    private platform: Platform,
    private _fileOps: FileOpsProvider
>>>>>>> master
  ) {
    this.group_id = this.navParams.data.group_id;
    this.group_name = this.navParams.data.group_name;

    this.isBrowser = this.platform.is('core');
<<<<<<< HEAD
    this.isCordova = this.platform.is('cordova');
=======
>>>>>>> master

    this.addFlashForm = this.formBuilder.group({
      flash_message: ['', [Validators.required, Validators.maxLength(160)]],
      start_date: [moment().format()],
      end_date: [moment().add(this.hourAddition, 'hours').format()],
    }, {
        validator: DateValidator.isBefore
      });
  }

  addFlash() {
<<<<<<< HEAD
=======
    let Attachment: any = {};
    Attachment = { "Attachment": this.attachments };
>>>>>>> master
    this.connection.doPost('Chat/CreateFlashNews', {
      GroupID: this.group_id,
      Flash: this.addFlashForm.get('flash_message').value,
      StartDate: this._date.toUTCISOString(new Date(), false, false),
      EndDate: this._date.toUTCISOString(this.addFlashForm.get('end_date').value),
<<<<<<< HEAD
=======
      IsWeb: this.platform.is('core'),
      FlashNews_Attachment: JSON.stringify(Attachment)
>>>>>>> master
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

  getErrorMessage() {
    return 'End date should be more than ' + moment().add(this.hourAddition - 1, 'hours').format('h A');
  }
<<<<<<< HEAD
=======


  captured(event) {
    this.attachments.push(event);
  }

  removeAttachment(event) {
    this.attachments.splice(event.index, 1);
  }
>>>>>>> master
}