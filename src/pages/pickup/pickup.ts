import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Events } from 'ionic-angular';

import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";

import * as moment from 'moment';
import * as firebase from 'firebase';
import { TimeSlots } from "./timeSlots";

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html'
})
export class PickupPage {
  title: String = 'loading';
  titles = ['Today', 'Tomorrow'];
  selectedOffice: any = {};
  selectedTab: string = '0';

  time: number;
  timeSlot;
  serverHour;
  serverMinutes;
  serverTime: Number;
  timeDifference: number = 45;
  disablePickupButton: Boolean = true;
  disableRadio: Boolean;
  constructor(
    public navCtrl: NavController,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
  ) {
  }

  ionViewDidLoad() {
    this.offliceList.getOffice('Pickup').then((selectedOffice) => {
      this.selectedOffice = selectedOffice;
      this.setTitle();

      this.initData();
    }).catch((error) => {
      this.events.publish('toast:error', error);
      this.navCtrl.pop();
    })
  }

  initData() {
    //getting server time
    this.connection.doPost('Pickup/Get_ServerTime', {}, true).then((response) => {
      this.serverHour = moment(response, 'MM/DD/YYYY hh:mm:ss A').format("k");
      this.serverMinutes = moment(response, 'MM/DD/YYYY hh:mm:ss A').format("m");
      this.serverTime = parseInt(this.serverHour) * 60 + parseInt(this.serverMinutes)

      this.timeSlot = TimeSlots;
      this.resetTime();
    });
  }

  resetTime() {
    //clear selected Time
    this.time = null;
    //disable button
    this.disablePickupButton = true;
  }

  setTitle() {
    this.title = 'Pickup :' + this.titles[parseInt(this.selectedTab)];
  }

  segmentChanged(event) {
    this.selectedTab = event.value;
    this.setTitle();

    this.resetTime();
  }

  isDisabled(time) {
    if (this.selectedTab === '1') { //no disable to all for tomorrow
      return false;
    } else {
      /**
       * today checking if time already passed
       */
      let seletedTime = parseInt(time.time) * 60 - this.timeDifference;
      return seletedTime <= this.serverTime;
    }
  }

  selectTime() {
    if (this.time) {
      this.disablePickupButton = false;
    } else {
      this.disablePickupButton = true;
    }
  }

  confirm() {
    const pickupTime = moment().utc().set({ 'hour': this.time, 'minute': 0, 'second': 0, 'millisecond': 0 }).toISOString()
    const day = this.selectedTab === '0' ? "TODAY" : "TOMORROW";
    const hour = this.time

    this.connection.doPost('Pickup/Insert_PP_TPickUP', {
      PickUPDatetime: pickupTime,
      Day: day,
      Hours: hour,
      CreatedByID: this.connection.user.CustomerPortalID,
    }).then(() => {
      this.events.publish('alert:basic', 'Request Sent!', 'Your request has been received. You will get confirmation once accepted along with pickup person contact detail.');

      //Increment count
      this.increaseCount('PickUpCount');
      this.increaseCount('Total');

      this.navCtrl.setRoot(HomePage);
    });

    this.time = null;
    this.disablePickupButton = true;
  }

  /**
   * This will increase badge count if pick set
   */
  increaseCount(path) {
    let ref = firebase.database().ref('Badge/' + this.connection.user.id + '/' + path);
    ref.transaction(function (count) {
      count = count || 0;
      if (count === 0) {
        return count;
      }
      return count + 1;
    });
  }
}
