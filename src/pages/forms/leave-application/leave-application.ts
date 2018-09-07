import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,Validators, FormBuilder, Form} from '@angular/forms';
import * as moment from 'moment';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-leave-application',
  templateUrl: 'leave-application.html',
})
export class LeaveApplicationPage {
  leaveApplicationForm : FormGroup;
  leaves : number;
  title : string = null;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder : FormBuilder,
      public connection : ConnectionProvider) {
    this.leaveApplicationForm = this.formBuilder.group({
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      reporting_date: ['', Validators.required],
      leaves : ['',Validators.required],
      remark: ['',Validators.required]
  });
  }

  getTotalLeaves(){ 
    let startDate = moment(this.leaveApplicationForm.get('from_date').value, "YYYY/MM/DD");
    let endDate = moment(this.leaveApplicationForm.get('to_date').value, "YYYY/MM/DD");
    this.leaves = endDate.diff(startDate, 'days');
    if(this.leaves > 0){
    this.leaveApplicationForm.setValue({
      leaves : this.leaves
    });
    } 
  }

  submit(){
    this.connection.doPost('', {
      FromDate: this.leaveApplicationForm.get('from_date').value,
      ToDate : this.leaveApplicationForm.get('to_date').value,
      ReportingDate : this.leaveApplicationForm.get('reporting_date').value,
      Leaves: this.leaveApplicationForm.get('leaves').value,
      Remark : this.leaveApplicationForm.get('remark').value
    }).then((response: any) => {
     this.leaveApplicationForm.reset();
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
