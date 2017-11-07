import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-case-status-modal',
  templateUrl: 'case-status-modal.html',
})
export class CaseStatusModalPage {
  title: String = 'loading';
  item: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private _callNumber: CallNumber,
    private _inAppBrowser: InAppBrowser
  ) {
    this.item = this.navParams.data;
    this.title = this.item.Patient;
  }

  ionViewDidLoad() {

  }

  dismiss(data) {
    this.viewCtrl.dismiss();
  }

  callNumber(number) {
    this._callNumber.callNumber(number, true);
  }

  openURL(url) {
    const browser = this._inAppBrowser.create(url);
  }

}
