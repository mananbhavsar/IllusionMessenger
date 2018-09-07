import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-over-time',
  templateUrl: 'over-time.html',
})
export class OverTimePage {
  overtTimeForm : FormGroup;
  type : any;
  title : string = 'Over Time Form';
  constructor(public navCtrl: NavController,
    public formBuilder : FormBuilder,
     public navParams: NavParams,
     public connection : ConnectionProvider) {
    this.overtTimeForm = this.formBuilder.group({
      date: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      remark: ['',Validators.required]
  });
  }

  getType(type){
  this.type = type;
  }

  submit(){
    this.connection.doPost('Chat/CreateFlashNews', {
      Date: this.overtTimeForm.get('date').value,
      Code : this.overtTimeForm.get('code').value,
      Type : this.type,
      Remark : this.overtTimeForm.get('remark').value
    }).then((response: any) => {
     this.overtTimeForm.reset();
    });
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
