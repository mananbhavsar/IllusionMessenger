import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  title: string = 'Request Detail';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailPage');
  }


  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Pending Approval';
    });
  }

  getTitle() {
    return this.title;
  }


}
