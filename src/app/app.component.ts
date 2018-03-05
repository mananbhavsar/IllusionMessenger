import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Nav, MenuController, Platform, Events, LoadingController, ModalController, AlertController, ToastController } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Keyboard } from '@ionic-native/keyboard';
import { Badge } from '@ionic-native/badge';
import { Globalization } from '@ionic-native/globalization';
import { OneSignal } from '@ionic-native/onesignal';

import { Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ChatPage } from '../pages/chat/chat';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { UserProvider } from '../providers/user/user';
import { Global } from './global';

import { AngularFireDatabase } from 'angularfire2/database';
import { not } from '@angular/compiler/src/output/output_ast';
import { TranslateService } from '@ngx-translate/core';
import { locale } from 'moment';

enableProdMode();

export interface PageInterface {
    title: string;
    name: string;
    translate_key: string,
    component: any;
    icon: string;
    logsOut?: boolean;
    index?: number;
    tabName?: string;
    tabComponent?: any;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    inBackgroud: boolean = false;
    loading: any;
    loggedIn: Boolean = false;
    rootPage: any = WelcomePage;
    disconnectSubscription: any;
    connectSubscription: any;
    lastOfflineMessageShown: number = 0;
    latitude: number = 0.0;
    longitude: number = 0.0;
    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    appPages: PageInterface[] = [
        // { title: 'About', translate_key: 'Common._About', name: 'AboutPage', component: AboutPage, icon: 'information-circle' },
        { title: 'Help', translate_key: 'Common._Help_', name: 'HelpPage', component: HelpPage, icon: 'help-circle' },
    ];
    loggedInPages: PageInterface[] = [
        { title: 'Home', translate_key: 'HomeScreen._Home_', name: 'HomePage', component: HomePage, icon: 'home' },
    ];
    accountPages: PageInterface[] = [
       /* { title: 'Account', translate_key: 'Common._Account_', name: 'AccountPage', component: AccountPage, icon: 'user' },*/
        { title: 'Logout', translate_key: 'Common._LogOut_', name: 'LogoutPage', component: LogoutPage, icon: 'log-out', logsOut: true }
    ];
    loggedOutPages: PageInterface[] = [
        { title: 'Login', translate_key: 'LoginPage._log_in', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
        { title: 'Forgot Password', translate_key: 'LoginPage._Forgot_Password', name: 'ForgotPasswordPage', component: ForgotPasswordPage, icon: 'key' },
    ];

    //mubass
    error_translate: string = 'Error occurred! Try again';
    offline_translate: string = 'You seems to be offline';
    online_translate: string = 'Hola, you are online now';
    welcome_translate: string = 'Welcome';
    ok_translate: string = 'Ok';
    loading_translate: string = 'loading';
    cancel_translate: string = 'Cancel';
    alert_translate: string = 'Alert';
    logout_message_translate: string = 'Are you sure, you want to logout?';
    constructor(
        public events: Events,
        public menu: MenuController,
        public platform: Platform,
        private _statusBar: StatusBar,
        public storage: Storage,
        public splashScreen: SplashScreen,
        public user: UserProvider,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        private toast: ToastController,
        private _network: Network,
        private _diagnostic: Diagnostic,
        private _keyboard: Keyboard,
        private _badge: Badge,
        private angularFireDatabase: AngularFireDatabase,
        private _oneSignal: OneSignal,
        private translate: TranslateService,
        private globalization: Globalization,
    ) {
        this.translate.setDefaultLang('en');
        platform.ready().then(() => {
            this._statusBar.overlaysWebView(false); // let status bar overlay webview
            this._statusBar.backgroundColorByHexString(Global.color.primary);
            splashScreen.hide();

            this.enableMenu(false);
            this.listenToGobalEvents();
            this.listenToLoginEvents();
            this._keyboard.hideKeyboardAccessoryBar(false);
            this._keyboard.disableScroll(false);

            setTimeout(() => {
                this.initPreLoginPlugins();
            }, 500);
        });
    }

    enableMenu(loggedIn: boolean) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    }

