import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
import * as firebase from 'firebase';
import { ActionSheetController, Events, IonicPage, ModalController, NavController, Platform, reorderArray } from 'ionic-angular';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { Global } from '../../app/global';
import { ConnectionProvider } from '../../providers/connection/connection';
import { FlashNewsProvider } from '../../providers/flash-news/flash-news';
import { ReadMessageProvider } from '../../providers/read-message/read-message';
import { TranslateServiceProvider } from '../../providers/translate-service/translate-service';
import { UserProvider } from '../../providers/user/user';
import { CreateTagPage } from '../create-tag/create-tag';
import { CreateUserPage } from '../create-user/create-user';
import { GroupPage } from '../group/group';
import { CreateGroupPage } from '../manage-group/create-group/create-group';
import { FirebaseTransactionProvider } from './../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from './../../providers/notifications/notifications';
import { AddFlashPage } from './../group/add-flash/add-flash';
import { CreateTopicPage } from './../topic/create-topic/create-topic';
import { OfflineStorageProvider } from '../../providers/offline-storage/offline-storage';

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
    query: any = null;
    searchInputBtn: boolean = false;
    firebaseConnected: boolean = false;
    buttons: any = [];
    flashNews: Array<any> = [];
    reorder: boolean = false;
    message: any;
    hideRefresher: boolean = true;
    /**
     * 0 => not connected
     * 1 => connecting
     * 2 => connected
     */
    deviceRegsiter: number = 0;
    page: number = 0;
    hasInternet = true;
    connectedTime: string = null;
    sort_by: string = '';
    sort_order: string = '';

    dataFetched: boolean = false;
    selectedGroup: any = [];
    tabs = [
        {
            name: 'Task due in days',
            icon: 'stats',
            key: 'stats',
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
        },
        {
            name: 'Archived Topics',
            icon: 'md-archive',
            key: 'Archive_Topics_Wise'
        }];

    selectedTab: string = 'stats';
    readOptions: boolean = false;
    selectedTopic: Array<any> = [];
    readAllSelected: boolean = true;
    constructor(
        public navCtrl: NavController,
        public connection: ConnectionProvider,
        public user: UserProvider,
        public read: ReadMessageProvider,
        public events: Events,
        private translate: TranslateServiceProvider,
        public flashNewsProvider: FlashNewsProvider,
        private _oneSignal: OneSignal,
        private platform: Platform,
        private _network: Network,
        private storage: Storage,
        public _offlineStorage: OfflineStorageProvider,
        private modalController: ModalController,
        private notifications: NotificationsProvider,
        private _firebaseTransaction: FirebaseTransactionProvider,
        public actionSheetController: ActionSheetController,
    ) {
        this.global = Global;
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', () => {
            this.getData(false).catch(error => { });
        });

        this.events.subscribe('read:message', (response: any) => {
            if (response) {
                this.getData(false);
            }
        });

        this.events.subscribe('priority:set', (data) => {
            this.getData(true).catch(error => { });
        });

        this.events.subscribe('dashboard:close', (dashboard) => {
            this.setTitle();
        });

        //online offline
        if (this.platform.is('cordova')) {
            this._network.onchange().subscribe(() => {
                this.registerDevice(false);
            });
        }
    }


    //keep it enter only
    ionViewDidEnter() {
        //checking if logged in
        if (!_.isEmpty(this.connection.user)) {
            this.initData(false).catch(error => { });
        } else {
            //waiting for login
            this.events.subscribe('user:ready', (status) => {
                if (status) {
                    this.initData(false).catch(error => { });
                }
            });
        }
    }

    ionViewDidLeave() {
        if (this.selectedGroup.length > 0) {
            this.selectedGroup = [];
        }
    }

    initData(isPullDown) {
        return new Promise((resolve, reject) => {
            this.getData(isPullDown).then(status => {
                if (this.firebaseConnected === false) {
                    this.connectToFireBase();
                    this.firebaseConnected = true;
                }
                resolve(true);
            }).catch(error => {
            });
        });
    }

    getData(isPullDown, search: boolean = false) {
        return new Promise((resolve, reject) => {
            if (!search) {
                this.dataFetched = _.size(this.data) > 0;
            }
            this.hasInternet = this._network.type !== 'none';
            if (this._network.type === 'none') {
                this.storage.get('lastconnectedtime:offline').then((time:any) => {
                this.connectedTime = time;
                this.deviceRegsiter = 2;
                });
                this.storage.get('GetTaskDetail:offline').then((data: any) => {
                    if (data) {
                        this.data = data;
                        this.dataFetched = true;
                        this.flashNews = data.FlashNews;
                        if (!search) {
                            this.registerDevice(isPullDown);
                        }
                        resolve(true);
                    } else {
                        reject();
                    }
                }).catch(error => {
                    reject(false);
                });

            } else {
                this.connection.doPost('Chat/GetTaskDetail', {
                    PageNumber: this.page,
                    RowsPerPage: 100,
                    Query: this.query,
                    OrderBy: this.sort_by,
                    Order: this.sort_order,
                }, false).then((response: any) => {
                    //groups
                    if (!search) {
                        this.registerDevice(isPullDown);
                    }
                    this.storage.set('GetTaskDetail:offline', response);
                    this._offlineStorage.set('offline:Groups-Wise', response.Groups_Wise);
                    this._offlineStorage.set('offline:due-topics', response.TaskDueInDays);
                    if (response.MenuAccess[0].HomePageAccess) {
                        this.buttons = [];
                        this.data = response;
                        this.dataFetched = true;
                        this.buttons.push({ icon: 'flash', name: 'flash' }, { icon: 'ios-options', name: 'sort' },{ icon: 'search', name: 'search' },);
                        if (!_.isEmpty(this.data)) {
                            //flash
                            if (response.FlashNews) {
                                this.flashNews = response.FlashNews;
                                this.flashNews.forEach((news, key) => {
                                    this.flashNewsProvider.openUnreadFlashNews(news);
                                });
                            }
                            this.page++;
                            resolve(true);
                        } else {
                            this.page = -1;
                            resolve(false);
                        }
                    } else {
                        this.hideRefresher = true;
                        this.dataFetched = false;
                        this.message = response.MenuAccess[0].Message;
                        this.hideRefresher = true;
                        resolve(true);
                    }
                }).catch(error => {
                    this.page = -1;
                    this.flashNews = [];
                    reject(false);
                })
            }
        });
    }



    isEmpty(object) {
        return _.isEmpty(object);
    }

    registerDevice(isPullDown) {
        //make device regsiter call
        //if internet
        // this.connectToServer('1224',false);
        if (this._network.type === 'none') {
            this.storage.get('lastconnectedtime:offline').then((time:any) => {
                this.connectedTime = time;
                this.deviceRegsiter = 2;
                });
        } else if (this.platform.is('core')) {
            if (this.connection.getPushID()) {
                this.deviceRegsiter = 1;
                this.connectToServer(this.connection.push_id, isPullDown);
            } else {
                this.events.subscribe('pushid:created', (userId) => {
                    this.deviceRegsiter = 1;
                    this.connectToServer(userId, isPullDown);

                });
                //wait 15sec and check again for user id
                setTimeout(() => {
                    let OneSignal = window['OneSignal'] || [];
                    let that = this;
                    OneSignal.push(function () {
                        OneSignal.getUserId(function (userId: string) {
                            if (userId) {
                                that.deviceRegsiter = 1;
                                that.connectToServer(userId, isPullDown);

                            }
                        });
                    });
                });
            }
        } else if (this.platform.is('cordova')) {
            this.deviceRegsiter = 1;
            this._oneSignal.getIds().then((id) => {
                this.connectToServer(id.userId, isPullDown);
            }).catch(error => {
                this.deviceRegsiter = 0;
            });
        }
    }

    connectToServer(pushID, isPullDown) {
        this.user.registerPushID(pushID, isPullDown).then((response: any) => {
            if (response.Data && response.Data.LastActivity) {
                this.deviceRegsiter = 2; //connected
                this.connectedTime = response.Data.LastActivity;
                this.storage.set('lastconnectedtime:offline',this.connectedTime);
            } else {
                this.deviceRegsiter = 0;
            }
        }).catch(error => {
            this.deviceRegsiter = 0;
        });
    }

    refresh(refresher) {
        this.page = 0;
        this.getData(true).then(status => {
            this.dataFetched = true;
            this.selectedTopic = [];
            this.selectedGroup = [];
            this.readAllSelected = true;
            this.readOptions = false;

            refresher.complete();
            this.connectToFireBase();
        }).catch(error => {
            refresher.complete();
        });
    }

    paginate(paginator) {
        this.getData(false).then(status => {
            if (status) {
                paginator.complete();
            } else {
                paginator.enable(false);
            }
        }).catch(error => {
            paginator.enable(false);
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
        if (this._network.type === 'none') {
            this.events.publish('toast:create', 'You seems to be offline');
        } else {
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
        this.read.read(this.selectedGroup, this.selectedTopic).then((response) => {
            if (response) {
                this.selectedTopic = [];
                this.selectedGroup = [];
                this.readAllSelected = true;
                this.readOptions = false;
            }
        });
    }


    readAll() {
        this.read.read(null, null, true).then((response: any) => {
            this.selectedTopic = [];
            this.selectedGroup = [];
            this.readAllSelected = true;
            this.readOptions = false;
            this.getData(false);
        }).catch((error) => {
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
            case 'sort':
                this.openSortOptions();
                break;
            case 'search':
                this.searchData();
                break;
            case 'flash':
                this.addFlash();
                break;
        }
    }


    fabButtonClicked(event) {
        switch (event.name) {
            case 'person':
                this.createUser();
                break;
            case 'ios-bookmark':
                this.createTag();
                break;
            case 'ios-people':
                this.createGroup();
                break;
            case 'flash':
                this.addFlash();
                break;

        }
    }

    createGroup() {
        this.navCtrl.push(CreateGroupPage);
    }

    createTag() {
        this.navCtrl.push(CreateTagPage);
    }

    createUser() {
        this.navCtrl.push(CreateUserPage);
    }

    searchData() {
        if (this.selectedTab === 'stats') {
            this.events.publish('toast:create', 'Search not available here');
        } else {
            if (this.searchInputBtn) {
                this.searchInputBtn = false;
            } else if (this.searchInputBtn === false) {
                this.searchInputBtn = true;
            }
            this.data = [];
            this.query = null;
            this.initializeItems();
        }
    }

    dashboardTabSearchHide(event) {
        if (this.selectedTab === 'stats' && this.searchInputBtn) {
            this.events.publish('toast:create', 'Search not available here');
            this.data = [];
            this.query = null;
            this.initializeItems();
        }
    }

    initializeItems() {
        this.page = 0;
        this.getData(false, true).catch(error => {
        });
    }

    onCancel(event) {
        this.query = null;
        this.initializeItems();
    }

    onClear(event) {
        this.query = null;
        this.initializeItems();
    }


    getItems(event) {
        // set val to the value of the ev target
        let val = event.target.value;
        if (val && val.trim() != '') {
            // if the value is an empty string don't filter the items
            this.query = val;
            this.page = 0;
            this.data = [];
            this.getData(false, true).catch(error => {
            });

        } else {
            this.data = [];
            this.query = null;
            this.initializeItems();
        }
    }


    addFlash() {
        if (this._network.type === 'none') {
            this.events.publish('toast:create', 'You seems to be offline');
        } else {
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
                        this.getData(false);
                    });
                }
            });
            flashModal.present();
        }
    }

    isGroupSelected() {
        if (this.getSelectedTabName() === 'Groups') {
            return true;
        }
        return false;
    }

    refresherHidden() {
        this.hideRefresher = false;
    }

    getSelectedTabName() {
        let selectedName = '';
        this.tabs.some(tab => {
            if (tab.icon === this.selectedTab) {
                selectedName = tab.name;
                if (selectedName === 'Groups' && this.reorder) {
                    this.hideRefresher = false;
                } else {
                    this.hideRefresher = true;
                }
                return true;
            }
            return false;
        });
        return selectedName;
    }

    getUnreadCount() {
        if (this.data) {
            if ('Topic_Wise_Count' in this.data) {
                if (this.data['Topic_Wise_Count'] > 0) {
                    return true;
                }
            }
            if ('Groups_Wise_Count' in this.data) {
                if (this.data['Groups_Wise_Count'] > 0) {
                    return true;
                }
            }
            if ('Archive_Topic_Count' in this.data) {
                if (this.data['Archive_Topic_Count'] > 0) {
                    return true;
                }
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
        if (selectedBadgeCount > 99) {
            selectedBadgeCount = '99+';
        }
        if(selectedBadgeCount === 0){
            return '';
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
        let group_reorder = [];
        let groupIds = [];

        this.data.Groups_Wise.forEach((group, index) => {
            if (groupIds.indexOf(group.GroupID) === -1) {
                group_reorder.push({ 'OrderIndex': index, 'GroupID': group.GroupID });
                groupIds.push(group.GroupID);
            }

        });

        this.connection.doPost('chat/MyGroupOrder', {
            OrderIndex: group_reorder.map(order => order.OrderIndex),
            GroupID: group_reorder.map(groupId => groupId.GroupID)
        }, false).then((response: any) => {
            if (response) {

            }
        }).catch((error) => {
        });

    }

    reorderGroups() {
        if (this._network.type === 'none') {
            this.events.publish('toast:create', 'You seems to be offline');
        } else {
            if (this.reorder) {
                this.reorder = false;
            } else {
                this.reorder = true;
            }
        }
    }

    openSortOptions() {
        if (this._network.type === 'none') {
            this.events.publish('toast:create', 'You seems to be offline');
        } else {
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
    }

    doSorting() {
        this.page = 0;
        this.data = [];
        this.getData(false);
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
