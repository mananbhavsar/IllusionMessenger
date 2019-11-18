import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events, IonicPage, ModalController, NavController } from 'ionic-angular';
import { Global } from '../../app/global';
import { UserProvider } from '../../providers/user/user';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';




@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;
    submitted = false;
    global: any = {};
    eye_icon: string = 'eye-off';
    passwordtType: string = 'password';
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
    }

    doLogin() {
        this.user.login(this.loginForm.value.login_name, this.loginForm.value.password);
    }

    togglePassword(event) {
        event.preventDefault();
        if (this.passwordtType === 'password') {
            this.passwordtType = 'text';
            this.eye_icon = 'eye';
        } else if (this.passwordtType === 'text') {
            this.passwordtType = 'password';
            this.eye_icon = 'eye-off';
        }
    }
}