    openPage(page: PageInterface) {
        //not opening if same page
        if (page.name === Global.getActiveComponentName(this.nav.getActive())) {
            return true;
        }
        let params = {};

        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }

        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        } else {
            //checking if logging out and need to ask for confirmation
            if (page.name === 'LogoutPage') {
                let logoutConfirmation = this.alertCtrl.create({
                    title: this.alert_translate,
                    message: this.logout_message_translate,
                    buttons: [{
                        text: this.cancel_translate,
                        role: 'cancel'
                    }, {
                        text: this.ok_translate,
                        handler: () => {
                            this.nav.push(page.name, params);
                        }
                    }]
                });
                logoutConfirmation.present();
            } else {
                // Set the root of the nav with params if it's a tab index
                this.nav.push(page.name, params);
            }
        }

        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out

        }
    }

    openTutorial() {
        this.nav.push(TutorialPage);
    }

    isActive(page: PageInterface) {
        let childNav = this.nav.getActiveChildNavs()[0];

        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }

        if (Global.getActiveComponentName(this.nav.getActive()) === page.name) {
            return 'primary';
        }
        return;
    }

    /**
     * checking post login if user is Authorized to access this page
     * @param page 
     */
    isAuthorized(page: PageInterface) {
        if (this.user && this.user._user) {
            return true;
        }
        return false;
    }

    doTranslate() {
        //error
        this.translate.get('Common._ErrorOccurred_').subscribe(translated => {
            this.error_translate = translated;
        });
        //offline
        this.translate.get('Common._Offline_').subscribe(translated => {
            this.offline_translate = translated;
        });
        //online
        this.translate.get('Common._Online_').subscribe(translated => {
            this.online_translate = translated;
        });
        //welcome
        this.translate.get('Common._Welcome_').subscribe(translated => {
            this.welcome_translate = translated;
        });
        //ok
        this.translate.get('Common._OK_').subscribe(translated => {
            this.ok_translate = translated;
        });
        //cancel
        this.translate.get('Common._Cancel_').subscribe(translated => {
            this.cancel_translate = translated;
        });
        //alert
        this.translate.get('Common._Alert_').subscribe(translated => {
            this.alert_translate = translated;
        });
        //logout message
        this.translate.get('Logout._LogoutMessage_').subscribe(translated => {
            this.logout_message_translate = translated;
        });

        //loading
        this.translate.get('Common._Loading_').subscribe(translated => {
            this.loading_translate = translated;
        });
    }

    listenToGobalEvents() {
        this.doTranslate();

        this.events.subscribe('loading:create', (content) => {
            content = content || this.loading_translate;
            this.loading = this.loadingCtrl.create({
                content: content + '...'
            });

            this.loading.present();
        });

        this.events.subscribe('loading:close', () => {
            if (this.loading) {
                this.loading.dismiss();
            }
        });


        this.events.subscribe('alert:basic', (title, subTitle, buttons) => {
            try {
                if (typeof title === 'undefined' || title.trim() === '') {
                    return;
                }
                if (typeof subTitle === 'undefined' || subTitle.trim() === '') {
                    return;
                }
            } catch (e) {
                return;
            }
            buttons = buttons || [this.ok_translate]; //OK
            let alert = this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: buttons
            });
            alert.present();
        });


        this.events.subscribe('toast:create', (message, cssClass) => {
            cssClass = cssClass || null;
            if (message.trim() === '') {
                return;
            }
            let toast = this.toast.create({
                message: message,
                duration: 5000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                cssClass: cssClass
            });
            toast.present();
        });

        this.events.subscribe('toast:error', (error) => {
            if (error === null) {
                return;
            }
            if (typeof error === 'string') {
                this.events.publish('toast:create', error, 'danger');
            } else if ([404].indexOf(error.status) > -1) {
                this.events.publish('toast:create', error.status + ': ' + error.statusText, 'danger');
            } else if (error._body) {
                let body = error._body;
                if (body) {
                    try {
                        body = JSON.parse(error._body);
                    } catch (e) {
                        body = error._body;
                    }
                }

                //checking if title
                if (typeof body === 'object') {
                    if (!('title' in body)) {
                        //adding statusText
                        body.title = error.statusText;
                    }
                } else {
                    body = {
                        title: error.statusText,
                        message: body
                    }
                }
                this.events.publish('alert:basic', body.title, body.message);
            } else {
                this.events.publish('toast:create', this.error_translate, 'danger');
            }
        });

        this.events.subscribe('push:send', (id, message) => {

        });

        //Network events
        this.events.subscribe('network:offline', () => {
            let time = new Date().getTime();
            if ((time - this.lastOfflineMessageShown) < 1000) {
                return;
            }
            this.lastOfflineMessageShown = time;
            //sending to offline page only if not in offline 
            var currentPage = Global.getActiveComponentName(this.nav.getActive());
            if (currentPage !== 'OfflinePage') {
                this.events.publish('toast:create', this.offline_translate + '!');
                //this.nav.setRoot(OfflinePage);
            }
        });
        this.events.unsubscribe('network:online');
        this.events.subscribe('network:online', () => {
            //sending to home page only in offline page
            //var currentPage = Global.getActiveComponentName(this.nav.getActive());
            //if (currentPage === 'OfflinePage') {
            this.events.publish('toast:create', this.online_translate);
            //this.nav.setRoot(WelcomePage, true);
            //}
        });

    }


    initPreLoginPlugins() {
        //working on network
        this.doNetworking();

        //On app Resume & Pause
        this.platform.resume.subscribe(() => {
            this.inBackgroud = false;
            this.events.publish('platform:onResumed');
        });
        this.platform.pause.subscribe(() => {
            this.inBackgroud = true;
            this.events.publish('platform:onPause');
        });

        //OneSignal
        this.initOneSignal();

        //working on OS Version
        this.doVersionCheck();

        //do globalization
        this.doGlobalization();
    }

    initPostLoginPlugins() {

        //init FCM
        if (Global.Push.FCM) {

        }
        //init OneSignal
        if (Global.Push.OneSignal) {
            this.processOneSignalId();
        }

        //Badge
        this.initBadge();
    }

    doNetworking() {
        //checking if currently offline
        setTimeout(() => {
            if (this._network.type === 'none') {
                this.events.publish('network:offline');
            }
        }, 1000);
        //listening to events
        this._network.onDisconnect().subscribe(() => {
            this.events.publish('network:offline');
        });
        this._network.onConnect().subscribe(() => {
            this.events.publish('network:online');
        });
    }

    doVersionCheck() {
        this.user.doVersionCheck();
    }

    doGlobalization() {
        if (this.platform.is('cordova')) {
            this.globalization.getPreferredLanguage().then(language => {
                console.log(language);
            });
        } else {

        }
    }

    openNotificationPage(payload) {
        //do we need to open page
        if (payload.additionalData && payload.additionalData.page) {
            let page: any = null;
            switch (payload.additionalData.page) {
                case 'ChatPage':
                    page = ChatPage;
                    break;

                default:
                    page = HomePage;
                    break;
            }
            if (page) {
                this.nav.push(page, payload.additionalData.params);
            }
        }
    }

    processNotification(notification, directOpenPage) {
        let payload = 'payload' in notification ? notification.payload : notification.notification.payload;
        console.log(payload, directOpenPage);
        //showing notification  alert if not chatting else giving control to Caht module to handle it
        let currentPage = Global.getActiveComponentName(this.nav.getActive());
        if (currentPage === 'ChatPage') {
            this.events.publish('notification:chat', payload);
        } else if (directOpenPage && payload.additionalData && payload.additionalData.page) {//direct open & has data pages
            this.openNotificationPage(payload);
        } else {
            let closeText = 'x';
            if (payload.additionalData && payload.additionalData.page) {
                if (payload.additionalData.page === 'ChatPage') {
                    closeText = 'open';
                }
            }

            let notificationToast = this.toast.create({
                message: payload.body,
                duration: 5000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: closeText,
                cssClass: ''
            });
            notificationToast.onDidDismiss((data, role) => {
                if (role === 'close') {
                    this.openNotificationPage(payload);
                }
            });
            notificationToast.present();
        }
    }

    initOneSignal() {
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(Global.OneSignal.key, Global.OneSignal.android);
        this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.None);
        this._oneSignal.handleNotificationReceived().subscribe((notification) => {
            // do something when notification is received
            this.processNotification(notification, false);
        });

        this._oneSignal.handleNotificationOpened().subscribe((notification) => {
            // do something when a notification is opened
            this.processNotification(notification, true);
        });

        this._oneSignal.endInit();
    }

    processOneSignalId() {
        this._oneSignal.getIds().then((id) => {
            //registering user
            this._oneSignal.setSubscription(true);
            //updating user ID
            this.user.registerPushID(id.userId);
            //setting tags for this user
            this.user.getUser().then(user => {
                this._oneSignal.sendTags({
                    user_id: user.id,
                    name: user.LoginUser
                });
            });
        });
    }

    initBadge() {
        this.user.getUser().then(user => {
            console.log(user);
            this.angularFireDatabase.object('Badge/' + user.id + '/Total').snapshotChanges().subscribe(snapshot => {
                let total = snapshot.payload.val();
                console.log('total:' + total);
                if (total) {
                    this._badge.set(total);
                } else {
                    this._badge.clear();
                }
            });
        });
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', (user) => {
            this.loggedIn = true;
            this.enableMenu(true);
            if (Global.Push.OneSignal) {
                this._oneSignal.setSubscription(true);
            }
            this.translate.use(user.MyLanguage);

            this.nav.setRoot(HomePage);

            setTimeout(() => {
                let full_name = user ? user.LoginUser : '';
                this.events.publish('toast:create', this.welcome_translate + ' ' + full_name);
                this.initPostLoginPlugins();
                this.events.publish('user:changed');
                this.events.publish('user:postLogin', true);
            });
        });

        this.events.subscribe('user:logout', (logoutMessage) => {
            this.loggedIn = false;
            this.enableMenu(false);
            this.nav.setRoot(LoginPage);
            setTimeout(() => {
                this.events.publish('toast:create', logoutMessage);
                this.events.publish('user:changed');
                this.events.publish('user:postLogout', true);
            });
            this._badge.clear();
        });


        this.events.subscribe('user:unautharized', () => {
            this.events.publish('user:logout', 'You are unauthorized user');
            if (Global.Push.OneSignal) {
                this._oneSignal.setSubscription(false);
            }
        });

        //checking if user already logged in
        this.user.hasLoggedIn().then((user) => {
            if (user) {
                this.events.publish('user:login', user);
            }
        });
    }

}
