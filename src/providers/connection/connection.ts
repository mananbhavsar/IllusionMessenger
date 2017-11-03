import { Injectable, Inject, forwardRef } from '@angular/core';
import { Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Global } from '../../app/global';
import { Device } from '@ionic-native/device';

@Injectable()
export class ConnectionProvider {
    user: any = {};
    headers: Headers;
    constructor(
        public http: Http,
        public storage: Storage,
        public events: Events,
        public network: Network,
        public platform: Platform,
        public device: Device,

    ) {
        this.events.subscribe('user:changed', (user) => {
            this.storage.get('User').then((user) => {
                this.user = user;
                this.events.publish('user:ready', user);
            });
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    /**
     * 
     * @param url relative URL to connect
     * @param params paramst to send
     * @param loader loader message to show or false if no loading
     */
    doPost(url, params: any = {}, loader: any = true) {
        return new Promise((resolve, reject) => {
            //checking if Network availble
            if (this.network.type === 'none') {
                reject('Please check your network connection');
            }
            //if need to show loader
            if (loader) {
                if (loader === true) {
                    loader = 'loading';
                }
                this.events.publish('loading:create', loader);
            }
            //creating request
            let urlSearchParams = this.getURLSearchParams(params);

            this.http.post(Global.SERVER_URL + url, urlSearchParams).map((response: Response) => response.json()).subscribe((data) => {
                if (loader) {
                    this.events.publish('loading:close');
                }
                //Checking for Error Code
                switch (parseInt(data.ErrorCode)) {
                    case 0:
                        resolve(JSON.parse(data.objData));
                        break;
                    case 2:
                        this.events.publish("user:unautharized");
                        reject(data.DisplayMessage);
                        break;
                    default:
                        reject(data.DisplayMessage);
                        break;
                }
            }, (error) => {
                if (loader) {
                    this.events.publish('loading:close');
                }
                this.events.publish('toast:error', error);
                reject(error);
            })
        });


    }

    getURLSearchParams(params): URLSearchParams {
        let urlSearchParams = new URLSearchParams();
        for (let key in params) {
            urlSearchParams.append(key, params[key]);
        }
        //device specific info
        urlSearchParams.append('Device', this.device.platform);
        urlSearchParams.append('OSVersion', this.device.version);
        urlSearchParams.append('Manufacturer', this.device.manufacturer);
        urlSearchParams.append('AppVersion', Global.AppVersion);
        //adding user info
        if (this.user) {
            urlSearchParams = this.addUserInfo(urlSearchParams);
        }
        return urlSearchParams;
    }

    doGet(url, data: any) {

        return this.http.get(Global.SERVER_URL + url).map((response: Response) => response.json());

    }

    addUserInfo(urlSearchParams: URLSearchParams): URLSearchParams {
        urlSearchParams.append('UserCode', this.user.UserCode);
        urlSearchParams.append('CustomerID', this.user.CustomerID);
        urlSearchParams.append('SecureToken', this.user.SecureToken);
        urlSearchParams.append('OrganizationUnitID', this.user.LoginOUID);
        urlSearchParams.append('LoginTypeID', this.user.LoginTypeID);
        urlSearchParams.append('LoginUserID', this.user.CustomerPortalID);
        return urlSearchParams
    }
}
