import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../providers/connection/connection';


@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  createUserForm: FormGroup;
  title: string = 'Create User';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider
  ) {

    this.createUserForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      user_code: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    });
  }


  createUser() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateNewUser', {
        User: this.createUserForm.get('user_name').value,
        UserCode: this.createUserForm.get('user_code').value,
        password: this.createUserForm.get('password').value,
        EmailID: this.createUserForm.get('email').value,
        PohneNo: this.createUserForm.get('mobile_number').value,
      }).then((response: any) => {

      }).catch((erro) => {

      })
    });
  }


}
