import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  title: string = 'Request Detail';
  requestDetail : any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController) {
     this.requestDetail = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailPage');
  }

  dismiss(event){
    this.viewCtrl.dismiss();
  }


  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Request Detail';
    });
  }

  getTitle() {
    return this.title;
  }


}
