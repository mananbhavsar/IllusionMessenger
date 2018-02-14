import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SQLite } from '@ionic-native/sqlite';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { Badge } from '@ionic-native/badge';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { VideoEditor } from '@ionic-native/video-editor';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Globalization } from '@ionic-native/globalization';
import { OneSignal } from '@ionic-native/onesignal';
import { FileOpener } from '@ionic-native/file-opener';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPageModule } from '../pages/about/about.module';
import { AccountPageModule } from '../pages/account/account.module';
import { ChangePasswordPageModule } from "../pages/account/change-password/change-password.module";
import { ChatPageModule } from "../pages/chat/chat.module";
import { ChatReadModalPageModule } from "../pages/chat/chat-read-modal/chat-read-modal.module";
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { CreateTopicPageModule } from '../pages/topic/create-topic/create-topic.module';
import { EditProfilePageModule } from "../pages/account/edit-profile/edit-profile.module";
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { GroupPageModule } from '../pages/group/group.module';
import { GroupOptionsPageModule } from '../pages/group/group-options/group-options.module';
import { HelpPageModule } from '../pages/help/help.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NotificationPreferencesPageModule } from "../pages/account/notification-preferences/notification-preferences.module";
import { SavedMediaPageModule } from "../pages/chat/saved-media/saved-media.module"
import { TopicOptionsPageModule } from '../pages/topic/topic-options/topic-options.module';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';

import { ConnectionProvider } from '../providers/connection/connection';
import { UserProvider } from '../providers/user/user';
import { FirebaseTransactionProvider } from '../providers/firebase-transaction/firebase-transaction';
import { CommonProvider } from "../providers/common/common";
import { NotificationsProvider } from "../providers/notifications/notifications";
import { FileOpsProvider } from '../providers/file-ops/file-ops';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from "../pipes/pipes.module";
import { DirectivesModule } from "../directives/directives.module";
import { MomentModule } from 'angular2-moment';
import { ElasticModule } from 'ng-elastic';
import { OrderModule } from 'ngx-order-pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicImageViewerModule } from 'ionic-img-viewer';

export const firebaseConfig = {
    apiKey: "AIzaSyAFDZ9UPTMiDTjT4qAG0d9uVeOdhL-2PBw",
    authDomain: "illusion-messenger.firebaseapp.com",
    databaseURL: "https://illusion-messenger.firebaseio.com",
    projectId: "illusion-messenger",
    storageBucket: "",
    messagingSenderId: "4208850060"
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__messenger_illusion_db',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        IonicImageViewerModule,
        AboutPageModule,
        AccountPageModule,
        ChangePasswordPageModule,
        ChatPageModule,
        ChatReadModalPageModule,
        ContactUsPageModule,
        CreateTopicPageModule,
        EditProfilePageModule,
        ForgotPasswordPageModule,
        GroupPageModule,
        GroupOptionsPageModule,
        HelpPageModule,
        HomePageModule,
        LoginPageModule,
        NotificationPreferencesPageModule,
        SavedMediaPageModule,
        TopicOptionsPageModule,
        TutorialPageModule,
        WelcomePageModule,
        MomentModule,
        ElasticModule,
        OrderModule,
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
        AngularFireDatabase,
        FirebaseTransactionProvider,
        Network,
        StatusBar,
        Keyboard,
        SplashScreen,
        Diagnostic,
        SQLite,
        CallNumber,
        EmailComposer,
        Badge,
        Device,
        InAppBrowser,
        Camera,
        FileTransfer,
        File,
        MediaCapture,
        Media,
        Vibration,
        VideoCapturePlus,
        StreamingMedia,
        VideoEditor,
        UniqueDeviceID,
        PhotoLibrary,
        Globalization,
        CommonProvider,
        OneSignal,
        NotificationsProvider,
        FileOpener,
        FileOpsProvider,
        PhotoViewer
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
