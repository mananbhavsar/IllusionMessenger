import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
