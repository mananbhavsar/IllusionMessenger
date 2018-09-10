import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {
  title: string = 'My Calender';
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: any;
  currentMonth: string;
  currentYear: any;
  currentDate: number;
  formattedDate: any;
  eventList: boolean;
  selectedEvent: any;
  isSelected: any;
  todayDate: any;
  todayMonth: string;
  constructor(public navCtrl: NavController) {
    this.date = moment().toDate();
    this.formattedDate = moment(this.date, 'YYY/MM/DD');
    this.todayDate = Number(this.formattedDate.format('D'));
    this.todayMonth = this.formattedDate.format('MMM');
    this.getDaysOfMonth();
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.formattedDate = moment(this.date, 'YYY/MM/DD');
    this.currentMonth = this.formattedDate.format('MMM');
    this.currentYear = this.formattedDate.format('YYYY');
    let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push({ "Day": i, "Event": "" });
    }

    let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({ "Day": i + 1, "WorkDuration": "00:00", "InTime": "09:10", "OutTime": "8:00", "TargetUnit": "3", "ComplatedUnit": "4", "Shift": "Morning", "TotalHrCompleted": "266", "RequiredHr": "500", "TotalPresentDay": "5", "TotalAbsentDay": "", "Holiday": false, "Event": "" });
      if (this.daysInThisMonth[i].Day === 11) {
        this.daysInThisMonth[i].Event = "My b'Day gfh gf ";
      }
    }
    let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    for (let i = 0; i < (6 - lastDayThisMonth); i++) {
      this.daysInNextMonth.push({ "Day": i + 1, "Event": "" });
    }
    let totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
        this.daysInNextMonth.push({ "Day": i, "Event": "" });
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
  }

  SelectDate(day) {
    this.isSelected = day.Day;
    this.eventList = true;
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Leave Application Form';
    });
  }

  getTitle() {
    return this.title;
  }

}
