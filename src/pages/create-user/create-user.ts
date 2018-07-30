import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  createUserForm: FormGroup;
  title: string = 'Create User';
  userBtn: string = 'Create User';
  UserID : number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCntl: ViewController
  ) {

    this.createUserForm = this.formBuilder.group({
      User: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      UserCode: ['', [Validators.required, Validators.maxLength(10)]],
      EmailID: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      PhoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    });

    if (!_.isEmpty(this.navParams.data.User)) {
      this.userBtn = 'Update';
      this.UserID = this.navParams.data.UserID,
      this.createUserForm.setValue({
        User: this.navParams.data.User,
        UserCode: this.navParams.data.UserCode,
        EmailID: this.navParams.data.EmailID || '',
        PhoneNo: this.navParams.data.PhoneNo || '',
        Password: this.navParams.data.Password || ''
      });
    }
  }


  createUser() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateNewUser', {
        User: this.createUserForm.get('User').value,
        UserCode: this.createUserForm.get('UserCode').value,
        Password: this.createUserForm.get('Password').value,
        EmailID: this.createUserForm.get('EmailID').value,
        PhoneNo: this.createUserForm.get('PhoneNo').value,
      }).then((response: any) => {
        resolve(true);
        this.createUserForm.reset();
        this.dismiss(response);
      }).catch((erro) => {
        reject();
      })
    });
  }

  updateUser() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateUpdateLogin', {
        UserID : this.UserID,
        User: this.createUserForm.get('User').value,
        UserCode: this.createUserForm.get('UserCode').value,
        Password: this.createUserForm.get('Password').value,
        EmailID: this.createUserForm.get('EmailID').value,
        PhoneNo: this.createUserForm.get('PhoneNo').value,
      }).then((response: any) => {
        resolve(true);
        this.createUserForm.reset();
        this.dismiss(response);
      }).catch((erro) => {
        reject();
      })
    });
  }

  dismiss(event) {
    this.viewCntl.dismiss();
  }


}
