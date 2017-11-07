import { Component } from '@angular/core';
import { IonicPage, NavController, Events, ModalController } from 'ionic-angular';

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
    login: { username?: string, password?: string } = {};
    submitted = false;
    global: any = {};
    constructor(
        public navCtrl: NavController,
        public user: UserProvider,
        public events: Events,
        public modalCtrl: ModalController,
    ) {
        this.global = Global;
    }

    onForgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

    onRegister() {
        this.navCtrl.push(RegisterPage);
    }

    doLogin() {
        this.user.login(this.login.username, this.login.password);
    }
}
