import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RequestDetailPage } from '../request-detail/request-detail';
import { ConnectionProvider } from '../../providers/connection/connection';
import  * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-my-pending-approval',
  templateUrl: 'my-pending-approval.html',
})
export class MyPendingApprovalPage {
  title: string = 'My Pending Approval';
  pendingData: any = [];
  page: number = 0;
  query: string = null;
  searchInputBtn:boolean = false;
  myPendingUrl : string = 'Get_MyPendingAproval_Payroll';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalCtrl : ModalController) {
      this.getData();
    }

  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
      this.connection.doPost('Payroll/' + this.myPendingUrl , {
      PageNumber : this.page,
      RowsPerPage : 100,
      CompanyID : this.connection.user.CompanyID,
      // Query: this.query
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          response.MyPendingAproval.forEach(item => {
            this.pendingData.push(item);            
          });
          this.page++;
          resolve(true);
        } else {
          this.page = -1;
          resolve(false);  
        }
      }).catch((error) => {
        this.page = -1;
        resolve(false);
        reject();
      });
    }
    });
  }

  searchData() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      // this.group = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  initializeItems() {
    this.page = 0;
    this.getData().catch(error => {
    });
  }

  onCancel(event) {
    this.query = null;
    this.initializeItems();
  }

  onClear(event) {
    this.query = null;
    this.initializeItems();
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.getData().catch(error => {
      });

    } else {
      this.query = null;
      this.initializeItems();
    }
  }


  refresh(refresher) {
    this.getData().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }

  paginate(paginator) {
    this.getData().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }

  ViewDetail(data){
    let modal = this.modalCtrl.create(RequestDetailPage,{detail : data, page : 'MyPending'});
    modal.present();
    modal.onDidDismiss((response) => {

    });
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'My Pending Approval';
    });
  }



  getTitle() {
    return this.title;
  }

}
