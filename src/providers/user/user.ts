import { Injectable } from '@angular/core';
import { Badge } from '@ionic-native/badge';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController, Events, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';
import { Global } from "../../app/global";
import { ConnectionProvider } from '../connection/connection';
import { FirebaseTransactionProvider } from "../firebase-transaction/firebase-transaction";





@Injectable()
export class UserProvider {
    _user: any = {};
    HAS_SEEN_TUTORIAL: string = 'hasSeenTutorial';
    HAS_LOGGED_IN: boolean = false;
    global: any = {};

    bye_bye_translate: string = 'Good bye see you soon';
    logging_you_in_translate: string = 'Logging you in';
    login_failed_translate: string = 'Login Failed';

    //total badge count
    totalBadgeCount: number = 0;
    constructor(
        public events: Events,
        public storage: Storage,
        public connection: ConnectionProvider,
        private _firebaseTransaction: FirebaseTransactionProvider,
        public platform: Platform,
        public alertCtrl: AlertController,
        private badge: Badge,
        private angularFireDatabase: AngularFireDatabase,
        private translate: TranslateService,
    ) {
        this.global = Global;

        this.events.subscribe('user:changed', (user) => {
            this.storage.get('User').then((user) => {
                this._user = user;
            });
        });

        this.events.subscribe('badge:set', total => {
            this.totalBadgeCount = total;
        });

        setTimeout(() => {
            this.doTranslate();
        });
    }

    doTranslate() {
        //bye bye
        this.translate.get('Common._ByeBye_').subscribe(translated => {
            this.bye_bye_translate = translated;
        });
        //Logging you in
        this.translate.get('LoginPage._LoggingYouIn_').subscribe(translated => {
            this.logging_you_in_translate = translated;
        });
        //login failed
        this.translate.get('LoginPage._LoginFailed').subscribe(translated => {
            this.login_failed_translate = translated;
        });
    }

    login(username, password) {
        this.connection.doPost('Chat/login', { UserCode: username, Password: password }, this.logging_you_in_translate + '!').then(
            response => {
                this._user = response[0];
                this.setUser(this._user).then(() => {
                    this.HAS_LOGGED_IN = true;
                    this.events.publish('user:login', this._user);
                });
            }).catch(error => {
                console.log(error);
                this.events.publish('alert:basic', this.login_failed_translate + '!', error);
            });
    };

    logout() {
        return new Promise((resolve, reject) => {
            let name = this._user.LoginUser;
            this.registerPushID('').then(response => {
                //removing from Storage
                this.storage.remove('User').then(response => {
                    this.HAS_LOGGED_IN = false;
                    this._user = null;

                    //clear badge
                    this.badge.clear();

                    this.removeOfflineData();

                    this.events.publish('badge:set', 0);
                    this.events.publish('user:logout', this.bye_bye_translate);

                    resolve('Logged out');
                }).catch(error => {
                    reject(error);
                });
            }).catch(error => {
                reject(error);
            });
        });
    };

    getUser() {
        return this.storage.get('User').then((user) => {
            return user;
        });
    };

    setUser(User) {
        //setting
        User.id = User.UserCode;
        return this.storage.set('User', User).then((user) => {
            this._user = user;
            return this._user;
        });
    };

    // return a promise
    hasLoggedIn() {
        return this.storage.get('User').then((user) => {
            return user;
        });
    };

    isLoggedIn() {
        return this.HAS_LOGGED_IN;
    }

    // return a promise
    hasTutorialSeen() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value === true;
        });
    };

    setTutorialSeen(seen) {
        return this.storage.set(this.HAS_SEEN_TUTORIAL, seen);
    }

    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        })
    };

    registerPushID(push_id) {
        return new Promise((resolve, reject) => {
            //checking if logged in
            if (!_.isEmpty(this.connection.user)) {
                //setting in connection
                this.connection.push_id = push_id;

                //sending to server
                this.connection.doPost('Chat/RegisterDevice', {
                    DeviceID: push_id,
                    IsLogin: push_id !== '',
                }, false).then((response: any) => {
                    //LogOutForcefully
                    if (response.Data.LogOutForcefully) {
                        if (response.Data.Message) {
                            this.events.publish('alert:basic', 'Logged Out!', response.Data.Message);
                        }
                        this.logout();
                        reject(false);
                    } else if (response.Data.Status === 0) {
                        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).catch(error => { })
                        reject(response.Data);
                    } else {
                        //now doing firebase transaction
                        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => {
                            resolve(response);
                        }).catch(error => {
                            if (error == 'Empty') {
                                resolve(response);
                            } else {
                                reject(error);
                            }
                        });
                    }
                }).catch(error => {
                    this.events.publish('toast:error', error);
                    reject(error);
                });
            } else {
                //waiting to logged in
                this.events.subscribe('user:ready', (user) => {
                    if (user) {
                        this.registerPushID(push_id).then(status => {
                            resolve(status);
                        }).catch(error => {
                            reject(error);
                        });
                    } else {
                        reject('Already logged out');
                    }
                });
            }
        });
    }

    doVersionCheck() {
        if (!this.platform.is('cordova')) {
            return;
        }
        let OSName = 'ios';
        if (this.platform.is('android')) {
            OSName = 'android';
        }
        this.angularFireDatabase.object('VersionOptions/' + OSName).snapshotChanges().subscribe(snapshot => {
            let allowAlertClose = snapshot.payload.val();
            this.angularFireDatabase.object('Version/' + OSName).snapshotChanges().subscribe(snapshot => {
                let AppVersion = snapshot.payload.val();
                if (AppVersion && this.global.AppVersion !== AppVersion) {
                    let buttons: Array<any> = [
                        {
                            text: 'Update Now',
                            handler: () => {
                                window.open(this.global.APP_URL[OSName], '_system');
                                return allowAlertClose;
                            }
                        }
                    ];
                    //adding cancel option
                    if (allowAlertClose) {
                        buttons.push({
                            text: 'Not now',
                            role: 'cancel'
                        });
                    }
                    let message = 'There is a new version available, kindly update your application now. <br/><br/>Note: if <b>open</b> button is present instead of <b>update</b>,';
                    if (OSName === 'android') {
                        message += ' go to <b>menu</b> of Play Store, naviagte to <b>My apps & games.</b>';
                    } else {
                        message += ' go to <b>updates tab</b> of App Store, <b>pull down refresh.</b>';
                    }

                    let alert = this.alertCtrl.create({
                        // enableBackdropDismiss: allowAlertClose,
                        title: 'Version Update Available',
                        message: message,
                        buttons: buttons
                    });
                    alert.present();
                }
            });
        });
    }

    isMultipleOffice() {
        console.log(this._user);
    }

    removeOfflineData() {
        //Removing Offline Data
        this.storage.remove('OfflineDashboard');
        this.storage.remove('OfflineHome');
        this.storage.remove('OfflineOfficeList');
        this.storage.remove('OfflineCaseStatus');
        this.storage.remove('OfflineQuery');
        this.storage.get('OfflineTickets').then((tickets: any) => {
            if (_.isEmpty(tickets)) {
                tickets = {};
            }
            for (let ticket in tickets) {
                this.storage.remove('OfflineMessages-' + ticket);
            }
        });
        this.storage.remove('OfflineChallans');
        this.storage.remove('OfflineInvoice');
        this.storage.remove('OfflinePayments');

    }

}
