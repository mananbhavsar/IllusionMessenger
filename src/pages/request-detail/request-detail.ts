import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { Platform } from 'ionic-angular/platform/platform';
import { NotificationsProvider } from '../../providers/notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {
  title: string = 'Request Detail';
  requestDetail : any;
  page : any;
  isApproved : boolean = false;
  isReject : boolean = false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
      public connection : ConnectionProvider,
      public notifications : NotificationsProvider,
      public platform  :Platform,
    public events : Events) {
    this.page = this.navParams.data.page;
     this.requestDetail = this.navParams.data.detail;
  }

  takeActionOnRequest(requestType){
    return new Promise((resolve, reject) => {
      if(requestType === 'Approve') {
        this.isApproved = true;
      }
      if(requestType === 'Reject'){
        this.isReject = true;
      }
      this.connection.doPost('Payroll/Set_ApprovedReject_Request_Payroll', { 
        RequestedEmpID : this.requestDetail.EmployeeID,
        CompanyID : this.connection.user.CompanyID,
        RequestType : this.requestDetail.RequestType,
        IsApproved : this.isApproved,
        IsReject : this.isReject,
        Remark :  this.requestDetail.Remark,
        Date : this.requestDetail.Date,
        TransactionNumber : this.requestDetail.TransactionNumber,
        IsWeb : this.platform.is('core')
      }).then((response : any) => {
        this.events.publish('toast:create',response.Data.Message);
        try{
        this.notifications.sends(response.OneSignalTransaction);   
        }catch(error){
        }     
        this.viewCtrl.dismiss(response);
        resolve(true);
      }).catch((error) => {
        this.viewCtrl.dismiss(error);
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
