import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-office-list',
  templateUrl: 'office-list.html',
})
export class OfficeListPage {
  officeList: any = {};
  officeListCopy: any = {}
  searchText: String = "";
  modelFlagName: String = "";

  path: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public platform: Platform,
    private _network: Network,
  ) {
    this.modelFlagName = this.navParams.data.modelFlagName;
  }

  ionViewDidEnter() {
    this.storage.get('User').then(User => {
      if (User) {
        this.path = 'OfficeList/' + User.id;

        //checking if online
        if (this._network.type === 'none') {
          this.storage.get('OfflineOfficeList').then(officeList => {
            this.officeList = officeList;
            this.officeListCopy = this.officeList;
          });
        } else {
          firebase.database().ref(this.path).on('value', snapshot => {
            this.officeList = snapshot.val();
            this.officeListCopy = this.officeList;

            this.storage.set('OfflineOfficeList', this.officeList);

          });
        }
      }
    });
  }

  dismiss(selectedOffice) {
    this.viewCtrl.dismiss(selectedOffice);
  }

  selectOffice(office) {
    this.dismiss(this.officeList[office]);
  }
}
