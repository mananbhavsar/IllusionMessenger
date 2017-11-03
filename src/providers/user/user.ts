import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events, Platform, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { ConnectionProvider } from '../connection/connection';
import { OfficeServiceProvider } from '../office-service/office-service';

import { Global } from "../../app/global";

import { OneSignal } from '@ionic-native/onesignal';
import { Badge } from '@ionic-native/badge';

@Injectable()
export class UserProvider {
    _user: any = {};
    HAS_SEEN_TUTORIAL: string = 'hasSeenTutorial';
    HAS_LOGGED_IN: boolean = false;
    global: any = {};
    constructor(
        public events: Events,
        public storage: Storage,
        public connection: ConnectionProvider,
        public platform: Platform,
        public alertCtrl: AlertController,
        public officeList: OfficeServiceProvider,
        private oneSignal: OneSignal,
        private badge: Badge
    ) {
        this.global = Global;

        this.events.subscribe('user:changed', (user) => {
            this.storage.get('User').then((user) => {
                this._user = user;
            });
        });
    }

    login(username, password) {
        this.connection.doPost('Account/login', { UserCode: username, Password: password }, 'Logging you in!').then(
            response => {
                this._user = response;
                this.setUser(this._user).then(() => {
                    this.HAS_LOGGED_IN = true;
                    this.events.publish('user:login', this._user);
                });
            }).catch(error => {
                this.events.publish('alert:basic', 'Login Failed!', error);
            });
    };

    logout() {
        return new Promise((resolve, reject) => {
            let name = this._user.Customer;
            this.registerPushID('').then(response => {
                //removing from Storage
                this.storage.remove('User').then(response => {
                    this.HAS_LOGGED_IN = false;
                    this._user = null;

                    //one signal deregister
                    this.oneSignal.setSubscription(false);

                    //clear badge
                    this.badge.clear();

                    this.events.publish('user:logout', 'Bye Bye ' + name + '. See you soon!');


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
        User.id = User.CustomerPortalID + '-' + User.LoginTypeID;
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
            this.connection.doPost('Account/RegisterDevice', {
                DeviceID: push_id,
                IsLogin: push_id !== '',
            }, false).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
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
        this.connection.doPost('Account/GetMobileOSVersion', { OSName: OSName }, false).then(AppVersion => {
            if (this.global.AppVersion !== AppVersion) {
                let alert = this.alertCtrl.create({
                    title: 'Version Update Available',
                    message: 'There is a version update please update your application',
                    buttons: [
                        {
                            text: 'NO',
                        },
                        {
                            text: 'YES',
                            handler: () => {
                                window.open(this.global.APP_URL[OSName]);
                            }
                        }
                    ]
                });
                alert.present();
            }
        });
    }

    isMultipleOffice() {
        console.log(this._user);
    }

}
