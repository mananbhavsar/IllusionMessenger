import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Global } from '../../app/global';


@Injectable()
export class ConnectionProvider {
    user: any;
    constructor(
        public http: Http,
        public storage: Storage,
        public events: Events,
    ) {
        this.events.subscribe('user:changed', (user) => {
            this.storage.get('User').then((user) => {
                this.user = user;
            });
        });
        this.events.publish('user:changed');
    }

    doPost(url, data: any) {
        //adding user info
        if (this.user) {
            data = Object.assign({}, data, {
                job_seeker_id: this.user.id,
            });
        }
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(Global.SERVER_URL + url, JSON.stringify(data), headers).map((response: Response) => response.json());

    }

    doGet(url, data: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(Global.SERVER_URL + url, headers).map((response: Response) => response.json());

    }
}
