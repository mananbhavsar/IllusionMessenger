import { Component } from '@angular/core';
import { IonicPage, NavController, Events, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { RegisterPage } from '../register/register';

import { UserProvider } from '../../providers/user/user';

import { Global } from '../../app/global';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    submitted = false;
    global: any = {};
    constructor(
        public navCtrl: NavController,
        public user: UserProvider,
        public events: Events,
        public formBuilder: FormBuilder,
        public modalCtrl: ModalController,
    ) {
        this.global = Global;
        this.loginForm = this.formBuilder.group({
            login_name: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onForgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

    onRegister() {
        this.navCtrl.push(RegisterPage);
    }

    doLogin() {
        this.user.login(this.loginForm.value.login_name, this.loginForm.value.password);
    }
}
