import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, Events, normalizeURL, ToastController, ActionSheetController } from 'ionic-angular';

import * as _ from 'underscore';
import * as mime from 'mime-types';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';
import { Global } from '../../app/global';

import { Storage } from '@ionic/storage';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { OneSignal } from '@ionic-native/onesignal';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Media, MediaObject } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  data: any = {};
  ticket: string = null;
  title: string = 'loading';
  subTitle: string = null;
  isIOS: boolean = false;
  isCordova: boolean = false;
  keyboardHeight: number = 0;

  basePath: string = '';

  messagesRef: AngularFireList<any>;
  messages: Observable<any[]>;
  message: string = '';

  typingRef: AngularFireObject<{}>;
  userTyping: any = {}; //this will hold all users id:status. 
  chattingRef: AngularFireObject<{}>;

  user: any = {};
  userID = null;
  //other users Register Device ID
  otherUserRegisterDeviceIDs: any = [];
  chatUsers: any = {};

  //camera
  private cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    targetHeight: 768,
    targetWidth: 1024
  }
  private galleryOptions: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    targetHeight: 768,
    targetWidth: 1024,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  progressPercent: number = 0;

  //recording
  aboutToRecord: boolean = false;
  recordingInProgress: boolean = false;
  recordTime: number = 0;
  dataDirectory = null;
  recordMediaFile: MediaObject = null;
  recordFile: string = null;
  recordFileName: string = 'record.wav';
  recordInterval: any = null;
  vibrateDuration: number = 300;

  keyboardOpen: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public connection: ConnectionProvider,
    public events: Events,
    public angularFireDB: AngularFireDatabase,
    public storage: Storage,
    public camera: Camera,
    private transfer: FileTransfer,
    private file: File,
    private mediaCapture: MediaCapture,
    private _media: Media,
    public actionSheetCtrl: ActionSheetController,
    private _oneSignal: OneSignal,
    private _toastCtrl: ToastController,
    private vibration: Vibration,
    private keyboard: Keyboard,
  ) {
    //init
    this.isIOS = this.platform.is('ios');
    this.isCordova = this.platform.is('cordova');
    this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.dataDirectory;

    //getting Ticket no
    this.ticket = this.navParams.data;
    this.basePath = 'Communications/' + this.ticket + '/';

    //setting current User
    this.user = this.connection.user;
    console.log(this.user);
    this.userID = this.user.id;

    //listening to events
    this.events.subscribe('platform:onResumed', () => {
      this.setChatting(true);
    });
    this.events.subscribe('platform:onPause', () => {
      this.setChatting(false);
      this.setTyping(false);
    });

    //notification subs
    this.events.subscribe('notification:chat', (notification) => {
      console.log(notification);
      /**
       * checking if chatting with same ticketNo
       * if not then show in toast with button
       */
      if (this.ticket !== notification.additionalData.params) {
        let chatToast = this._toastCtrl.create({
          message: 'New message from ' + notification.title,
          duration: 3000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'open',
          dismissOnPageChange: true,
        });
        chatToast.onDidDismiss((data, role) => {
          if (role === 'close') {
            this.navCtrl.push(ChatPage, notification.additionalData.params);
          }
        });
        chatToast.present();
      }
    });

    this.keyboard.hideKeyboardAccessoryBar(true)

  }


  connectFireBase() {

    //actual chat ref
    this.messagesRef = this.angularFireDB.list(this.basePath + 'Chat', ref => (
      ref.orderByKey()
    ));

    //actual data/messages
    this.messages = this.messagesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.messages.subscribe(data => {
      console.log('snapshot');
      this.scrollBottom();
    });

    //for typying object
    this.typingRef = this.angularFireDB.object(this.basePath + 'Typing/' + this.userID);
    //event to listed others typing
    this.angularFireDB.object(this.basePath + 'Typing').snapshotChanges().subscribe(snapshot => {
      this.userTyping = snapshot.payload.val();
      console.log('user typing go bottom');
      this.scrollBottom();
    });

    //for chatting: This will prevent notification from same chat
    this.chattingRef = this.angularFireDB.object(this.basePath + 'Chatting/' + this.userID);
    this.setChatting(true);
  }

  ionViewDidLoad() {
    //get Chat info before we load
    this.initData();
  }
  ionViewWillLeave() {
    this.setTyping(false);
    this.setChatting(false);

    this.messagesRef = null;
    this.typingRef = null;
    this.chattingRef = null;

    this.messages = null;
  }

  initData() {
    this.connection.doPost('Communication/GetQueryDetail', {
      TicketRegisterNo: this.ticket,
    }).then((response: any) => {
      this.data = response;
      console.log(this.data);
      this.setTitle();
      this.setUsers().then((chatUsersList) => {
        this.connectFireBase();
      }).catch(error => {
        alert(error);
      })

    }).catch(error => {

    });
  }

  /**
   * sets title for Chat
   */
  setTitle() {
    this.title = this.data.Query[0].Patient;
    this.subTitle = 'Doctor: ' + this.data.Query[0].Doctor + ', Impression No.: ' + this.data.Query[0].ImpNo;
  }

  /**
   * extrats users name, ids & push tokens
   */
  setUsers() {
    return new Promise((resolve, reject) => {
      if (!_.isEmpty(this.data)) {
        this.data.User[0].Dentist.forEach(user => {
          this.userTyping[user.LoginUserID] = user.UserName;
          this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
          if (user.LoginUserID !== this.userID && user.RegisteredDeviceID.length === 36) {
            this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
          }
        });
        this.data.User[0].GroupUser.forEach(user => {
          this.userTyping[user.LoginUserID] = user.UserName;
          this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
          if (user.LoginUserID !== this.userID && user.RegisteredDeviceID.length === 36) {
            this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
          }
        });
        //test
        this.otherUserRegisterDeviceIDs.push('0dbd7616-ec58-4ae9-9458-8be7dc2d4c49');
        resolve(this.chatUsers);
      } else {
        reject('No User');
      }
    });
  }

  openUploadOptions() {
    const actionSheet = this.actionSheetCtrl.create({
      title: null,
      cssClass: 'text-left',
      buttons: [
        {
          text: 'Camera',
          icon: 'ios-camera-outline',
          handler: () => {
            this.captureImage('camera');
          }
        },
        {
          text: 'Photo & Gallery',
          icon: 'ios-image-outline',
          handler: () => {
            this.captureImage('gallery');
          }
        },
        {
          text: 'Audio',
          icon: 'ios-mic-outline',
          role: 'desructive',
          handler: () => {
            this.captureAudio(0);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });

    actionSheet.present();
  }

  sendTextMessage() {
    console.log('send' + new Date().getTime());
    if (_.isEmpty(this.message.trim())) {
      return false;
    }
    this.sendToFirebase(this.message);
    this.message = '';
  }

  sendToFirebase(message: string = null, type: string = 'Text', url: any = false) {
    let readObject = {};
    readObject[this.userID] = firebase.database.ServerValue.TIMESTAMP;

    this.messagesRef.push({
      Message: message,
      CreateAt: firebase.database.ServerValue.TIMESTAMP,
      MessageType: type,
      HasAttachment: false,
      From: this.user.Customer,
      UserID: this.userID,
      LoginTypeID: this.user.LoginTypeID,
      Status: 0,
      URL: url,
      TicketNo: this.ticket,
      Read: readObject
    }).then((messageFromFirebase) => {
      this.scrollBottom();
      let data = {
        Message: message,
        MessageType: type,
        URL: url,
        key: messageFromFirebase.key,
      };
      //send Push notification
      this.sendPushNotification(data);

      //send to Server
      this.sendMessageToServer(data);
    });
  }

  onBlur(event) {
    if (this.keyboardOpen) {
      event.target.focus();
    } else {
      this.setTyping(false);
      this.scrollBottom();
    }
  }

  keyup(event) {
    console.log(event);
    this.setTyping(true);
  }

  onFocus(event) {
    this.keyboardOpen = true;
    this.setTyping(true);
  }

  closeKeyboard() {
    this.keyboardOpen = false
    this.keyboard.close()
  }

  setTyping(flag: boolean = true) {
    if (this.typingRef) { //null check
      //setting value
      this.typingRef.set(flag);
      //if true, adding timeout 3 secs
      // if (flag) {
      //   setTimeout(() => {
      //     this.setTyping(false);
      //   }, 3000);
      // }
    }
  }

  setChatting(flag: boolean = true) {
    if (this.chattingRef) { //null check
      this.chattingRef.set(flag);
    }
  }

  scrollBottom(animate: number = 300) {
    setTimeout(() => {
      if (this.content.resize) {
        this.content.resize();
      }
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(animate);
      }
    }, 100);
  }

  captureImage(type: string = 'camera') {
    let options = this.cameraOptions;
    if (type === 'gallery') {
      options = this.galleryOptions;
    }
    this.camera.getPicture(options).then(url => {
      url = normalizeURL(url);
      this.uploadFile(url).then(data => {
        console.log(data);
        //sending to Firebase
        this.sendToFirebase(null, 'Image', data);
      }).catch(error => {
        this.events.publish('toast:error', error);
      });
    }).catch(error => {
      this.events.publish('toast:error', error);
    });
  }

  captureAudio(duration: number = null) {

    if (duration) {
      this.vibration.vibrate(this.vibrateDuration);
    }
    //show recording mode
    this.aboutToRecord = true;
    this.recordingInProgress = false;
    this.recordTime = 0;
  }

  closeRecording() {
    this.aboutToRecord = false;
    this.recordingInProgress = false;
    this.recordTime = 0;
  }

  startRecording() {

    this.file.createFile(this.dataDirectory, this.recordFileName, true).then(fileEntry => {
      this.recordFile = normalizeURL(fileEntry.nativeURL);
      this.recordMediaFile = this._media.create(this.dataDirectory + this.recordFileName);

      this.vibration.vibrate(this.vibrateDuration);

      this.recordMediaFile.startRecord();
      this.recordingInProgress = true;
      //interval 
      this.recordInterval = setInterval(() => {
        this.recordTime++;
      }, 1000);
    });
  }

  stopRecording() {
    this.vibration.vibrate(this.vibrateDuration);

    //stop from Media
    this.recordMediaFile.stopRecord();

    //make a copy
    let totalTime = this.recordTime;

    //clear Interval
    if (this.recordInterval) {
      clearInterval(this.recordInterval);
      this.recordInterval = null;
    }

    //clear all
    this.closeRecording();

    //process
    let file = this.recordFile;
    this.uploadFile(file).then(data => {
      //deleting file
      this.file.removeFile(this.dataDirectory, this.recordFileName);

      console.log(data);

      //sending to Firebase
      this.sendToFirebase(null, 'Audio', data);
    }).catch(error => {
      //deleting file
      this.file.removeFile(this.dataDirectory, this.recordFileName);

      this.events.publish('toast:error', error);
    });
  }

  getRecordTime() {
    let minutes = Math.floor(this.recordTime / 60);
    let seconds = '' + (this.recordTime - minutes * 60);
    if (seconds.length === 1) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;

  }

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        this.progressPercent = 0;

        const fileTransfer: FileTransferObject = this.transfer.create();
        let options = this.setFileOptions(file);
        console.log(options);
        fileTransfer.upload(file, Global.SERVER_URL + 'Communication/InsertChat_Attachement', options)
          .then((data) => {
            this.progressPercent = 0;
            //getting URL from XML
            console.log(data);
            resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
          }, (err) => {
            this.progressPercent = 0;
            reject(err);
          });
        fileTransfer.onProgress((progress) => {
          if (progress.lengthComputable) {
            this.progressPercent = progress.loaded * 100 / progress.total;
          }
        });
      } else {
        reject('Empty File');
      }
    });
  }

  setFileOptions(file): FileUploadOptions {
    //removing ? if any
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));
    let fileName = file.substring(file.lastIndexOf('/') + 1);
    let fileExtension = file.substring(file.lastIndexOf('.') + 1);

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileName,
      mimeType: mime.lookup(fileExtension),
      chunkedMode: false,
      headers: new Headers({ 'Content-Type': 'application/json' }),
      params: {
        TicketNo: this.ticket,
        CustomerID: this.user.CustomerID,
        SecureToken: this.user.SecureToken,
        OrganizationUnitID: this.user.LoginOUID,
        LoginTypeID: this.user.LoginTypeID,
        LoginUserID: this.user.CustomerPortalID,
        FileName: fileName,
        FileExtension: fileExtension,
      },
    }

    return options;
  }


  sendPushNotification(message) {
    let notificationObj: any = {
      include_player_ids: this.otherUserRegisterDeviceIDs,
      data: {
        page: 'ChatPage', params: this.ticket
      },
      headings: {
        en: this.user.Customer
      },
      contents: {
        en: message.Message,
      },
      ios_badgeType: 'Increase',
      ios_badgeCount: 1,
    };

    //checking if Image then adding image notification
    if (message.MessageType === 'Image') {
      notificationObj.contents.en = '📷 Image';
      notificationObj['ios_attachments'] = {
        'attachment-1': message.URL,
      };
      notificationObj['big_picture'] = message.URL;
    } else if (message.MessageType === 'Audio') {
      notificationObj.contents.en = '🎤 Voice Message';
    }

    console.log(notificationObj);
    this._oneSignal.postNotification(notificationObj).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  sendMessageToServer(message) {
    this.connection.doPost('Communication/InsertChat', {
      TicketNo: this.ticket,
      Message: message.Message ? message.Message : '',
      MessageType: message.MessageType,
      URL: message.URL,
    }, false).then((response: any) => {
    });
  }

  openFile(file) {

  }

}
