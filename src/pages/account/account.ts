import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events, IonicPage, ModalController, NavController, ViewController } from 'ionic-angular';
import { Global } from '../../app/global';
import { ConnectionProvider } from '../../providers/connection/connection';
import { TranslateServiceProvider } from '../../providers/translate-service/translate-service';
import { UserProvider } from '../../providers/user/user';
import { ChangePasswordPage } from './change-password/change-password';
import { EditProfilePage } from "./edit-profile/edit-profile";
import { NotificationPreferencesPage } from "./notification-preferences/notification-preferences";




@IonicPage()
@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {
    title: string = 'My Account';
    user: any = null;
    client: string = null;
    global: any = null;
    data: any = {};

    not_availble_in_offline_translate: string = 'Not available in Offline';
    constructor(
        public navCtrl: NavController,
        private _user: UserProvider,
        public modalCtrl: ModalController,
        public connection: ConnectionProvider,
        public viewCtrl: ViewController,
        public events: Events,
        private network: Network,
        private translate: TranslateServiceProvider,
    ) {
        this.global = Global;
        this.user = this._user._user;
    }

    doTranslate() {
        //Not Available in Offline
        this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(translated => {
            this.not_availble_in_offline_translate = translated;
        });
    }

    ionViewCanEnter() {
        this.doTranslate();
        if (this.network.type === 'none') {
            this.events.publish('toast:error', this.not_availble_in_offline_translate);
        }
        return this.network.type !== 'none';
    }

    ionViewDidEnter() {
        this.doTranslate();
    }

    openEditProfile() {
        let editProfilePageModal = this.modalCtrl.create(EditProfilePage);
        editProfilePageModal.onDidDismiss(data => {
            this.setTitle();
        });
        editProfilePageModal.present();
    }

    openChangePassword() {
        let changePasswordPagePageModal = this.modalCtrl.create(ChangePasswordPage);
        changePasswordPagePageModal.onDidDismiss(data => {
            this.setTitle();
        });
        changePasswordPagePageModal.present();
    }

    openNotifications() {
        let notificationPreferencesPageModal = this.modalCtrl.create(NotificationPreferencesPage);
        notificationPreferencesPageModal.onDidDismiss(data => {
            this.setTitle();
        });
        notificationPreferencesPageModal.present();
    }

    setTitle() {
        this.title = null;
        setTimeout(() => {
            this.title = 'My Account';
        });
    }

    getTitle() {
        return this.title;
    }
}
