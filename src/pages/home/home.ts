import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { Global } from '../../app/global';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    global: any;
    data: any;
    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public events: Events,
    ) {
        this.global = Global;
    }

    ionViewDidLoad() {
        //checking if logged in
        this.user.hasLoggedIn().then((user) => {
            //yes
            if (user) {
                this.initData(null, false);
            } else {
                //waiting for login
                this.events.subscribe('user:postLogin', (status) => {
                    if (status) {
                        this.initData(null, false);
                    }
                });
            }
        });
    }

    initData(event, refresh) {
        this.connection.doPost('Dashboard/index', {}).subscribe(response => {
            this.data = response;
            console.log(this.data);
            this.data = -1;
            this.markRefresherComplete(event);
        }, error => {
            this.data = -1;
            this.markRefresherComplete(event);
        });
    }

    markRefresherComplete(refresher) {
        if (refresher) {
            refresher.complete();
        }
    }

}
