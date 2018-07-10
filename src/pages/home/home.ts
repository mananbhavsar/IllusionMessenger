import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';
import { TranslateService } from "@ngx-translate/core";
import firebase from 'firebase';
import { Events, IonicPage, ModalController, NavController, Platform } from 'ionic-angular';
import * as _ from 'underscore';
import { Global } from '../../app/global';
import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { GroupPage } from '../group/group';
import { DateProvider } from './../../providers/date/date';
import { FirebaseTransactionProvider } from './../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from './../../providers/notifications/notifications';
import { AddFlashPage } from './../group/add-flash/add-flash';
import { CreateTopicPage } from './../topic/create-topic/create-topic';


@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    global: any = {};
    data: any = null;
    badges: any = {};

    firebaseConnected: boolean = false;

    flashNews: Array<any> = [];
    /**
     * 0 => not connected
     * 1 => connecting
     * 2 => connected
     */
    deviceRegsiter: number = 0;
    connectedTime: string = null;

    dataFetched: boolean = false;
    tabs = [
        {
            name: 'Assigned To Me',
            icon: 'star'
        },
        {
            name: 'Created By Me',
            icon: 'people'
        },
        {
            name: 'Groups',
            icon: 'list-box'
        },
        {
            name: 'Priorty',
            icon: 'flag'
        },
        {
            name: 'All Tasks',
            icon: 'paper'
        },];
    selectedTab: string = 'star';
    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public events: Events,
        private _storage: Storage,
        private translate: TranslateService,
        private _oneSignal: OneSignal,
        private platform: Platform,
        private _date: DateProvider,
        private _network: Network,
        private modalController: ModalController,
        private notifications: NotificationsProvider,
        private _firebaseTransaction: FirebaseTransactionProvider,
    ) {
        this.global = Global;
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', () => {
            this.getData().catch(error => { });
        });

        //online offline
        if (this.platform.is('cordova')) {
            this._network.onchange().subscribe(() => {
                this.registerDevice();
            });
        }
    }

    //keep it enter only
    ionViewDidEnter() {
        //checking if logged in
        if (!_.isEmpty(this.connection.user)) {
            this.initData().catch(error => { });
        } else {
            //waiting for login
            this.events.subscribe('user:ready', (status) => {
                if (status) {
                    this.initData().catch(error => { });
                }
            });
        }
    }

    initData() {
        return new Promise((resolve, reject) => {
            this.getData().then(status => {
                if (this.firebaseConnected === false) {
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
            this.dataFetched = false;
            this.connection.doPost('Chat/GetTaskDetail', {
            }, false).then((response: any) => {
                this.dataFetched = true;
                //groups
                console.log(response);
                this.data = response;
                //flash
                // this.flashNews = response.FlashNews;

                this.registerDevice();
                resolve(true);
            }).catch(error => {
                this.flashNews = [];
                reject(error);
            })
        });
    }

    registerDevice() {
        //make device regsiter call
        if (this.platform.is('cordova')) {
            //if internet
            if (this._network.type === 'none') {
                this.deviceRegsiter = 0;
            } else {
                this.deviceRegsiter = 1;
                this._oneSignal.getIds().then((id) => {
                    this.connectToServer(id.userId);
                }).catch(error => {
                    this.deviceRegsiter = 0;
                });
            }
        }
    }

    connectToServer(pushID) {
        this.user.registerPushID(pushID).then((response: any) => {
            console.log(response);
            if (response.Data && response.Data.LastActivity) {
                this.deviceRegsiter = 2; //connected
                this.connectedTime = response.Data.LastActivity; //this will be utc
            } else {
                this.deviceRegsiter = 0;
            }
        }).catch(error => {
            this.deviceRegsiter = 0;
        });
    }

    refresh(refresher) {
        this.getData().then(status => {
            this.dataFetched = true;
            refresher.complete();
            this.connectToFireBase();
        }).catch(error => {
            refresher.complete();
        });
    }

    connectToFireBase() {
        //user setting
        this.user.getUser().then(user => {
            if (this.data.Groups_Wise) {
                let groupsTemp: any = this.data.Groups_Wise;
                groupsTemp.forEach((group, index) => {
                    let ref = firebase.database().ref('Badge/' + user.id + '/Groups/' + group.GroupCode + '/Total');
                    ref.off('value');
                    ref.on('value', (snapshot) => {
                        let total = snapshot.val();
                        if (total) {
                            this.badges[group.GroupCode] = total;
                        } else {
                            this.badges[group.GroupCode] = 0;
                        }
                    });
                });

            }
        });
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
            return this.badges[groupCode];
        }
        return false;
    }

    createTopic(group_id) {
        this.navCtrl.push(CreateTopicPage, group_id);
    }

    headerButtonClicked(event) {
        switch (event.name) {
            case 'flash':
                this.addFlash();
                break;

        }
    }

    addFlash() {
        let flashModal = this.modalController.create(AddFlashPage, {
            group_id: 0,
            group_name: null,
        });
        flashModal.onDidDismiss(data => {
            if (data) {
                this.events.publish('toast:create', data.Data.Message);
                this.notifications.sends(data.OneSignalTransaction);
                this._firebaseTransaction.doTransaction(data.FireBaseTransaction).catch(error => {

                });

                //refresh
                setTimeout(() => {
                    this.getData();
                });
            }
        });
        flashModal.present();
    }

    getSelectedTabName() {
        let selectedName = '';
        this.tabs.some(tab => {
            if (tab.icon === this.selectedTab) {
                selectedName = tab.name;
                return true;
            }
            return false;
        });
        return selectedName;
    }
}

