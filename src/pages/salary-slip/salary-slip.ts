import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-salary-slip',
  templateUrl: 'salary-slip.html',
})
export class SalarySlipPage {
  title: string = 'Salary Slip';
  salarySlipData: any;
  page: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider) {
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


  getData() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('', {

      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.salarySlipData = response.Data;
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


}
