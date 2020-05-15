import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';
import { RequestDetailPage } from '../request-detail/request-detail';
@IonicPage()
@Component({
  selector: 'page-pending-request',
  templateUrl: 'pending-request.html',
})
export class PendingRequestPage {
  title: string = 'Pending Request';
  pendingData: Array<any> = null;
  pushedRequestID: Array<any> = [];
  page: number = 0;
  query: string = null;
  searchInputBtn: boolean = false;
  pendingUrl: string = 'Get_PendingRequest_Payroll';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _network: Network,
    public storage: Storage,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController) {
  }


  ionViewWillEnter() {
    this.pendingData = [];
    this.storage.get('offline:pending-request').then((requests: any) => {
      if (_.isEmpty(requests)) {
        requests = [];
      }
      this.page = 0;
      requests.forEach(request => {
        this.pushItem(request);
      });
    });
    this.getData();
  }
  // get all pending request of user which is sent
  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Payroll/' + this.pendingUrl, {
          PageNumber: this.page,
          RowsPerPage: 100,
          CompanyID: this.connection.user.CompanyID,
          // Query: this.query
        }, false).then((response: any) => {

          if (!_.isEmpty(response)) {
            response.PendingRequest.OT.forEach(item => {
              this.pushItem(item);
            });
            response.PendingRequest.LA.forEach(item => {
              this.pushItem(item);
            });
            this.page++;
            this.saveOfflineData().then(status => {
              resolve(status);
            }).catch(error => {
              reject(error);
            });
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


  pushItem(item) {
    let index = this.pushedRequestID.indexOf(item.TransactionNumber);
    if (index === -1) {//push
      this.pendingData.push(item);
      this.pushedRequestID.push(item.TransactionNumber);
    } else {
      this.pendingData[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:pending-request').then(request => {
        request = this.pendingData;
        this.storage.set('offline:pending-request', request).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  searchData() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.pendingData = [];
      this.query = null;
      this.pushedRequestID = [];
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
      this.pushedRequestID = [];
      this.getData().catch(error => {
      });

    } else {
      this.query = null;
      this.initializeItems();
    }
  }


  refresh(refresher) {
    this.page = 0;
    this.pendingData = [];
    this.storage.get('offline:pending-request').then((requests: any) => {
      if (_.isEmpty(requests)) {
        requests = [];
      }
      requests.forEach(request => {
        this.pushItem(request);
      });
    });
    this.getData().then((response) => {
      refresher.complete();
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
  // open details of single request
  ViewDetail(data) {
    let modal = this.modalCtrl.create(RequestDetailPage, { detail: data, page: 'pendingRequest' });
    modal.present();
    modal.onDidDismiss((response) => {
      if (response) {
        this.page = 0;
        this.pendingData = [];
        this.getData();
      }
    });
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Pending Request';
    });
  }

  getTitle() {
    return this.title;
  }

}
