import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConnectionProvider } from "../../providers/connection/connection";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  dashboardData: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private connection: ConnectionProvider,
  ) {
  }

  ionViewDidLoad() {
    this.initData(null);
  }

  initData(refresher) {
    this.connection.doPost('Dashboard/GetDashboardData').then(response => {
      this.dashboardData = response;
      if (refresher) {
        refresher.complete();
      }
    }).catch(error => {
      if (refresher) {
        refresher.complete();
      }
    })
  }

  roundUp(num, precision: number = 2) {
    if (isNaN(num)) {
      return num;
    }
    return Math.ceil(num * precision) / precision;
  }

}
