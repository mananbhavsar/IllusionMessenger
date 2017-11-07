import { Component } from '@angular/core';
import { IonicPage, NavController, Events, ViewController, ModalController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';

import { ChangePasswordPage } from '../change-password/change-password';
import { EditProfilePage } from "../edit-profile/edit-profile";

import { Global } from '../../app/global';

@IonicPage()
@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {
    user: any = null;
    client: string = null;
    global: any = null;
    data: any = {};
    constructor(
        public navCtrl: NavController,
        private _user: UserProvider,
        public modalCtrl: ModalController,
        public connection: ConnectionProvider,
        public viewCtrl: ViewController,
        public events: Events,
    ) {
        this.global = Global;


    }
    
}
