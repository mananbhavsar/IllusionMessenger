import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-office-list',
  templateUrl: 'office-list.html',
})
export class OfficeListPage {
  officeList: any = [];
  officeListCopy: any = [];
  searchText: String = "";
  modelFlagName: String = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public platform: Platform,
  ) {

  }

  ionViewDidLoad() {
    this.storage.get('OfficeList').then((officeList) => {
      this.officeList = officeList;
      this.officeListCopy = officeList;
    });
  }

  dismiss(selectedOffice) {
    this.viewCtrl.dismiss(selectedOffice);
  }

  getItems(searchText) {
    //init
    this.officeList = this.officeListCopy;

    //search
    if (searchText && searchText.trim() != '') {
      this.officeList = this.officeList.filter((item) => {
        return (item.Description.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      })
    }
  }

  selectOffice(office) {
    this.dismiss(office);
  }
}
