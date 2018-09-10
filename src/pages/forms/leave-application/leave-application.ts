import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import moment from 'moment';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-leave-application',
  templateUrl: 'leave-application.html',
})
export class LeaveApplicationPage {
  leaveApplicationForm: FormGroup;
  leaves: number;
  title: string = null;
  type: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
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
  }

  getTotalLeaves() {
    let startDate = moment(this.leaveApplicationForm.get('from_date').value, "YYYY/MM/DD");
    let endDate = moment(this.leaveApplicationForm.get('to_date').value, "YYYY/MM/DD");
    if (this.leaveApplicationForm.get('reporting_date').value) {
      let reportingDate = moment(this.leaveApplicationForm.get('reporting_date').value, "YYYY/MM/DD");
      if (reportingDate.isSameOrBefore(endDate)) {
        this.event.publish('toast:error', 'Reporting date must be greater than end date');
        this.leaveApplicationForm.setErrors({ 'invalid': true });
      }
    }
    this.leaves = endDate.diff(startDate, 'days');
    if (startDate.isSameOrAfter(endDate)) {
      this.event.publish('toast:error', 'End Date must be greater than start date');
      this.leaveApplicationForm.setErrors({ 'invalid': true });
      this.leaves = null;
    }
    if (this.leaves > 0) {
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
      this.connection.doPost('', {
        FromDate: this.leaveApplicationForm.get('from_date').value,
        ToDate: this.leaveApplicationForm.get('to_date').value,
        ReportingDate: this.leaveApplicationForm.get('reporting_date').value,
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
