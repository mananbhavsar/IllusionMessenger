import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
import { TranslateService } from "@ngx-translate/core";
import firebase from 'firebase';
import { ActionSheetController, Events, IonicPage, ModalController, NavController, Platform, reorderArray } from 'ionic-angular';
import * as _ from 'underscore';
import { Global } from '../../app/global';
import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { GroupPage } from '../group/group';
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
    title: string = 'Home';
    global: any = {};
    data: any = null;
    badges: any = {};

    firebaseConnected: boolean = false;

    flashNews: Array<any> = [];
    reorder: boolean = false;
    /**
     * 0 => not connected
     * 1 => connecting
     * 2 => connected
     */
    deviceRegsiter: number = 0;
    page: number = 0;
    connectedTime: string = null;
    sort_by: string = '';
    sort_order: string = '';
    group_reorder: any = [];
    dataFetched: boolean = false;
    selectedGroup: any = [];
    tabs = [
        {
            name: 'Task due in days',
            icon: 'stats',
            key: 'Task_due_in_days',
        },
        {
            name: 'Assigned To Me',
            icon: 'star',
            key: 'Assigned_To_Me',
        },
        {
            name: 'Created By Me',
            icon: 'people',
            key: 'Created_By_Me'
        },
        {
            name: 'Groups',
            icon: 'list-box',
            key: 'Groups_Wise'
        },
        {
            name: 'Priority',
            icon: 'flag',
            key: 'Priority'
        },
        {
            name: 'All Tasks',
            icon: 'paper',
            key: 'Topic_Wise'
        },];
    selectedTab: string = 'stats';
    readOptions: boolean = false;
    selectedTopic: Array<any> = [];
    readAllSelected: boolean = true;
    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public events: Events,
        private translate: TranslateService,
        private _oneSignal: OneSignal,
        private platform: Platform,
        private _network: Network,
        private modalController: ModalController,
        private notifications: NotificationsProvider,
        private _firebaseTransaction: FirebaseTransactionProvider,
        public actionSheetController: ActionSheetController,
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

    ionViewDidLeave() {
        if (this.selectedGroup.length > 0) {
            this.selectedGroup = [];
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
            this.dataFetched = _.size(this.data) > 0;
            this.connection.doPost('Chat/GetTaskDetail', {
                PageNumber: this.page,
                RowsPerPage: 100,
                Query: '',
                OrderBy: this.sort_by,
                Order: this.sort_order,
            }, false).then((response: any) => {
                this.dataFetched = true;
                //groups
                this.data = response;
                console.log(this.data);
                //flash
                if (response.FlashNews) {
                    this.flashNews = response.FlashNews;
                }

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
        //if internet
        if (this._network.type === 'none') {
            this.deviceRegsiter = 0;
        } else if (this.platform.is('core')) {
            if (this.connection.getPushID()) {
                this.connectToServer(this.connection.push_id);
            } else {
                this.events.subscribe('pushid:created', (userId) => {
                    this.connectToServer(userId);
                });
                //wait 15sec and check again for user id
                setTimeout(() => {
                    let OneSignal = window['OneSignal'] || [];
                    let that = this;
                    OneSignal.push(function () {
                        OneSignal.getUserId(function (userId: string) {
                            if (userId) {
                                that.connectToServer(userId);
                            }
                        });
                    });
                });
            }
        } else if (this.platform.is('cordova')) {
            this.deviceRegsiter = 1;
            this._oneSignal.getIds().then((id) => {
                this.connectToServer(id.userId);
            }).catch(error => {
                this.deviceRegsiter = 0;
            });
        }
    }

    connectToServer(pushID) {
        this.user.registerPushID(pushID, true).then((response: any) => {
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
        this.page = 0;
        this.getData().then(status => {
            this.dataFetched = true;
            this.selectedTopic = [];
            this.selectedGroup = [];
            this.readAllSelected = true;
            this.readOptions = false;
            this.group_reorder = [];
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

    openReadOptions() {
        if (this.readOptions) {
            this.readOptions = false;
            this.selectedTopic = [];
            this.selectedGroup = [];
            this.readAllSelected = true;
        } else {
            this.readOptions = true;
        }
        if (this.selectedTopic.length !== 0) {
            this.readAllSelected = false;
        }
    }

    checkedTopic(event) {
        if (event.checked) {
            if (this.selectedTopic.indexOf(event.TopicCode) === -1) {
                this.selectedTopic.push(event.TopicCode);
                this.readAllSelected = false;
            }
        } else {
            if (this.selectedTopic.indexOf(event.TopicCode) > -1) {
                this.selectedTopic.splice(this.selectedTopic.indexOf(event.TopicCode), 1);
            }
        }
        if (this.selectedGroup.length === 0 && this.selectedTopic.length === 0) {
            this.readAllSelected = true;
        }
    }

    readSelected() {
        this.connection.doPost('Chat/ReadAll', {
            ReadAll: false,
            GroupCode: this.selectedGroup.map(GroupCode => GroupCode.GroupCode),
            TopicCode: this.selectedTopic.toString(),
        }, false).then((response: any) => {
            if (response) {
                this.getData();
                this.selectedTopic = [];
                this.selectedGroup = [];
                this.readAllSelected = true;
                this.readOptions = false;
                if (response.FireBaseTransaction) {
                    this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
                }
            }
        }).catch((error) => {
        });
    }


    readAll() {
        return new Promise((resolve, reject) => {
            this.connection.doPost('Chat/ReadAll', {
                ReadAll: true
            }, false).then((response: any) => {
                if (response) {
                    this.getData();
                    this.selectedTopic = [];
                    this.selectedGroup = [];
                    this.readAllSelected = true;
                    this.readOptions = false;
                    if (response.FireBaseTransaction) {
                        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
                    }
                    resolve(response);
                }
            }).catch((error) => {
                reject();
            });
        });
    }

    readMessage(ev, group) {
        group.IsRead = ev.checked;
        if (ev.checked) {
            if (this.selectedGroup.indexOf(this.selectedGroup.GroupCode) === -1) {
                this.selectedGroup.push({
                    checked: group.IsRead,
                    GroupCode: group.GroupCode,
                });
                this.readAllSelected = false;
            }
        } else {
            this.selectedGroup.splice(this.selectedGroup.indexOf(this.selectedGroup.GroupCode), 1);
        }

        if (this.selectedGroup.length === 0 && this.selectedTopic.length === 0) {
            this.readAllSelected = true;
        }
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
            case 'sort':
                this.openSortOptions();
                break;
        }
    }

    addFlash() {
        let flashModal = this.modalController.create(AddFlashPage, {
            group_id: 0,
            group_name: null,
        });
        flashModal.onDidDismiss(data => {
            this.setTitle();
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

    isGroupSelected() {
        if (this.getSelectedTabName() === 'Groups') {
            return true;
        }
        return false;
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

    getUnreadCount() {
        let field = 'Topic_Wise' + '_Count';
        if (this.data) {
            if (field in this.data) {
                if (this.data[field] > 0) {
                    return true;
                }
                return false;
            }
        }
        return false;

    }

    getTabBadgeCount(key) {
        let selectedBadgeCount: any = 0;
        let field = key + '_Count';
        if (field in this.data) {
            selectedBadgeCount = this.data[field];
        }
        if (selectedBadgeCount > 100) {
            selectedBadgeCount = '100+';
        }
        return selectedBadgeCount;
    }

    getSelectedTabRowsCount() {
        let selectedRowsCount: any = 'NA';

        this.tabs.some(tab => {
            if (tab.icon === this.selectedTab) {
                selectedRowsCount = this.getTabRowsCount(tab.key);
                return true;
            }
            return false;
        });
        return selectedRowsCount;
    }

    getTabRowsCount(tab_key) {
        let selectedRowsCount: any = 0;

        if (this.data) {
            selectedRowsCount = _.size(this.data[tab_key]);
        }
        return selectedRowsCount;
    }

    reorderItems(indexes) {
        this.data.Groups_Wise = reorderArray(this.data.Groups_Wise, indexes);
        for (let i = 0; i < this.data.Groups_Wise.length; i++) {
            this.group_reorder.push({ 'OrderIndex': i, 'GroupID': this.data.Groups_Wise[i].GroupID });
        }
        this.connection.doPost('chat/MyGroupOrder', {
            OrderIndex: this.group_reorder.map(order => order.OrderIndex),
            GroupID: this.group_reorder.map(groupId => groupId.GroupID)
        }, false).then((response: any) => {
            if (response) {
                this.group_reorder = [];
            }
        }).catch((error) => {
        });

    }

    reorderGroups() {
        if (this.reorder) {
            this.reorder = false;
        } else {
            this.reorder = true;
        }
    }

    openSortOptions() {
        //creating buttons
        let buttons = [];
        let sortingOptions = {
            'CreationDate': 'Creation Date',
            'DueDate': 'Due Date'
        };
        for (let key in sortingOptions) {
            let label = sortingOptions[key];
            let icon = null;
            if (key === this.sort_by) {
                icon = this.sort_order === 'ASC' ? 'ios-arrow-round-up-outline' : 'ios-arrow-round-down-outline';
            }
            buttons.push({
                text: label,
                icon: icon,
                handler: () => {
                    //if not selected initially, making it desc so it could be reversed later
                    if (this.sort_by !== key) {
                        this.sort_order = 'DESC';
                    }
                    this.sort_by = key;
                    this.sort_order = this.sort_order === 'ASC' ? 'DESC' : 'ASC';
                    this.doSorting();
                }
            });
        }

        //cancel button
        buttons.push({
            text: 'Cancel',
            role: 'cancel',
        });
        //creating action sheet
        let sortActionSheet = this.actionSheetController.create({
            title: 'Select sort options',
            buttons: buttons
        });
        sortActionSheet.present();
    }

    doSorting() {
        this.page = 0;
        this.data = [];
        this.getData();
    }

    setTitle() {
        this.title = null;
        setTimeout(() => {
            this.title = 'Home';
        });
    }

    getTitle() {
        return this.title;
    }
}