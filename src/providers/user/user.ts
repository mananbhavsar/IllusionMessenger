import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { ConnectionProvider } from '../connection/connection';

@Injectable()
export class UserProvider {

    HAS_SEEN_TUTORIAL: string = 'hasSeenTutorial';
    HAS_LOGGED_IN: boolean = false;
    constructor(
        public events: Events,
        public storage: Storage,
        public connection: ConnectionProvider,
    ) {

    }

    login(email, password) {
        this.connection.doPost('JobSeekers/login', { email_address: email, password: password }).subscribe(
            response => {
                if (response.flash === 'success') {
                    this.setUser(response.JobSeeker).then(() => {
                        this.HAS_LOGGED_IN = true;
                        this.events.publish('user:login', response.JobSeeker);
                    });
                } else {
                    this.events.publish('loading:close');
                    this.events.publish('alert:basic', 'Login Failed', response.message);
                }
            },
            error => {
                console.log(error);
            }
        );
    };

    logout() {
        this.HAS_LOGGED_IN = false;
        this.storage.remove('User');
        this.events.publish('user:logout');
        this.connection.doPost('ClientsUsers/logout', {});
    };

    getUser() {
        return this.storage.get('User').then((user) => {
            return user;
        });
    };

    setUser(User) {
        return this.storage.set('User', User).then((user) => {
            this.events.publish('user:changed');
            return user;
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
        this.connection.doPost('ClientsUsers/registerPush', { push_id: push_id });
    }

}
