import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
// import { DashboardPage } from '../dashboard/dashboard';
import { GroupsPage } from '../groups/groups';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  selectedIndex : number = 0;
  taskRoot = HomePage;
  groupRoot = GroupsPage;
  CalendarRoot = CalendarPage;
  tabsRoot : any = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events : Events) {  
    this.selectedIndex = this.navParams.data || 0;
  }

  getTabs(){
    this.events.subscribe('menu:created', (menu: any) => {
      setTimeout(() => {
        menu.forEach(rootPage => {
          switch(rootPage.name){
            case 'DashboardPage' :
            case 'HomePage' :
            case 'GroupsPage' :
            case 'CalendarPage' :
            this.tabsRoot.push(rootPage);
            break;
          }
        });
      });
  });
  }
}
