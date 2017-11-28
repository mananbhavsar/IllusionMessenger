import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-office-list',
  templateUrl: 'office-list.html',
})
export class OfficeListPage {
  officeList: Observable<any[]>;
  officeListCopy: Observable<any[]>;
  searchText: String = "";
  modelFlagName: String = "";

  path: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public platform: Platform,
    public angularFireDatabase: AngularFireDatabase,
  ) {
    this.modelFlagName = this.navParams.data.modelFlagName;
  }

  ionViewDidLoad() {
    this.storage.get('User').then(User => {
      if (User) {
        this.path = 'OfficeList/' + User.id;
        this.officeList = this.angularFireDatabase.list(this.path).valueChanges();
        this.officeListCopy = this.officeList;
      }
    });
  }

  dismiss(selectedOffice) {
    this.viewCtrl.dismiss(selectedOffice);
  }

  selectOffice(office) {
    this.dismiss(office);
  }
}
