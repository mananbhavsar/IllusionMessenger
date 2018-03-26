import { Injectable, Inject, forwardRef } from '@angular/core';
import { Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import * as _ from 'underscore';
import * as firebase from 'firebase';

import { TranslateService } from "@ngx-translate/core";

import { Global } from '../../app/global';

import { Device } from '@ionic-native/device';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Injectable()
export class ConnectionProvider {
    user: any = {};
    headers: Headers;
    uuid: string;
    push_id: string = null;

    loading_translate: string = 'loading';
    please_check_internet_connection: string = 'Please check your network connection';

    URL:string = null;
    constructor(
        public http: Http,
        public storage: Storage,
        public events: Events,
        public network: Network,
        public platform: Platform,
        public device: Device,
        private uniqueDeviceID: UniqueDeviceID,
        private translate: TranslateService,
    ) {
        this.URL = Global.SERVER_URL;

        this.events.subscribe('user:changed', (user) => {
            this.storage.get('User').then((user) => {
                this.user = user;
                this.events.publish('user:ready', user);
            });
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });

        //device id
        platform.ready().then(() => {
            if (platform.is('cordova')) {
                this.uniqueDeviceID.get()
                    .then((uuid: any) => {
                        this.uuid = uuid;
                    })
                    .catch((error: any) => console.log(error));
            }
            this.doTranslate();


            //url from  firebase
            firebase.database().ref('Settings/URL').on('value', snapshot=>{
                let url = snapshot.val();
                if(url){
                    this.URL = url;
                }
            });
        });
    }

    doTranslate() {
        //loading
        this.translate.get('Common._Loading_').subscribe(translated => {
            this.loading_translate = translated;
        });
        //please check 
        this.translate.get('Common._CheckInternetConnection_').subscribe(translated => {
            this.please_check_internet_connection = translated;
        });
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
                reject(this.please_check_internet_connection);
                return;
            }
            //if need to show loader
            if (loader) {
                if (loader === true) {
                    loader = this.loading_translate;
                }
                this.events.publish('loading:create', loader);
            }
            //creating request
            let urlSearchParams = this.getURLSearchParams(params);
            this.http.post(this.URL + url, urlSearchParams).timeout(60000).map((response: Response) => response.json()).subscribe((data) => {
                if (loader) {
                    this.events.publish('loading:close');
                }
                //Checking for Error Code
                switch (parseInt(data.ErrorCode)) {
                    case 0:
                    if (data.objData.trim() === '') {
                       data.objData = data.objData.trim();
                    } else {
                           try{
                                data.objData = JSON.parse(data.objData);
                              }catch(error){
                            //trying to remove extra last comma
                            if(error.toString().indexOf('Unexpected token } in JSON') > -1){
                                try{
                                    data.objData=JSON.parse(data.objData.replace(',}','}'));
                                }
                                catch(error){
                                     reject('Invalid JSON Format');
                                     break;
                                    }
                                } 
                            }
                        }
                        resolve(data.objData);
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
                //checking for timeout
                if (typeof error === 'object' && ('name' in error) && error.name === 'TimeoutError') {
                    error = error.message;
                }
                console.log(error);
                this.events.publish('toast:error', error);
                reject(error);
            });
        });


    }

    getURLSearchParams(params): URLSearchParams {
        let urlSearchParams = new URLSearchParams();
        for (let key in params) {
            urlSearchParams.append(key, params[key]);
        }
        //device specific info
        urlSearchParams.append('UniqueID', this.uuid);
        urlSearchParams.append('Device', this.device.platform);
        urlSearchParams.append('OSVersion', this.device.version);
        urlSearchParams.append('Manufacturer', this.device.manufacturer);
        urlSearchParams.append('AppVersion', Global.AppVersion);
        //adding user info
        if (this.user || !_.isEmpty(this.user)) {
            urlSearchParams = this.addUserInfo(urlSearchParams);
        }
        return urlSearchParams;
    }

    doGet(url, data: any) {

        return this.http.get(this.URL + url).map((response: Response) => response.json());

    }

    addUserInfo(urlSearchParams: URLSearchParams): URLSearchParams {
        urlSearchParams.append('LoginUserID', this.user.LoginUserID);
        urlSearchParams.append('PushID', this.push_id);
        return urlSearchParams
    }
}
