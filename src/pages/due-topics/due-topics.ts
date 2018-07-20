import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-due-topics',
  templateUrl: 'due-topics.html',
})
export class DueTopicsPage {
   title : string = 'Task due in days';
   topics : any = null;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public viewCntl : ViewController) {
    
  }

  dismiss(){
   this.viewCntl.dismiss();
  }


}
