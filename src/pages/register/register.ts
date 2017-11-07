import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginPage } from "../login/login";

import { ConnectionProvider } from '../../providers/connection/connection';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  register: { full_name?: string, contact_number?: string, email_address?: string, password?: string, confirm_password?: string } = {};
  registerForm: FormGroup;
  global: any = {};

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
  ) {
    this.registerForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      contact_number: ['', Validators.required],
      email_address: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }


  doRegister() {
    this.connection.doPost('JobSeekers/register', this.register).then(response => {
      this.navCtrl.push(LoginPage);
    });
  }

}
