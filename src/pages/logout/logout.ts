import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
    selector: 'page-logout',
    templateUrl: 'logout.html',
})
export class LogoutPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public user: UserProvider,
    ) {

    }

    ionViewDidLoad() {
        this.user.logout().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

}
