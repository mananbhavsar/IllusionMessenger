import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { Global } from '../../app/global';

import { CommunicationPage } from "../communication/communication";
import { DashboardPage } from "../dashboard/dashboard";
import { OfficeListPage } from "../office-list/office-list";
import { PickupPage } from "../pickup/pickup";
import { CaseStatusPage } from "../case-status/case-status";
import { ChatPage } from "../chat/chat";

import * as _ from 'underscore';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    global: any = {};
    data: any = {
        CaseSearchCount: 0,
        CommunicationCount: 0,
        PickUpCount: 0,
        Total: 0,
    };
    loginType: Number = 0;
    isDentalLogin: Boolean = false;
    isNormalLogin: Boolean = false;

    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public events: Events,
        public angularFireDatabase: AngularFireDatabase,
    ) {
        this.global = Global;
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', () => {
            this.initData(null, false);
        });
    }

    ionViewDidLoad() {
        //checking if logged in
        if (!_.isEmpty(this.connection.user)) {
            this.initData(null, false);
        } else {
            //waiting for login
            this.events.subscribe('user:ready', (status) => {
                if (status) {
                    this.initData(null, false);
                }
            });
        }
    }

    initData(event, refresh) {
        //user setting
        this.user.getUser().then(user => {
            this.loginType = user.LoginTypeID;
            if (this.loginType === 3) {
                this.isDentalLogin = true;
            } else {
                this.isNormalLogin = true;
            }
            this.connectToFireBase(user.id);
            this.markRefresherComplete(event);
        });


        //old way remove in next version
        //getting Data
        // this.connection.doPost('Dashboard/GetNotificationCount', {}, false).then(response => {
        //     this.data = response;
        //     this.markRefresherComplete(event);
        // }).catch(error => {
        //     this.data = -1;
        //     this.markRefresherComplete(event);
        // });
    }

    markRefresherComplete(refresher) {
        if (refresher) {
            refresher.complete();
        }
    }

    connectToFireBase(user_id) {
        this.angularFireDatabase.object('Badge/' + user_id).snapshotChanges().subscribe(snapshot => {
            snapshot = snapshot.payload.val();
            if (snapshot) {
                this.data = snapshot;
            }
        });
    }

    openDashboard() {
        this.navCtrl.push(DashboardPage);
    }

    openPickup() {
        this.navCtrl.push(PickupPage);
    }

    openCaseSearch() {
        this.navCtrl.push(CaseStatusPage);
    }

    openCommunications() {
        this.navCtrl.push(CommunicationPage);
    }

    openOfficeList() {

    }

    openChat(ticket: string = 'TR-24282-GJ') {
        this.navCtrl.push(ChatPage, ticket);
    }
}
