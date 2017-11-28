import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, Events, normalizeURL, ToastController, ActionSheetController } from 'ionic-angular';

import * as _ from 'underscore';
import * as mime from 'mime-types';

import * as firebase from 'firebase';
import * as moment from 'moment';
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
import { Network } from '@ionic-native/network';

import { LogoutPage } from '../logout/logout';
import { retry } from 'rxjs/operators/retry';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('messageInput') messageInput: any;

  data: any = {};
  ticket: string = null;
  title: string = 'loading';
  subTitle: string = null;
  isIOS: boolean = false;
  isCordova: boolean = false;
  keyboardHeight: number = 0;

  basePath: string = '';

  messagesRef: firebase.database.Reference;
  newMessagesRef: firebase.database.Query;
  messages: Array<any> = [];
  messagesKeys: Array<any> = []; //this will keep track of keys vs index in original array of messages
  messagesLoaded: boolean = false;
  message: string = '';
  messageLimit: number = 20;
  firstMessageKey: string = null;
  showNoMoreMessages: boolean = false;

  typingRef: firebase.database.Reference;
  typingRefLoaded: boolean = false;
  userTyping: any = {}; //this will hold all users id:status. 

  userChatting: any = {}; // active chat users
  chattingRef: firebase.database.Reference;
  lastTypingTime: number = 0;

  user: any = {};
  userID = null;
  //other users Register Device ID
  otherUserRegisterDeviceIDs: any = [];
  chatUsers: any = {};
  badgeUsers: any = {};

  lastcalled: boolean = false;

  sendClickKeepKeyboardOpened: boolean = false;
  //camera
  private cameraOptions: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    targetHeight: 1024,
    targetWidth: 1024
  }
  private galleryOptions: CameraOptions = {
    quality: 80,
    correctOrientation: true,
    targetHeight: 1024,
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
    private network: Network,
  ) {
    //init
    this.isIOS = this.platform.is('ios');
    this.isCordova = this.platform.is('cordova');
    this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.tempDirectory;

    //getting Ticket no
    this.ticket = this.navParams.data;
    this.basePath = 'Communications/' + this.ticket + '/';

    this.keyboard.onKeyboardShow().subscribe((data) => {
      this.scrollBottom('keyboard show');
    });
    this.keyboard.onKeyboardHide().subscribe((data) => {
      console.log('keyboard closes');
      this.contentResize();
      if (this.sendClickKeepKeyboardOpened === false) {
        this.closeKeyboard(null);
      } else {
        this.sendClickKeepKeyboardOpened = false;
      }
      this.scrollBottom('keyboard hide');
    });

    //making folder with this ticket number to save files
    this.doFoldering();
  }

  setFirebaseRef() {
    //actual chat ref
    this.messagesRef = firebase.database().ref(this.basePath + 'Chat');

    //for typying object
    this.typingRef = firebase.database().ref(this.basePath + 'Typing');

    //for chatting: This will prevent notification from same chat
    this.chattingRef = firebase.database().ref(this.basePath + 'Chatting');
  }

  connectFireBase() {
    this.setFirebaseRef();

    //actual data/messages
    //getting first n message
    this.messagesRef.orderByKey().limitToLast(this.messageLimit).once('value', (snapshot) => {
      let lastKey = null;
      let numberOfMessages = 0;
      let ignoredStart = false;

      let messages = snapshot.val();
      for (let key in messages) {
        let message = messages[key];
        message['key'] = key;

        this.messages.push(message);
        this.messagesKeys.push(key);

        lastKey = key;
      }

      //checking if no more messages ie. first message key is same at 0 index
      this.checkForNoMoreMessages();

      setTimeout(() => {
        this.messagesLoaded = true;
        setTimeout(() => {
          this.scrollBottom('first time message load');
        }, 100);
      });


      //for new message
      this.newMessagesRef = this.messagesRef.orderByKey();
      if (lastKey) {
        this.newMessagesRef = this.newMessagesRef.startAt(lastKey);
      }
      this.listenToFirebaseEvents(ignoredStart);
    });

    //first message
    this.messagesRef.orderByKey().limitToFirst(1).once('value', (snapshot) => {
      let message = snapshot.val();
      if (message) {
        this.firstMessageKey = Object.keys(message)[0];
        this.checkForNoMoreMessages();
      }
    });
  }

  listenToFirebaseEvents(ignoredStart) {
    //new Message
    this.newMessagesRef.on('child_added', (snapshot) => {
      if (ignoredStart) {
        let message = snapshot.val();
        if (this.messages && message) {
          message['key'] = snapshot.key;

          this.messages.push(message);
          this.messagesKeys.push(snapshot.key);

          setTimeout(() => {
            this.scrollBottom('new message');
          }, 200);
        }
      } else {
        ignoredStart = true;
      }
    });

    //listening to status change event
    this.messagesRef.orderByChild('Status').on('child_changed', (snapshot) => {
      let message = snapshot.val();
      let index = this.messagesKeys.indexOf(snapshot.key);
      if (index > -1 && typeof this.messages !== 'undefined' && typeof this.messages[index] !== 'undefined') {
        this.messages[index].Status = message.Status;
      }
    });

    //event to listed others typing
    this.typingRef.on('value', snapshot => {
      this.userTyping = snapshot.val();
      if (this.typingRefLoaded) {
        console.log(this.userTyping);
        setTimeout(() => {
          this.scrollBottom('typing ref init');//1
        }, 100);
      }
      this.typingRefLoaded = true;
    });

    this.chattingRef.on('value', snapshot => {
      this.userChatting = snapshot.val();
    });

    this.setChatting(true);
  }

  paginate(paginator) {
    if (!this.messagesLoaded) {
      paginator.complete();
    }
    if (this.messages === null || this.messages[0].key === this.firstMessageKey) {
      paginator.enable(false);
      this.showNoMoreMessages = true;
    }

    console.log('paginate');
    //paging prev 10 messages
    if (this.messagesRef) {
      if (typeof this.messages[0] !== 'undefined') {
        this.messagesRef.orderByKey().limitToLast(this.messageLimit).endAt(this.messages[0].key).once('value', (snapshot) => {
          let messages = [];
          snapshot = snapshot.val();
          if (snapshot) {
            //removing first
            delete snapshot[this.messages[0].key];
            //adding key
            for (let key in snapshot) {
              let message = snapshot[key];
              message['key'] = key;
              messages.push(message);
            }
            //checking
            if (!_.isEmpty(messages)) {
              //reverse to added from start
              messages.reverse();
              //adding to messages list
              messages.forEach((message) => {
                this.messages.unshift(message);
                this.messagesKeys.unshift(message.key);
              });
            }
            this.contentResize();
          }
          paginator.complete();
        });
      } else {
        paginator.enable(false);
        paginator.complete();
      }
    } else {
      paginator.complete();
    }
  }

  initUser() {
    //setting current User
    this.user = this.connection.user;
    this.userID = this.user.id;
  }

  listenToEvents() {
    //listening to platforms events
    this.events.subscribe('platform:onPause', () => {
      console.log('pause');
      this.doLeaving(false);
    });
    this.events.subscribe('platform:onResumed', () => {
      this.setFirebaseRef();
      this.listenToFirebaseEvents(true);
      //make all unread count of this ticket to zero
      this.clearBadgeCountIfAny();
    });

    //notification subs
    this.events.subscribe('notification:chat', (notification) => {
      if (this.lastcalled) {
        return;
      }
      this.lastcalled = true;
      setTimeout(function () {
        this.lastcalled = false;
      }, 100);
      /**
       * checking if chatting with same ticketNo
       * if not then show in toast with button
       */
      if (this.ticket !== notification.additionalData.params) {
        let chatToast = this._toastCtrl.create({
          message: 'New message from ' + notification.title,
          duration: 5000,
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
  }

  ionViewDidEnter() {
    //checking if user logged in
    if (!_.isEmpty(this.connection.user)) {
      this.initUser();
      this.listenToEvents();
      //get Chat info before we load
      this.initData();
    } else {
      this.events.subscribe('user:ready', User => {
        if (!_.isEmpty(User)) {
          this.ionViewDidEnter();
        } else {
          this.events.publish('toast:create', 'Kindly login to access Query');
          this.navCtrl.setRoot(LogoutPage);
        }
      })
    }
  }

  ionViewWillLeave() {
    console.log('leaving');
    this.doLeaving(true);
  }

  initData() {
    this.connection.doPost('Communication/GetQueryDetail', {
      TicketRegisterNo: this.ticket,
    }).then((response: any) => {
      this.data = response;

      this.setTitle();
      this.setUsers().then((chatUsersList) => {
        this.connectFireBase();
      }).catch(error => {
        this.navCtrl.setRoot(HomePage);
      })

    }).catch(error => {

    });
  }

  /**
   * sets title for Chat
   */
  setTitle() {
    this.title = this.data.Query[0].Patient;
    this.subTitle = 'Doctor: ' + this.data.Query[0].Doctor + ', Imp No.: ' + this.data.Query[0].ImpNo;
  }

  /**
   * extrats users name, ids & push tokens
   */
  setUsers() {
    return new Promise((resolve, reject) => {
      if (!_.isEmpty(this.data)) {
        this.data.User[0].Dentist.forEach(user => {
          //for typing
          //this.userTyping[user.LoginUserID] = user.UserName;

          //actual user
          this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };

          //badege user
          this.badgeUsers[user.LoginUserID] = true;

          //adding push notification device ID
          if (user.LoginUserID !== this.userID && user.RegisteredDeviceID.length === 36) {
            this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
          }
        });
        this.data.User[0].GroupUser.forEach(user => {
          //for typing
          this.userTyping[user.LoginUserID] = user.UserName;

          //actual user
          this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };

          //badege user
          this.badgeUsers[user.LoginUserID] = true;

          //adding push notification device ID
          if (user.LoginUserID !== this.userID && user.RegisteredDeviceID.length === 36) {
            this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
          }
        });
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

  sendTextMessage(event) {
    if (this.keyboardOpen) {
      event.preventDefault();
      this.sendClickKeepKeyboardOpened = true;
      this.messageInput.nativeElement.focus();
    } else {
      this.sendClickKeepKeyboardOpened = false;
    }

    if (_.isEmpty(this.message.trim())) {
      return false;
    }
    if (this.message) {
      let textMessage = this.message.trim().replace(/(?:\r\n|\r|\n)/g, '<br/>');

      this.sendToFirebase(textMessage);
    }
    this.message = '';
  }

  sendToFirebase(message: string = '', type: string = 'Text', url: any = false) {
    let readObject = {};
    readObject[this.userID] = firebase.database.ServerValue.TIMESTAMP;

    this.messagesRef.push({
      Message: message,
      CreateAt: firebase.database.ServerValue.TIMESTAMP,
      MessageType: type,
      HasAttachment: type !== 'Text',
      From: this.user.Customer,
      UserID: this.userID,
      LoginTypeID: this.user.LoginTypeID,
      Status: 0,
      URL: url,
      TicketNo: this.ticket,
      Read: readObject,
      BadgeCount: this.badgeUsers,
    }).then((messageFromFirebase) => {
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
    console.log('blur:' + this.keyboardOpen);
    if (this.keyboardOpen) {
      event.target.focus();
    } else {

    }
  }

  keyup(event) {
    this.setTyping(true);
  }

  onFocus(event) {
    console.log('focus');
    this.keyboardOpen = true;
    this.setTyping(true);
  }

  closeKeyboard(event) {
    console.log('touchstart:' + this.keyboardOpen);
    if (this.keyboardOpen) {
      this.keyboardOpen = false;
      this.setTyping(false);
      this.keyboard.close();
    }
  }

  setTyping(flag: boolean = true) {
    return new Promise((resolve, reject) => {
      if (this.typingRef) { //null check
        //setting value
        let currentTypingTime = moment().valueOf();
        if (flag) {
          if ((currentTypingTime - this.lastTypingTime) > 2500) { //only for true 
            this.lastTypingTime = currentTypingTime;
            this.typingRef.child(this.userID).set(firebase.database.ServerValue.TIMESTAMP).then(value => {
              resolve();
            });
          } else { //time diff not sufficient
            resolve();
          }
        } else {//for flase
          resolve();
        }
      } else {
        // reject('no ref');
      }
    });
  }

  setChatting(flag: boolean = true) {
    return new Promise((resolve, reject) => {
      if (this.chattingRef) { //null check
        this.chattingRef.child(this.userID).set(flag).then(value => {
          resolve();
        })
      } else {
        // reject('No ref');
      }
    });
  }

  scrollBottom(caller) {
    console.log('ScrollBottom: ' + caller);
    return new Promise((resolve, reject) => {
      if (typeof this.content !== 'undefined') {
        let animate = 300;
        this.contentResize();
        if (this.content && typeof this.content.scrollToBottom === 'function' && this.content._scroll) {
          const wait = this.content.isScrolling ? 150 : 1;
          setTimeout(() => {
            this.content.scrollToBottom(animate).then(value => {
              resolve(value);
            }).catch(error => {
              reject(error);
            });
          }, wait);
        }
      } else {
        reject('no content');
      }
    });
  }

  contentResize() {
    if (typeof this.content !== 'undefined' && typeof this.content.resize === 'function') {
      this.content.resize();
    }
  }

  captureImage(type: string = 'camera') {
    let options = this.cameraOptions;
    if (type === 'gallery') {
      options = this.galleryOptions;
    }
    this.camera.getPicture(options).then(url => {
      url = normalizeURL(url);
      this.uploadFile(url).then((data: string) => {
        if (data.indexOf('https') !== -1) {
          //sending to Firebase
          this.sendToFirebase('', 'Image', data);
        }
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
      this.recordMediaFile = this._media.create(this.dataDirectory.replace(/^file:\/\//, '') + this.recordFileName);

      this.vibration.vibrate(this.vibrateDuration);

      this.recordMediaFile.startRecord();
      this.recordingInProgress = true;
      //interval 
      this.recordInterval = setInterval(() => {
        this.recordTime++;
      }, 1000);
    }).catch(error => {
    });
  }

  stopRecording() {
    this.vibration.vibrate(this.vibrateDuration);

    //stop from Media
    this.recordMediaFile.stopRecord();
    this.recordMediaFile.release();

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
    let file = (this.dataDirectory + this.recordFileName);
    this.file.checkFile(this.dataDirectory, this.recordFileName).then(status => {
      if (status) {
        this.uploadFile(file).then(data => {
          //deleting file
          this.file.removeFile(this.dataDirectory, this.recordFileName);

          //sending to Firebase
          this.sendToFirebase('', 'Audio', data);
        }).catch(error => {
          //deleting file
          this.file.removeFile(this.dataDirectory, this.recordFileName).catch(error => {
          });
          this.events.publish('toast:error', error);
        });
      }
    }).catch(error => {
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

        fileTransfer.upload(file, Global.SERVER_URL + 'Communication/InsertChat_Attachement', options)
          .then((data) => {
            this.progressPercent = 0;
            //getting URL from XML

            if (data.response.indexOf('>') > -1) {
              resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
            } else {
              resolve(JSON.parse(data.response));
            }
          }, (err) => {
            this.progressPercent = 0;
            reject(err);
          });
        fileTransfer.onProgress((progress) => {
          if (progress.lengthComputable) {
            this.progressPercent = parseFloat((progress.loaded * 100 / progress.total).toFixed(2));
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
      headers: new Headers({
        'Content-Type': 'application/json',
        Connection: "close"
      }),
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
    if (Global.Push.OneSignal) {
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

      this._oneSignal.postNotification(notificationObj).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  sendMessageToServer(message) {
    // get live chat users
    var activeUserList = this.getLiveChatUsers();

    let fileName = null;
    let fileExtension = null;
    //if image or audio, sending its file name & extension
    if (message.URL) {
      fileExtension = message.URL.substring(message.URL.lastIndexOf('.') + 1);
      fileName = message.URL.substring(message.URL.lastIndexOf('/') + 1).replace('.' + fileExtension, '');
    }

    this.connection.doPost('Communication/InsertChat', {
      TicketNo: this.ticket,
      LiveUsersOnChat: activeUserList,
      Message: message.Message ? message.Message : '',
      MessageType: message.MessageType,
      URL: message.URL,
      FileName: fileName,
      FileExtension: fileExtension,
    }, false).then((response: any) => {
    });
  }

  openFile(file) {

  }

  doLeaving(messageNull) {
    this.setChatting(false).then(response => {
      this.chattingRef.off('value');
      this.newMessagesRef.off('child_added');
    }).catch(error => {

    });
    this.setTyping(false).then(response => {
      this.typingRef.off('value');
    }).catch(error => {

    });
    //no more status change read
    this.messagesRef.orderByChild('Status').off('child_changed');

    if (messageNull) {
      this.messages = null;
    }

    this.events.unsubscribe('user:ready');
  }

  getLiveChatUsers() {
    var activeUserList = '';
    let currentChattingUsers = this.userChatting;

    if (!_.isEmpty(currentChattingUsers)) {
      var filterUser = Object.keys(currentChattingUsers).filter(function (user) {
        return currentChattingUsers[user] !== false;
      });
      if (typeof filterUser !== 'undefined' && filterUser.length > 0) {
        activeUserList = filterUser.join();
      }
    }
    return activeUserList;
  }

  checkForNoMoreMessages() {
    if (this.messages && this.firstMessageKey && this.firstMessageKey === this.messages[0].key) {
      this.showNoMoreMessages = true;
    }
  }

  clearBadgeCountIfAny() {
    this.connection.doPost('Communication/UpdateChatStatus', {
      TicketNo: this.ticket,
      UserCode: this.userID
    }, false).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  isWithinRange(time) {
    let momentTime = moment(time).utc().local();
    if (momentTime.isValid()) {
      time = moment().valueOf() - momentTime.valueOf();
      return time <= 3000;
    }
    return false;
  }

  doFoldering() {
    this.file.checkDir(this.dataDirectory, this.ticket).then(exist => {

    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(this.dataDirectory, this.ticket, false).then(entry => { }).catch(error => { });
      }
    });
  }

  ionViewCanEnter() {
    if (this.network.type === 'none') {
      this.events.publish('toast:error', 'Pickup not available Offline');
    }
    return this.network.type !== 'none';
  }
}
