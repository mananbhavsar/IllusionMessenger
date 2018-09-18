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
  title: string = 'Forms';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page) {
    this.navCtrl.push(page);
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Forms';
    });
  }

  getTitle() {
    return this.title;
  }

}
