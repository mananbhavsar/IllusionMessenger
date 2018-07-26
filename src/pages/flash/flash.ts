import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {
 news: any;
  title : string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    private connection: ConnectionProvider) {
    this.news = this.navParams.data;
    console.log(this.news);
    this.title = this.news.Flash;
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetFlashNews_Attachement', {
      FlashID : this.news.FlashID
    }).then((response) => {
      console.log(response);

    }).catch((error) => { });
  }


  dismiss() {
    this.viewCntl.dismiss();
  }


}
