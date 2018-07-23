import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-daily-shedule',
  templateUrl: 'daily-shedule.html',
})
export class DailyShedulePage {
  title: string = 'Daily Sheduler';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public viewCntl : ViewController) {

  }

  ionViewDidLoad() {

  }

  dismiss(event){
   this.navCtrl.setRoot('HomePage');
  }

}
