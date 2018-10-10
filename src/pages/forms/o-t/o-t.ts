import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as moment from 'moment';
import { DateProvider } from '../../../providers/date/date';
import * as _ from 'underscore';
import { UserProvider } from '../../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-o-t',
  templateUrl: 'o-t.html',
})
export class OTPage {
  overtTimeForm: FormGroup;
  type: any;
  title: string = 'Over Time Form';
  utcString: any;
  typeList:any = [];
  validateDate : boolean = false;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public user: UserProvider,
    public date: DateProvider,
    public event: Events) {
    this.overtTimeForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      remark: ['']
    });
    this.getOverTypes();
    this.setTitle();
    this.overtTimeForm.setValue({
    date : moment(moment().add(-1, 'days'), moment.ISO_8601).format(),
    type : '',
    remark : ''
    });
  }

  getOverTypes(){
    return new Promise((resolve,reject) => {
    this.connection.doPost('Payroll/Get_TypeOfOT_Payroll',{
      CompanyID : this.connection.user.CompanyID
    },false).then((response : any) => {
     this.typeList = response.TypeOfOT;
     resolve(true);
    }).catch((error) => {
     reject();
    });
    });
  }

  getType(type) {
    this.type = type;
  }

  submit() {
    return new Promise((resolve, reject) => {
      if (moment(this.overtTimeForm.get('date').value).isSameOrAfter(moment().format('DD MMM YYYY'))) {
        this.event.publish('toast:error', 'Selected date must be less than today');       
      } else {
      this.connection.doPost('Payroll/Set_OT_Payroll', {
      CompanyID : this.connection.user.CompanyID,
        Date: this.date.toUTCISOString(this.overtTimeForm.get('date').value,false),
        TypeOfOTID: this.type,
        Remark: this.overtTimeForm.get('remark').value
      }).then((response: any) => {
        if (!_.isEmpty(response)) {
          if(response.Data.Message){
            this.event.publish('toast:create',response.Data.Message);
          }
          this.overtTimeForm.reset();
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    }
    });
  }

  getDate(date) {
    let setDate = new Date();
    setDate.setFullYear(date.year);
    setDate.setMonth(date.month - 1);
    setDate.setDate(date.day);
    let dateMoment = moment(setDate);
    if (dateMoment.isValid()) {
      if (moment(this.overtTimeForm.get('date').value).isSameOrAfter(moment().format('DD MMM YYYY'))) {
        this.event.publish('toast:error', 'Selected date must be less than today');
        this.overtTimeForm.setErrors({ 'invalid': true });
      }
    }
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Over Time Form';
    });
  }

  getTitle() {
    return this.title;
  }





}
