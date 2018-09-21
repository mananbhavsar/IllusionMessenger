import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
import { DashboardPage } from '../dashboard/dashboard';
import { GroupsPage } from '../groups/groups';
import { FormsPage } from '../forms/forms';
import { SalarySlipPage } from '../salary-slip/salary-slip';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  selectedIndex : number = 0;
  dashboardRoot = DashboardPage;
  taskRoot = HomePage;
  groupRoot = GroupsPage;
  CalendarRoot = FormsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {  
    this.selectedIndex = this.navParams.data || 0;

  }


}
