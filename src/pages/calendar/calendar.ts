import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import moment from 'moment';
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
  currentMonth: string;
  currentYear: any;
  currentDate: number;
  formattedDate: any;
  eventList: boolean;
  selectedEvent: any;
  isSelected: any;
  todayDate: any;
  todayMonth: any;
  today : any;
  selectedMonth : any;
  selectedYear : any;
  constructor(public navCtrl: NavController,
              public connection : ConnectionProvider,
              public events : Events) {
    this.getDays(new Date().getMonth(),new Date().getFullYear());
    this.date = moment().toDate();
    this.formattedDate = moment(this.date, 'YYY/MM/DD');
    this.todayDate = new Date().getDay();
    this.todayMonth = new Date().getMonth();
  }

  getDays(month,year){
    return new Promise((resolve,reject) => {
     this.connection.doPost('Payroll/Get_Calendar_Payroll',{
      CompanyID : this.connection.user.CompanyID,
      Month : month,
      Year : year
     }).then((response : any) => {
      this.formattedDate = moment(this.date, 'YYY/MM/DD');
      this.today = this.formattedDate.format('D');
      this.selectedMonth = this.formattedDate.format('MMM');
      this.selectedYear = this.formattedDate.format('YYYY');
       this.daysInThisMonth = response.Calendar;
       resolve(true);
     }).catch((error) => {
     });
    });
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDays(this.date.getMonth(),this.date.getFullYear());
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDays(this.date.getMonth(),this.date.getFullYear());
  }

  SelectDate(day,index) {
    if(day.IsHoliday || day.TotalTime === '00:00'){
      this.eventList = null;
       this.isSelected = 0;
    } else {
    this.isSelected = index;
    this.eventList = day;
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
