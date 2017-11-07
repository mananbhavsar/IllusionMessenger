import { Component } from '@angular/core';
import { Events, NavParams, Platform, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
  Generated class for the ChangePassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html'
})
export class ChangePasswordPage {
    changePassword: { old_password?: string, new_password?: string, confirm_password?: string } = {};
    changePasswordForm: FormGroup;
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public events: Events,
    ) {
        this.changePasswordForm = this.formBuilder.group({
            old_password: ['', Validators.required],
            new_password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(20), Validators.required])],
            confirm_password: ['', Validators.required],
        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    doChangePassword() {
        if (this.changePassword.new_password === this.changePassword.confirm_password) {
            this.viewCtrl.dismiss(this.changePassword);
        } else {
            this.events.publish('toast:create', 'Confirm Password should be same as New Password');
        }
    }

}