import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController } from 'ionic-angular';
import moment from 'moment';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  title: string = 'My Calendar';
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any = [];
  daysInNextMonth: any = [];
  currentMonth: string;
  currentYear: any;
  currentDate: number;
  formattedDate: any;
  isInternetConnected: boolean = true;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  monthData: any;
  todayDate: any;
  pushedTodaysDaysId: Array<any> = [];
  todayMonth: any;
  today: any;
  selectedMonth: any;
  selectedYear: any;
  constructor(public navCtrl: NavController,
    public connection: ConnectionProvider,
    public network: Network,
    public storage: Storage,
    public events: Events) {
  }

  ionViewWillEnter() {
    this.isInternetConnected = this.network.type !== 'none';
    this.date = moment().toDate(); // current date to check 
    this.formattedDate = moment(this.date, 'YYYY/MM/DD');
    this.todayDate = new Date().getDate(); // today date to display
    this.todayMonth = new Date().getMonth() + 1; // next month 
    this.storage.get('offline:calendar').then((days: any) => {
      if (_.isEmpty(days)) {
        this.daysInThisMonth = [];
      } else {
        this.daysInThisMonth = days;
      }
    });
    this.getDays(new Date().getMonth() + 1, new Date().getFullYear()); // get days of next month
  }

  getDays(month, year) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Payroll/Get_Calendar_Payroll', {
        CompanyID: this.connection.user.CompanyID,
        Month: month,
        Year: year
      }, false).then((response: any) => {
        this.formattedDate = moment(this.date, 'YYYY/MM/DD');
        this.today = this.formattedDate.format('D');
        this.selectedMonth = this.formattedDate.format('MMMM');
        this.selectedYear = this.formattedDate.format('YYYY');
        this.daysInThisMonth = response.Calendar;
        this.storage.set('offline:calendar', this.daysInThisMonth);
        this.monthData = response.Month_Wise[0];

        if (this.daysInThisMonth) {
          this.daysInThisMonth.forEach(day => {
            if (moment().format('M/D/YYYY') === moment(day.Date).format('M/D/YYYY')) {
              this.eventList = day;
              if (!day.IsTechnician) {
                day.TargetUnits = 'NA';
                day.CompletedUnits = 'NA';
              }
              this.todayDate = new Date().getDate();
              this.todayMonth = new Date().getMonth() + 1;
            }
          });
        }
        this.daysInLastMonth = [];
        this.daysInNextMonth = [];
        let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay(); // first day of this month
        let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate(); // if current month contain prev days also
        for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
          this.daysInLastMonth.push(i); // days in previous month
        }
        let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        for (let i = 0; i < (6 - lastDayThisMonth); i++) {
          this.daysInNextMonth.push(i + 1); // days in next month
        }
        resolve(true);
      }).catch((error) => {
      });
    });
  }

  pushItem(item) {
    let index = this.pushedTodaysDaysId.indexOf(item.GroupID);
    if (index === -1) {//push
      this.daysInThisMonth.push(item);
      this.pushedTodaysDaysId.push(item.GroupID);
    } else {
      this.daysInThisMonth[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:manage-groups').then(group => {
        group = this.daysInThisMonth;
        this.storage.set('offline:manage-groups', group).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }
  // to display current date
  getDate(date) {
    if (moment(date, 'MM-D-YYYY').isAfter(moment())) {
      return true;
    }
    return false;
  }
  // on click previous month
  goToLastMonth() {
    if (this.network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
      this.eventList = false;
      this.isSelected = 0;
      this.monthData = {};
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
      this.getDays(this.date.getMonth() + 1, this.date.getFullYear());
    }
  }
  // on click next month
  goToNextMonth() {
    if (this.network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
      this.eventList = false;
      this.isSelected = 0;
      this.monthData = {};
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
      this.getDays(this.date.getMonth() + 1, this.date.getFullYear());
    }
  }
  // to show selected date
  SelectDate(day, index) {
    if (day.IsAbsent || moment(day.Date).isAfter(moment().toDate(), 'day')) {
      this.eventList = null;
      this.isSelected = 0;
    } else {
      this.isSelected = index;
      this.eventList = day;
      if (!day.IsTechnician) {
        day.TargetUnits = 'NA';
        day.CompletedUnits = 'NA';
      }
    }
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Calendar';
    });
  }

  getTitle() {
    return this.title;
  }

}
