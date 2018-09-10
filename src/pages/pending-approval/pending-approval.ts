import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import * as _ from 'underscore';
; @IonicPage()
@Component({
  selector: 'page-pending-approval',
  templateUrl: 'pending-approval.html',
})
export class PendingApprovalPage {
  title: string = 'Pending Approval';
  pendingData: any;
  page: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider) {
  }

  getData() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('', {

      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.pendingData = response.Data;
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
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

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Pending Approval';
    });
  }

  getTitle() {
    return this.title;
  }

}
