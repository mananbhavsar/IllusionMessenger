import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';

import { ConnectionProvider } from "../../../providers/connection/connection";

import { Global } from "../../../app/global";
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-case-status-modal',
  templateUrl: 'case-status-modal.html',
})
export class CaseStatusModalPage {
  title: String = 'loading';
  item: any = {};
  impressNo: string = null;
  challans: Array<any> = [];
  global: any = Global;
  challanVisible: boolean = false;
  hasInternet: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private _callNumber: CallNumber,
    private _network: Network,
    private _storage: Storage,
    private _inAppBrowser: InAppBrowser,
    private _connection: ConnectionProvider,
  ) {
    this.item = this.navParams.data;
    this.impressNo = this.item.ImpressionNo;

    this.title = this.item.Patient;
    this.hasInternet = this._network.type !== 'none';
  }

  ionViewDidEnter() {
    this.doTranslate();
    this.challanVisible = [Global.LoginType.Doctor, Global.LoginType.Parent].indexOf(this._connection.user.LoginTypeID) > -1;

    if (this.challanVisible) {
      this.getChallanInfo();
    }
  }

  getChallanInfo() {
    if (this.hasInternet) {
      this._connection.doPost('MobileApp/GetChallanDetails', {
        ImpressionNumber: this.impressNo
      }).then((response: Array<any>) => {
        this.challans = response;

        //saving Offline
        this.getOfflineChallan().then(challans => {
          challans[this.impressNo] = this.challans;
          this._storage.set('OfflineChallans', challans);
        }).catch(error => { });
      }).catch(error => {

      });
    } else {
      this.getOfflineChallan().then(challans => {
        this.challans = challans[this.impressNo];
      }).catch(error => {

      });
    }
  }

  getOfflineChallan() {
    return new Promise((resolve, reject) => {
      this._storage.get('OfflineChallans').then(challans => {
        //checking if empty
        if (_.empty(challans)) {
          challans = {};
        }
        //checking if this impression has challans
        if (!(this.impressNo in challans)) {
          challans[this.impressNo] = [];
        }
        resolve(challans);
      }).catch(error => {
        reject(error);
      });
    });
  }

  doTranslate() {

  }

  dismiss(data) {
    this.viewCtrl.dismiss();
  }

  callNumber(number) {
    this._callNumber.callNumber(number, true);
  }

  openURL(url) {
    if (url.trim() !== '') {
      const browser = this._inAppBrowser.create(url);
    }
  }

}
