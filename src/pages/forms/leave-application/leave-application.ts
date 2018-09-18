import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import moment from 'moment';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';
import { DateProvider } from '../../../providers/date/date';

@IonicPage()
@Component({
  selector: 'page-leave-application',
  templateUrl: 'leave-application.html',
})
export class LeaveApplicationPage {
  leaveApplicationForm: FormGroup;
  leaves: number;
  title: string = 'Leave Application Form';
  type: any;
  startDate : any;
  endDate : any;
  reportingDate : any;
  userData:any;
  typeList:any;
  error:any={isError:false,errorMessage:''};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public date: DateProvider,
    public event: Events) {
    this.typeList = ['t','r','e'];
    this.leaveApplicationForm = this.formBuilder.group({
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      reporting_date: ['', Validators.required],
      leaves: ['', Validators.required],
      leaveType: ['', Validators.required],
      remark: ['']
    });
    this.setTitle();
  }

  getData(){
    return new Promise((resolve,reject) => {
    this.connection.doPost('',{
     
    }).then((response : any) => {
     this.userData = response.Data;
    });
    });
  }

  getTotalLeaves(date) {
    this.startDate = moment(this.leaveApplicationForm.get('from_date').value, "YYYY/MM/DD");
    this.endDate = moment(this.leaveApplicationForm.get('to_date').value, "YYYY/MM/DD");
    this.reportingDate = moment(this.leaveApplicationForm.get('reporting_date').value, "YYYY/MM/DD");
    this.leaves = this.endDate.diff(this.startDate, 'days');
    if (this.startDate.isSameOrAfter(this.endDate)) {
      this.event.publish('toast:error', 'End Date must be greater than start date');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
      this.leaves = null;
    }
    if (this.leaves > 0) {
      this.leaveApplicationForm.controls['leaves'].setValue(this.leaves);
    }
    if (this.reportingDate.isSameOrBefore(this.endDate)) {
      this.event.publish('toast:error', 'Reporting date must be greater than end date');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
    }
  }

  getLeaves() {
    if (Number(this.leaveApplicationForm.get('leaves').value) !== this.leaves || this.leaves === undefined) {
      this.leaveApplicationForm.setErrors({ 'invalid': true });
    }
  }

  getType(type) {
    this.type = type;
  }

compareTwoDates(){
  console.log(new Date(this.leaveApplicationForm.controls['to_date'].value));
  
   if(new Date(this.leaveApplicationForm.controls['to_date'].value) < new Date(this.leaveApplicationForm.controls['from_date'].value)){
      this.error= {
        isError:true,
        errorMessage:'End Date can not before start date'
      };
   }
}

  submit() {
    return new Promise((resolve, reject) => {
        this.connection.doPost('', {
        FromDate: this.date.toUTCISOString(this.date.toUTC(new Date(this.leaveApplicationForm.get('from_date').value))),
        ToDate: this.date.toUTCISOString(moment(this.leaveApplicationForm.get('to_date').value)),
        ReportingDate: this.date.toUTCISOString(moment(this.leaveApplicationForm.get('reporting_date').value)),
        Leaves: this.leaveApplicationForm.get('leaves').value,
        LeaveType: this.type,
        Remark: this.leaveApplicationForm.get('remark').value,
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.leaveApplicationForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
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
