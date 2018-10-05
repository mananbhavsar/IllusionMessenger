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
  daysInLastMonth: any = [];
  daysInNextMonth: any = [];
  currentMonth: string;
  currentYear: any;
  currentDate: number;
  formattedDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  todayDate: any;
  todayMonth: any;
  today: any;
  selectedMonth: any;
  selectedYear: any;
  constructor(public navCtrl: NavController,
    public connection: ConnectionProvider,
    public events: Events) {
    this.getDays(new Date().getMonth() + 1, new Date().getFullYear());
    this.date = moment().toDate();
    this.formattedDate = moment(this.date, 'YYYY/MM/DD');
    this.todayDate = new Date().getDate();
    this.todayMonth = new Date().getMonth() + 1;
  }

  getDays(month, year) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Payroll/Get_Calendar_Payroll', {
        CompanyID: this.connection.user.CompanyID,
        Month: month,
        Year: year
      }).then((response: any) => {
        this.formattedDate = moment(this.date, 'YYYY/MM/DD');
        this.today = this.formattedDate.format('D');
        this.selectedMonth = this.formattedDate.format('MMM');
        this.selectedYear = this.formattedDate.format('YYYY');
        this.daysInThisMonth = response.Calendar;
        if(this.daysInThisMonth){
            this.daysInThisMonth.forEach(day => {
              if(moment().format('M/D/YYYY') === moment(day.Date).format('M/D/YYYY')){
                this.eventList = day;
                this.todayDate = new Date().getDate();
                this.todayMonth = new Date().getMonth() + 1;
              }
            });
          }
       this.daysInLastMonth = [];
       this.daysInNextMonth = [];
        let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
          this.daysInLastMonth.push(i);
        }
        let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        for (let i = 0; i < (6 - lastDayThisMonth); i++) {
          this.daysInNextMonth.push(i + 1);
        }
        resolve(true);
      }).catch((error) => {
      });
    });
  }

  getDate(day){
  for(let i = 1; i < 10; i++){
    if(day === i){
      return '0'+i;
    }
    return day;
  }
  return day;

  }

  goToLastMonth() {
    this.eventList = false;
    this.isSelected = 0;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDays(this.date.getMonth() + 1, this.date.getFullYear());
  }

  goToNextMonth() {
    this.eventList = false;
    this.isSelected = 0;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDays(this.date.getMonth() + 1, this.date.getFullYear());
  }

  SelectDate(day, index) {
    if (day.IsHoliday || day.TotalTime === '00:00') {
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
