import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginPage } from "../login/login";

import { ConnectionProvider } from '../../providers/connection/connection';
@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  ForgotPassword: { full_name?: string} = {};
  forgotPasswordForm: FormGroup;
  global: any = {};

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email_address: ['', Validators.required],
    });
  }


  doForgotPassword() {
    this.events.publish('loading:create', 'resetting password');
    this.connection.doPost('JobSeekers/forgot_password', this.ForgotPassword).subscribe(response => {
      this.events.publish('loading:close');
      this.events.publish('alert:basic', response.title, response.message);
      this.navCtrl.push(LoginPage);
    }, error => {
      this.events.publish('loading:close');
      this.events.publish('toast:error', error);
    });
  }

}
