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
  IsReadOnly : boolean = false;
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
    
    this.leaveApplicationForm = this.formBuilder.group({
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      reporting_date: ['', Validators.required],
      leaves: ['', Validators.required],
      leaveType: ['', Validators.required],
      remark: ['']
    });
    this.setTitle();
    this.getLeaveAppTypes();
    this.getLeaveAppformDetail();
  }

  getLeaveAppformDetail(){
    return new Promise((resolve,reject) => {
      this.connection.doPost('Payroll/Get_LeaveApplication_Payroll',{
        CompanyID : this.connection.user.CompanyID,
      },false).then((response : any) => {
       this.userData = response.LeaveApplication[0];
       resolve(true);
      }).catch((error) => {
       reject();
      });
      }); 
  }

  getLeaveAppTypes(){
    return new Promise((resolve,reject) => {
    this.connection.doPost('Payroll/Get_TypeOfLeave_Payroll',{
      CompanyID : this.connection.user.CompanyID,
    },false).then((response : any) => {
     this.typeList = response.TypeOfLeave;
     resolve(true);
    }).catch((error) => {
     reject();
    });
    });
  }

  validateDates(startDate,endDate,reportingDate){
    this.IsReadOnly = false;
    if(startDate.isSameOrBefore(moment().toDate())){
      this.event.publish('toast:error', 'Start date must be greater than today');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
      return false; 
    }
    if (startDate.isSameOrAfter(endDate)) {
      this.event.publish('toast:error', 'End Date must be greater than start date');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
      return false;
    }
    if (reportingDate.isSameOrBefore(endDate)) {
      this.event.publish('toast:error', 'Reporting date must be greater than end date');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
      return false;
    }
    return true;
  }

  getTotalLeaves(date) {
    this.startDate = moment(this.leaveApplicationForm.get('from_date').value, "YYYY/MM/DD");
    this.endDate = moment(this.leaveApplicationForm.get('to_date').value, "YYYY/MM/DD");
    this.reportingDate = moment(this.leaveApplicationForm.get('reporting_date').value, "YYYY/MM/DD");
    this.leaves = this.endDate.diff(this.startDate, 'days');
    this.validateDates(this.startDate,this.endDate,this.reportingDate);
    if (this.leaves > 0) {
      this.IsReadOnly = true;
      this.leaveApplicationForm.controls['leaves'].setValue(this.leaves);
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

  submit() {
    return new Promise((resolve, reject) => {
    if(!this.validateDates(this.startDate,this.endDate,this.reportingDate)){   
     this.event.publish('toast:error','invalid Details');
    } else {
      this.connection.doPost('Payroll/Set_LeaveApplication_Payroll', {
      CompanyID : this.connection.user.CompanyID,
      EMailID : this.userData.EMailID || '',
      MobileNo : this.userData.MobileNo || '',
      FromDate: this.date.toUTCISOString(this.leaveApplicationForm.get('from_date').value,false),
      ToDate: this.date.toUTCISOString(this.leaveApplicationForm.get('to_date').value,false),
      ReportingDate : this.date.toUTCISOString(this.leaveApplicationForm.get('reporting_date').value,false),
      TypeOfLeaveID : this.type,
      NoOfLeaves: this.leaveApplicationForm.get('leaves').value,
      Remark: this.leaveApplicationForm.get('remark').value,
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          this.event.publish('toast:create',response.Data.Message);
          this.leaveApplicationForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        this.event.publish('toast:create',error);
        reject();
      });
    }
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
