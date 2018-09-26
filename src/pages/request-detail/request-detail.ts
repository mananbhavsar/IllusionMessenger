import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';


@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  title: string = 'Request Detail';
  requestDetail : any;
  page : any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
      public connection : ConnectionProvider,
    public events : Events) {
      console.log(this.navParams.data.detail);
    this.page = this.navParams.data.pendingRequest;
     this.requestDetail = this.navParams.data.detail;
     console.log(this.requestDetail);
  }


  takeActionOnRequest(requestType){
    return new Promise((resolve, reject) => {
      this.connection.doPost('Payroll/ApproveRejectRequest', { 
        
      }).then((response : any) => {
        this.events.publish('toast:create',response.Message);
        resolve(true);
      }).catch((error) => {
        reject();
      });
    });
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
