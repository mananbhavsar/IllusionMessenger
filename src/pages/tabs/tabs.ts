import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CalenderPage } from '../calender/calender';
import { DashboardPage } from '../dashboard/dashboard';
import { GroupListPage } from '../group-list/group-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  selectedIndex : number = 0;
  dashboardRoot = DashboardPage;
  taskRoot = HomePage;
  groupRoot = GroupListPage;
  CalenderRoot = CalenderPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedIndex = this.navParams.data || 0;
    console.log(this.selectedIndex);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
