import { Component, group } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { TranslateService } from "@ngx-translate/core";
import { OneSignal } from '@ionic-native/onesignal';
import { Global } from '../../app/global';
import { ChatPage } from "../chat/chat";
import { Storage } from '@ionic/storage';

import { CreateTopicPage } from './../topic/create-topic/create-topic';
import * as _ from 'underscore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Transition } from 'ionic-angular/transitions/transition';
import { GroupPage } from '../group/group';
import * as  moment from "moment";
import { locale } from 'moment';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    global: any = {};
    groups: Array<any> | -1 = [];
    badges: any = {};
    firebaseConnected: boolean = false;
    
    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public events: Events,
        public angularFireDatabase: AngularFireDatabase,
        private _storage: Storage,
        private translate: TranslateService,
        private _oneSignal: OneSignal,
        private platform: Platform,
    ) {
        this.global = Global;
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', () => {
            this.getData().catch(error => { });
        });
    }

    ionViewDidLoad() {
        //checking if logged in
        if (!_.isEmpty(this.connection.user)) {
            this.initData();
        } else {
            //waiting for login
            this.events.subscribe('user:ready', (status) => {
                if (status) {
                    this.initData().catch(error => { });
                }
            });
        }
    }

    ionViewDidEnter() {
        if (this.platform.is('cordova')) {
            setTimeout(() => {
                this._oneSignal.getIds().then((id) => {
                    //updating user ID
                    this.user.registerPushID(id.userId);
                });
            });
        }
        //this.dateStatus(null);
    }

    initData() {
        return new Promise((resolve, reject) => {
            this.getData().then(status => {
                if(this.firebaseConnected === false){
                    this.connectToFireBase();
                    this.firebaseConnected = true;
                }
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        });
    }

    getData() {
        return new Promise((resolve, reject) => {
            this.connection.doPost('Chat/Home', {
                UserCode: this.connection.user.UserCode,                
            }).then((groups: Array<any>) => {
                this.groups = groups;                  
                 if (groups.length === 0) {
                    this.groups = -1;
                }
                resolve(true);
            }).catch(error => {
                this.groups = -1;
                reject(error);
            })
        });
    }

    refresh(refresher) {
        this.getData().then(status => {
            refresher.complete();
        }).catch(error => {
            refresher.complete();
        });
    }

    connectToFireBase() {
        //user setting
        this.user.getUser().then(user => {
            this.angularFireDatabase.object('Badge/' + user.id + '/Groups').snapshotChanges().subscribe(snapshot => {
                snapshot = snapshot.payload.val();
                if (!_.isEmpty(snapshot)) {
                    this.badges = snapshot;
                } else {
                }
            });
        });
    }

    registerDevice(id) {
        this.user.registerPushID(id);
    }

    useLang(lang) {
        this.translate.use(lang);
        this.user.registerPushID('123456');
    }

    openGroup(GroupID, Group) {
        this.navCtrl.push(GroupPage, { GroupID, Group });
    }

    getBadge(groupCode) {
        if (groupCode in this.badges) {
            return this.badges[groupCode].Total;
        }
        return false;
    }

    createTopic(group_id) {
        this.navCtrl.push(CreateTopicPage, group_id);
    }
}
