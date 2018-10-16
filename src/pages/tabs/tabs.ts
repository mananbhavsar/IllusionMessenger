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
  // dashboardRoot = DashboardPage;
  taskRoot = HomePage;
  groupRoot = GroupsPage;
  CalendarRoot = CalendarPage;
  tabsRoot : any = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public events : Events) {  
      //  this.getTabs();
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

  /*

   tabsRoot: any = [{'name' : 'HomePage', 'title' : 'Task'}];
  hasPage: any = {
    Dashboard: false,
    Task: true,
    Group: false,
    Calendar: false,
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events) {
    this.selectedIndex = this.navParams.data || 0;
  }

  ionViewWillEnter() {
    this.getTabs();
  }

  getTabs() {

    this.events.subscribe('menu:created', (menu: any) => {
      setTimeout(() => {
        menu.forEach(rootPage => {
          switch (rootPage.name) {
            case 'DashboardPage':
              this.hasPage.Dashboard = true;
              break;
            case 'GroupsPage':
              this.hasPage.Group = true;
              break;
            case 'CalendarPage':
              this.hasPage.Calendar = true;
              break;
          }
          
          for (let page in this.hasPage) {
            if (this.hasPage[page]) {
              switch (rootPage.name) {
                case 'DashboardPage':
                case 'GroupsPage':
                case 'CalendarPage':
                case 'HomePage':
                  this.tabsRoot.push(rootPage);
                break;
              }
            }
            break;
          }
        });
      console.log(this.tabsRoot);
      });
    });
  }  */


}
