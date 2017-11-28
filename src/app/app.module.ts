import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SQLite } from '@ionic-native/sqlite';
import { LocationAccuracy } from '@ionic-native/location-accuracy'
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { OneSignal } from '@ionic-native/onesignal';
import { Badge } from '@ionic-native/badge';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { FileOpener } from '@ionic-native/file-opener';
import { FCM } from '@ionic-native/fcm';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';

import { AboutPageModule } from '../pages/about/about.module';
import { AccountPageModule } from '../pages/account/account.module';
import { CaseStatusPageModule } from "../pages/case-status/case-status.module";
import { CaseStatusModalPageModule } from "../pages/case-status/case-status-modal/case-status-modal.module";
import { ChatPageModule } from "../pages/chat/chat.module";
import { CommunicationPageModule } from "../pages/communication/communication.module";
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { DashboardPageModule } from "../pages/dashboard/dashboard.module";
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { HelpPageModule } from '../pages/help/help.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { OfficeListPageModule } from "../pages/office-list/office-list.module";
import { OfflinePageModule } from '../pages/offline/offline.module';
import { PickupPageModule } from "../pages/pickup/pickup.module";
import { RegisterPageModule } from '../pages/register/register.module';
import { SearchPageModule } from '../pages/search/search.module';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';

import { ConnectionProvider } from '../providers/connection/connection';
import { UserProvider } from '../providers/user/user';
import { OfficeServiceProvider } from '../providers/office-service/office-service';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from "../pipes/pipes.module";
import { DirectivesModule } from "../directives/directives.module";
import { MomentModule } from 'angular2-moment';
import { ElasticModule } from 'ng-elastic';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { IonicImageViewerModule } from 'ionic-img-viewer';

export const firebaseConfig = {
    apiKey: "AIzaSyAeAsx1UOrRVQ9m9zlwvmHiTsCuvLtO-J4",
    authDomain: "illusion-dental-5d48c.firebaseapp.com",
    databaseURL: "https://illusion-dental-5d48c.firebaseio.com",
    projectId: "illusion-dental-5d48c",
    storageBucket: "illusion-dental-5d48c.appspot.com",
    messagingSenderId: "7402421237",
}

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'md',
        }),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__dental_illusion_db',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        IonicImageLoader.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        IonicAudioModule.forRoot(defaultAudioProviderFactory),
        IonicImageViewerModule,        
        AboutPageModule,
        AccountPageModule,
        CaseStatusPageModule,
        CaseStatusModalPageModule,
        ChatPageModule,
        CommunicationPageModule,
        ContactUsPageModule,
        DashboardPageModule,
        ForgotPasswordPageModule,
        HelpPageModule,
        HomePageModule,
        LoginPageModule,
        OfficeListPageModule,
        OfflinePageModule,
        PickupPageModule,
        RegisterPageModule,
        SearchPageModule,
        TutorialPageModule,
        WelcomePageModule,
        MomentModule,
        ElasticModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConnectionProvider,
        UserProvider,
        OfficeServiceProvider,
        AngularFireDatabase,
        Network,
        StatusBar,
        Geolocation,
        Keyboard,
        SplashScreen,
        Diagnostic,
        SQLite,
        LocationAccuracy,
        CallNumber,
        EmailComposer,
        OneSignal,
        Badge,
        Device,
        InAppBrowser,
        Camera,
        FileTransfer,
        File,
        MediaCapture,
        Media,
        Vibration,
        FileOpener,
        FCM,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
