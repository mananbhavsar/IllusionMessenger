import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';


@IonicPage()
@Component({
  selector: 'page-advance-request',
  templateUrl: 'advance-request.html',
})
export class AdvanceRequestPage {
  advanceRequestForm : FormGroup;
  type : any;
  title : string = null;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public formBuilder : FormBuilder,
      public connection : ConnectionProvider) {
    this.advanceRequestForm = this.formBuilder.group({
      date: ['', Validators.required],
      amount: ['', [Validators.required,Validators.pattern('[1-9]\d*$')]],
      remark: ['',Validators.required]
  });
 }

  submit(){
    this.connection.doPost('Chat/CreateFlashNews', {
      Date: this.advanceRequestForm.get('date').value,
      Amount : this.advanceRequestForm.get('amount').value,
      Remark : this.advanceRequestForm.get('remark').value
    }).then((response: any) => {
     this.advanceRequestForm.reset();
    });
  }


  setTitle() {
    this.title = null;
    setTimeout(() => {
        this.title = 'Advance Request';
    });
}

getTitle() {
    return this.title;
}
}
