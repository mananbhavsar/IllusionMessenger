import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OverTimePage } from '../../pages/forms/over-time/over-time';
import { AdvanceRequestPage } from '../../pages/forms/advance-request/advance-request';
import { LeaveApplicationPage } from '../../pages/forms/leave-application/leave-application';

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  openPage(page){
    this.navCtrl.push(page);
  }

}
