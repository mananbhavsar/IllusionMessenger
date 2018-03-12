import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content, NavParams, Platform, ModalController, Events, normalizeURL, ToastController, ActionSheetController } from 'ionic-angular';

import * as _ from 'underscore';
import * as mime from 'mime-types';

import * as firebase from 'firebase';
import * as moment from 'moment';

import { BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/switchMap';

import { ConnectionProvider } from '../../providers/connection/connection';
import { NotificationsProvider } from "../../providers/notifications/notifications";
import { UserProvider } from '../../providers/user/user';
import { DateProvider } from './../../providers/date/date';

import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { CommonProvider } from "../../providers/common/common";
import { TranslateService } from "@ngx-translate/core";
import { FileOpsProvider } from "../../providers/file-ops/file-ops";

import { Global } from '../../app/global';

import { Storage } from '@ionic/storage';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { Network } from '@ionic-native/network';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
import { VideoEditor } from '@ionic-native/video-editor';

import { LogoutPage } from '../logout/logout';
import { retry } from 'rxjs/operators/retry';
import { HomePage } from '../home/home';
import { CloseTopicPage } from './../topic/close-topic/close-topic';
import { ChatReadModalPage } from "../../pages/chat/chat-read-modal/chat-read-modal";
import { SavedMediaPage } from "../../pages/chat/saved-media/saved-media";
import { ChatOptionsPage } from "../chat-options/chat-options";

import { Modal } from 'ionic-angular/components/modal/modal';
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('messageInput') messageInput: any;
  global: any = Global;

  data: any = {};

  topicID: string = null;
  topicCode: string = null;
  groupID: string = null;
  groupCode: string = null;

  title: string = 'loading';
  isIOS: boolean = false;
  isCordova: boolean = false;
  keyboardHeight: number = 0;

  pathIdentifier: string = '';
  basePath: string = '';
  path: string = '';

  messagesRef: firebase.database.Reference;
  newMessagesRef: firebase.database.Query;
  messages: Array<any> = [];
  offlineMessages: Array<any> = [];
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
  chattingInterval = null;

  lastTypingTime: number = 0;

  scrollingBottom: boolean = false;

  user: any = {};
  userID: string = null;
  chatUsers: any = {};

  lastcalled: boolean = false;
  readyForPagination: boolean = false;
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
    mediaType: this.camera.MediaType.ALLMEDIA
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
  hasInternet: boolean = true;
  lastReadingTime: number = 0;
  offlineMessageText: string = 'The message cannot be downloaded as there is\'nt any internet connection';

  myLanguage: string = null;
  chatLanguages: Array<string> = [];
  translating: boolean = false;
  headerButtons: Array<any> = [];

  doctor_translate: string = 'Doctor';
  impression_no_translate: string = 'Imp No.';
  camera_translate: string = 'Camera';
  photo_video_library_translate: string = 'Photo & Video Library';
  audio_tranlate: string = 'Audio';
  video_translate: string = 'Video';
  cancel_translate: string = 'Cancel';
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
    private _media: Media,
    public actionSheetCtrl: ActionSheetController,
    private _toastCtrl: ToastController,
    private vibration: Vibration,
    private keyboard: Keyboard,
    private _network: Network,
    private _firebaseTransaction: FirebaseTransactionProvider,
    private videoCapturePlus: VideoCapturePlus,
    private videoEditor: VideoEditor,
    private elementRef: ElementRef,
    private modal: ModalController,
    private common: CommonProvider,
    public http: Http,
    private translate: TranslateService,
    private _notifications: NotificationsProvider,
    private _fileOps: FileOpsProvider,
    private _date: DateProvider,
  ) {
    //init
    this.isIOS = this.platform.is('ios');
    this.isCordova = this.platform.is('cordova');
    this.global = Global;

    this.topicID = this.navParams.data.topicID;
    this.groupID = this.navParams.data.groupID;

    this._fileOps.getDataDirectory().then(path => {
      this.dataDirectory = path;
    }).catch(error => {
    });

    this.keyboard.onKeyboardShow().subscribe((data) => {
      this.scrollBottom('keyboard show').catch(error => { });
    });
    this.keyboard.onKeyboardHide().subscribe((data) => {
      this.contentResize();
      if (this.sendClickKeepKeyboardOpened === false) {
        this.closeKeyboard(null);
      } else {
        this.sendClickKeepKeyboardOpened = false;
      }
      this.scrollBottom('keyboard hide').catch(error => { });
    });

    this.hasInternet = this._network.type !== 'none';
    this.events.subscribe('network:online', () => {
      this.hasInternet = true;
      this.messagesLoaded = this.messages.length > 0;

      this.setFirebaseRef();
      this.listenToFirebaseEvents(true);
      //make all unread count of this topics to zero
      this.clearBadgeCountIfAny();
    });
    this.events.subscribe('network:offline', () => {
      this.hasInternet = false;
    });
  }

  setFirebaseRef() {
    //actual chat ref
    this.messagesRef = firebase.database().ref(this.basePath + 'Chat');

    //for typying object
    this.typingRef = firebase.database().ref(this.basePath + 'Typing');

    //for chatting: This will prevent notification from same chat
    this.chattingRef = firebase.database().ref(this.basePath + 'Chatting');

    //keyboard disable
    this.keyboard.disableScroll(true);
  }

  connectFireBase() {
    this.setFirebaseRef();
    //actual data/messages
    //getting first n message
    this.messagesRef.orderByKey().limitToLast(this.messageLimit).once('value', (snapshot) => {
      let numberOfMessages = 0;
      let ignoredStart = false;

      let messages = snapshot.val();

      for (let key in messages) {
        let message = messages[key];
        message['key'] = key;
        this.pushItem(message, true);
      }

      //checking if no more messages ie. first message key is same at 0 index
      this.checkForNoMoreMessages();

      setTimeout(() => {
        this.messagesLoaded = true;
        setTimeout(() => {
          this.scrollBottom('first time message load').then(status => {
            this.readyForPagination = true;
            this.saveOfflineData();
          }).catch(error => { });
        }, 100);
      });


      //for new message
      this.newMessagesRef = this.messagesRef.orderByKey();

      this.listenToFirebaseEvents(ignoredStart);
    });

    //first message
    this.messagesRef.orderByKey().limitToFirst(1).once('value', (snapshot) => {
      let message = snapshot.val();
      if (message) {
        this.firstMessageKey = Object.keys(message)[0];
        this.checkForNoMoreMessages();
        //saving first message key
        this.data.firstMessageKey = this.firstMessageKey;
        this.setOfflineTopicList(this.data);
      }
    });
  }

  listenToFirebaseEvents(ignoredStart) {
    if (Global.getActiveComponentName(this.navCtrl.getActive()) !== 'ChatPage') {
      return;
    }
    //new Message
    if (this.messagesKeys.length > 0) {
      let lastMessageKey = this.messagesKeys[this.messagesKeys.length - 1];
      if (this.newMessagesRef) {
        this.newMessagesRef.off('child_added');
      }
      this.newMessagesRef = this.messagesRef.orderByKey().startAt(lastMessageKey);
    } else { //empty messages, listening to actual first

    }

    this.newMessagesRef.on('child_added', (snapshot) => {
      let message = snapshot.val();

      if (ignoredStart || this.messagesKeys.length === 0) {
        if (this.messages && message) {
          message['key'] = snapshot.key;

          if (this.messagesKeys.indexOf(snapshot.key) === -1) {
            this.pushItem(message);
            this.saveOfflineData();
          }
          if (this.firstMessageKey === null) {
            this.firstMessageKey = snapshot.key;
            this.checkForNoMoreMessages();
            //saving first message key
            this.data.firstMessageKey = this.firstMessageKey;
            this.setOfflineTopicList(this.data);
          }

          setTimeout(() => {
            setTimeout(() => {
              this.scrollBottom('new message').catch(error => { });
            });
          }, 250);
        } else {
        }
        ignoredStart = true;
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
        this.offlineMessages[index].Status = message.Status;
        this.saveOfflineData();
      }
    });

    //listening to read change event
    this.messagesRef.orderByChild('Read').on('child_changed', (snapshot) => {
      let message = snapshot.val();
      let index = this.messagesKeys.indexOf(snapshot.key);
      if (index > -1 && typeof this.messages !== 'undefined' && typeof this.messages[index] !== 'undefined') {
        this.messages[index].Read = message.Read;
        this.offlineMessages[index].Read = message.Read;
        this.saveOfflineData();
      }
    });

    //event to listed others typing
    this.typingRef.on('value', snapshot => {
      this.userTyping = snapshot.val();
      if (this.typingRefLoaded) {
        setTimeout(() => {
          this.scrollBottom('typing ref init').catch(error => { });
        }, 100);
      }
      this.typingRefLoaded = true;
    });

    this.chattingRef.on('value', snapshot => {
      this.userChatting = snapshot.val();
    });

    this.setChatting(true);
    //updating chatting time at 1 sec interval		
    if (this.chattingInterval) {
      clearInterval(this.chattingInterval);
      this.chattingInterval = null;
    }
    this.chattingInterval = setInterval(() => {
      this.setChatting(true);
    }, 1000);
  }

  paginate(paginator) {
    if (!this.messagesLoaded || !this.readyForPagination) {
      setTimeout(() => {
        paginator.complete();
      }, 500);
      return;
    }
    if (this.messages === null || this.messages.length === 0 || this.messages[0].key === this.firstMessageKey) {
      this.showNoMoreMessages = true;
      paginator.enable(false);
      this.goToElement('').then(() => {
      }).catch(() => { });
      return;
    }

    console.log('paginate');
    //paging prev 10 messages
    if (this.messagesRef) {
      if (this.messages && this.messages.length > 0 && typeof this.messages[0] !== 'undefined') {
        this.messagesRef.orderByKey().limitToLast(this.messageLimit).endAt(this.messages[0].key).once('value', (snapshot) => {
          let messages = [];
          let lastMessageKey = null;
          if (this.messagesKeys.length) {
            lastMessageKey = this.messagesKeys[this.messagesKeys.length - 1];
          }
          snapshot = snapshot.val();
          if (snapshot) {
            //removing first
            delete snapshot[this.messages[0].key];
            //adding key
            for (let key in snapshot) {
              let message = snapshot[key];
              message['key'] = key;
              messages.push(message);
              lastMessageKey = key;
            }
            //checking
            if (messages.length) {
              //reverse to added from start
              messages.reverse();
              //adding to messages list
              messages.forEach((message) => {
                if (this.messagesKeys.indexOf(message.key) === -1) {
                  this.pushItem(message, false);
                }
              });
              this.saveOfflineData();
            }
            this.contentResize();
          }
          if (lastMessageKey) {
            this.goToElement('message-' + lastMessageKey).then(() => {
              paginator.complete();
            }).catch(() => {
              paginator.complete();
            })
          }
        });
      } else {
        paginator.enable(false);
        paginator.complete();
      }
    } else {
      paginator.enable(false);
      paginator.complete();
    }
  }

  initUser() {
    //setting current User
    this.user = this.connection.user;
    this.userID = this.user.LoginUserID;
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
      //make all unread count of this topic to zero
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
       * checking if chatting with same TopicCode
       * if not then show in toast with button
       */
      if (this.topicCode !== notification.additionalData.params.topicCode) {
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

  doTranslate() {
    //loading
    this.translate.get('Common._Loading_').subscribe(translated => {
      if (this.title === 'loading') {
        this.title = translated;
      }
    });
    //doctor
    this.translate.get('CommunicationPage._Doctor_').subscribe(translated => {
      this.doctor_translate = translated;
    });
    //impression
    this.translate.get('ChatScreen._ImpressionNo_').subscribe(translated => {
      this.impression_no_translate = translated;
    });
    //camera
    this.translate.get('ChatScreen._Camera_').subscribe(translated => {
      this.camera_translate = translated;
    });
    //photo & video
    this.translate.get('ChatScreen._CameraAndVideo_').subscribe(translated => {
      this.photo_video_library_translate = translated;
    });
    //video
    this.translate.get('ChatScreen._Videos_').subscribe(translated => {
      this.video_translate = translated;
    });
    //audio
    this.translate.get('ChatScreen._Audios_').subscribe(translated => {
      this.audio_tranlate = translated;
    });
    //cancel
    this.translate.get('Common._Cancel_').subscribe(translated => {
      this.cancel_translate = translated;
    });

  }

  ionViewDidEnter() {
    this.doTranslate();
    //checking if user logged in
    if (!_.isEmpty(this.connection.user)) {
      this.initUser();
      //get Chat info before we load
      this.initData().then(status => {
        this.listenToEvents();
      }).catch(error => {
        console.log(error);
        this.navCtrl.pop();
      });
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
    return new Promise((resolve, reject) => {
      if (this._network.type !== 'none') {
        let params = {
          TopicID: this.topicID,
          GroupID: this.groupID,
        };
        this.connection.doPost('Chat/GetTopicDetail', params).then((response: any) => {
          this.data = response.Data;
          this.data.GroupID = this.groupID;

          this.headerButtons = [{ icon: 'more', name: 'more-option' }];
          /*if (this.data.StatusID === 1) {
            this.headerButtons.push({ icon: 'close', name: 'options' });
          }*/

          console.log(this.data);
          this.topicCode = this.data.TopicCode;
          this.groupCode = this.data.GroupCode;
          this.setPath();
          this.setOfflineTopicList(this.data);
          if (response.FireBaseTransaction) {
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
          }
          this.setTitle();
          this.setUsers().then((chatUsersList) => {
            this.connectFireBase();
            resolve(true);
          }).catch(error => {
            this.navCtrl.setRoot(HomePage);
            reject(false);
          })

        }).catch(error => {
          reject(error);
        });
      } else {
        this.storage.get('OfflineTopics').then(topicCodes => {
          if (_.isEmpty(topicCodes)) {
            topicCodes = {};
          }
          if (!(this.topicCode in topicCodes) || _.size(topicCodes[this.topicCode]) === 0) {
            this.events.publish('toast:create', this.offlineMessageText);
            reject(false);
            return;
          }
          this.data = topicCodes[this.topicCode];

          this.setTitle();
          this.setUsers().then(chatUsersList => {
            this.initOffline();
            resolve(true);
          }).catch(error => {
            reject(error);
          });
        });
      }
    });
  }


  setPath() {
    this.pathIdentifier = this.groupCode + '/' + this.topicCode;

    this.basePath = 'Communications/' + this.pathIdentifier + '/';

    //making folder with this topics code to save files
    this.doFoldering();
  }

  /**
   * sets title for Chat
   */
  setTitle() {
    this.title = this.data.Topic;
  }

  getSubTitle() {
    let subTitle = '';

    let now = moment();
    let creationDate = this._date.fromServerFormat(this.data.CreationDate_UTC);
    let dueDate = this._date.fromServerFormat(this.data.DueDate_UTC);
    let closedDate = this._date.fromServerFormat(this.data.CloseDatime_UTC);

    //creation date
    if (creationDate.isValid() && this.data.StatusID !== 0) {
      subTitle += 'Created: ' + creationDate.fromNow();
    }
    //due
    if (dueDate.isValid() && this.data.StatusID === 1) {
      subTitle += ', ' + 'Due: ';
      if ((now.toDate().getTime() - dueDate.toDate().getTime()) > 0) {
        subTitle += dueDate.from(now);
      } else {
        subTitle += dueDate.from(now);
      }
    }
    //closed 
    if (closedDate.isValid() && this.data.StatusID === 2) {
      subTitle += ', ' + 'Closed: ' + closedDate.from(now);
    }
    return subTitle;
  }

  /**
   * extrats users name, ids & push tokens
   */
  setUsers() {
    return new Promise((resolve, reject) => {
      if (this.data && this.data.User.length) {
        this.data.User.forEach(user => {
          //for typing
          this.userTyping[user.UserID] = user.User;

          //actual user
          this.chatUsers[user.UserID] = { Name: user.User, UserID: user.UserID };

          //adding lang
          this.addLang(user);
        });
        resolve(this.chatUsers);
      } else {
        reject('No User');
      }
    });
  }

  addLang(user) {
    if (!('MyLanguage' in user)) {
      user['MyLanguage'] = 'en';
    }
    //adding to group languages
    if (this.chatLanguages.indexOf(user.MyLanguage) === -1) {
      this.chatLanguages.push(user.MyLanguage);
    }
    //setting my own lang
    if (user.UserID === this.userID) {
      this.myLanguage = user.MyLanguage;
    }
  }

  openUploadOptions() {
    const actionSheet = this.actionSheetCtrl.create({
      title: null,
      cssClass: 'text-left',
      buttons: [
        {
          text: this.camera_translate,
          icon: 'ios-camera-outline',
          handler: () => {
            this.captureImage('camera');
          }
        },
        {
          text: this.photo_video_library_translate,
          icon: 'ios-image-outline',
          handler: () => {
            this.captureImage('gallery');
          }
        },
        {
          text: this.audio_tranlate,
          icon: 'ios-mic-outline',
          handler: () => {
            this.captureAudio(0);
          }
        },
        {
          text: this.video_translate,
          icon: 'ios-videocam-outline',
          // role: 'desructive',
          handler: () => {
            this.captureVideo(60);
          }
        },
        {
          text: this.cancel_translate,
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

    if (this.translating) {
      return;
    }

    if (this.message.trim() === '') {
      return false;
    }
    if (this.message) {
      let textMessage = this.message.trim().replace(/(?:\r\n|\r|\n)/g, '<br/>');

      this.translating = true;
      this.sendToFirebase(textMessage).then(data => {
        this.translating = false;
        this.message = '';
      }).catch(error => {
        console.log(error);
        this.translating = false;
        this.message = '';
      });
    } else {
      this.message = '';
    }
  }

  sendToFirebase(message: string = '', type: string = 'Text', url: any = false) {
    return new Promise((resolve, reject) => {
      let readObject = {};
      readObject[this.userID] = firebase.database.ServerValue.TIMESTAMP;

      this.translateMessage(message, type).then(translatedMessages => {
        let values = {
          Message: message,
          Translation: translatedMessages,
          MessageLanguage: this.myLanguage,
          CreateAt: firebase.database.ServerValue.TIMESTAMP,
          MessageType: type,
          HasAttachment: type !== 'Text',
          From: this.user.LoginUser,
          UserID: this.userID,
          Status: 0,
          URL: url,
          Read: readObject,
          TopicCode: this.topicCode,
        };

        this.messagesRef.push(values).then((messageFromFirebase) => {
          let data = {
            Message: message,
            MessageType: type,
            URL: url,
            key: messageFromFirebase.key,
            Translation: translatedMessages,
            MessageLanguage: this.myLanguage,
          };

          //send to Server
          this.sendMessageToServer(data);
          resolve(data);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  translateMessage(message, type) {
    return new Promise((resolve, reject) => {
      if (type === 'Text') {
        let translation = {};
        //adding mine which is original
        translation[this.myLanguage] = message;
        //checking if all user knows only one lang, hence no need of translating
        if (this.chatLanguages.length < 2) {
          resolve(translation);
        } else {
          //looping over each lang and getting translation
          this.chatLanguages.forEach(lang => {
            //not translating my lang
            if (lang !== this.myLanguage) {
              this.http.post('https://translation.googleapis.com/language/translate/v2?key=' + Global.Translate.key, {
                q: message,
                source: this.myLanguage,
                target: lang,
              }).map((response: Response) => response.json()).subscribe(response => {
                if (response.data) {
                  translation[lang] = response.data.translations[0].translatedText;
                } else {
                  translation[lang] = message;
                }
                if (_.size(translation) === this.chatLanguages.length) {
                  resolve(translation);
                }
              }, error => {
                reject(error);
              });
            }
          })
        }
      } else {
        resolve({});
      }
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
        let currentTypingTime = moment().utc().valueOf();
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
        if (flag) {
          this.chattingRef.child(this.userID).set(firebase.database.ServerValue.TIMESTAMP).then(value => {
            resolve();
          });
        } else {
          resolve(true);
        }
      } else {
        // reject('No ref');
      }
    });
  }

  scrollBottom(caller) {
    console.log('ScrollBottom: ' + caller);
    return new Promise((resolve, reject) => {
      if (Global.getActiveComponentName(this.navCtrl.getActive()) !== 'ChatPage') {
        reject(false);
        return;
      }
      if (this.scrollingBottom) {
        reject(false);
        return;
      }
      this.scrollingBottom = true;
      if (typeof this.content !== 'undefined') {
        let animate = 300;
        this.contentResize();
        if (this.content && typeof this.content.scrollToBottom === 'function' && this.content._scroll) {
          const wait = this.content.isScrolling ? 150 : null;
          setTimeout(() => {
            try {
              this.content.scrollToBottom(animate).then(value => {
                this.scrollingBottom = false;
                resolve(value);
              }).catch(error => {
                this.scrollingBottom = false;
                reject(error);
              });
            } catch (error) {
              this.scrollingBottom = false;
              reject(error);
            }
          });
        }
      } else {
        this.scrollingBottom = false;
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
      let mimeType = mime.lookup(url);

      //checking if video of image
      if (mimeType.indexOf('image') > -1) {//image
        url = normalizeURL(url);
        this.uploadFile(url).then((data: string) => {
          if (data.indexOf('https') !== -1) {
            //sending to Firebase
            this.sendToFirebase('', 'Image', data);
          }
        }).catch(error => {
          this.events.publish('toast:error', error);
        });
      } else if (mimeType.indexOf('video') > -1) {
        this.uploadVideo(url);
      }
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

  captureVideo(duration) {
    const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: false,
      duration: duration,
    }

    this.videoCapturePlus.captureVideo(options).then((mediafile: MediaFile[]) => {
      if (mediafile.length > 0) {
        let url = mediafile[0].fullPath;
        this.uploadVideo(url);
      }
    }, error => {
      this.events.publish('toast:error', error.message);
    }).catch(error => {
      console.log(error);
    });
  }

  uploadVideo(url) {
    url = normalizeURL(url);
    this.uploadFile(url).then((data: string) => {
      if (data.indexOf('https') !== -1) {
        //sending to Firebase
        this.sendToFirebase('', 'Video', data);
      }
    }).catch(error => {
      this.events.publish('toast:error', error);
    });
  }

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        this.progressPercent = 0;

        const fileTransfer: FileTransferObject = this.transfer.create();
        let options = this.setFileOptions(file);

        fileTransfer.upload(file, Global.SERVER_URL + 'Chat/InsertChat_Attachement', options)
          .then((data) => {
            this.progressPercent = 0;
            //getting URL from XML
            console.log(data);
            if (data.response.indexOf('http') === -1) {
              reject(data);
            } else if (data.response.indexOf('>') > -1) {
              resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
            } else {
              resolve(JSON.parse(data.response));
            }
          }, (err) => {
            console.log(err);
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

    let params = {
      UserID: this.user.UserID,
      TopicID: this.topicID,
      GroupID: this.groupID,
      TopicCode: this.topicCode,
      FileName: fileName,
      FileExtension: fileExtension,
    };

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileName,
      mimeType: mime.lookup(fileExtension),
      chunkedMode: false,
      // headers: new Headers({
      //   // 'Content-Type': 'application/json',
      //   // Connection: "close",
      //   FileName: fileName,
      //   FileExtension: fileExtension,
      // }),
      params: params,
    }

    return options;
  }


  sendPushNotification(message, users: Array<object>) {
    if (_.isEmpty(message.Translation)) {
      message.Translation = { en: message.Message };
    }
    users.forEach((user: any) => {

      let contents = message.Translation;

      //checking if Image then adding image notification
      if (message.MessageType === 'Image') {
        contents.en = '📷 Image';
        contents.fr = '📷 Image';
      } else if (message.MessageType === 'Video') {
        contents.en = '📹 Video Message';
        contents.fr = '📹 Video Message';
      } else if (message.MessageType === 'Audio') {
        contents.en = '🎤 Voice Message';
        contents.fr = '🎤 Voice Message';
      }

      this._notifications.send(user.DeviceID, user.title, contents, user.Badge, 'ChatPage', this.topicCode, message.URL).catch(error => { });
    });
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

    let params = {
      LiveUsersOnChat: activeUserList,
      ChattingUsers: this.common.build_query(this.userChatting),
      TimeOnPhone: moment().utc().valueOf(),
      Message: message.Message ? message.Message : '',
      MessageType: message.MessageType,
      URL: message.URL,
      FileName: fileName,
      FileExtension: fileExtension,
      TopicCode: this.topicCode,
      TopicID: this.topicID,
      GroupID: this.groupID,
    };

    this.connection.doPost('Chat/InsertChat', params, false).then((response: any) => {
      //send Push
      if (Global.Push.OneSignal) {
        this.sendPushNotification(message, response.OneSignalTransaction);
      }
      //managing firebase count
      if (response.FireBaseTransaction) {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
      }
    }).catch(error => {

    });
  }

  openFile(file) {

  }

  doLeaving(messageNull) {
    if (this.chattingInterval) {
      clearInterval(this.chattingInterval);
      this.chattingInterval = null;
    }
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
    if (this.messagesRef) {
      this.messagesRef.orderByChild('Read').off('child_changed');
      this.messagesRef.orderByChild('Status').off('child_changed');
    }

    if (messageNull) {
      this.messages = [];
      this.messagesKeys = [];
      this.offlineMessages = [];
      this.events.unsubscribe('platform:onPause');
      this.events.unsubscribe('platform:onResumed');
      this.events.unsubscribe('notification:chat');
      this.events.unsubscribe('network:online');
      this.events.unsubscribe('network:offline');
    }

    this.events.unsubscribe('user:ready');
    this.keyboard.disableScroll(false);
  }

  getLiveChatUsers() {
    var activeUserList = '';
    let currentChattingUsers = [];
    let nowTime = moment().utc().valueOf();

    if (!_.isEmpty(this.userChatting)) {
      for (let userID in this.userChatting) {
        let value = this.userChatting[userID];
        //checking if boolean, older version
        if (typeof value === 'boolean') {
          //if true
          if (value) {
            currentChattingUsers.push(userID);
          }
        } else {
          //checking if now is less than a sec which can be considered as online & chatting
          if ((nowTime - value) <= 1000) {
            currentChattingUsers.push(userID);
          }
        }
      }
      activeUserList = currentChattingUsers.join(',');
    }
    return activeUserList;
  }

  checkForNoMoreMessages() {
    if (this.messages && this.firstMessageKey && this.firstMessageKey === this.messages[0].key) {
      setTimeout(() => {
        this.showNoMoreMessages = true;
        this.contentResize();
      })
    }
  }

  clearBadgeCountIfAny() {
    if (this.messages.length) {

      let params = {
        UserCode: this.userID,
        TopicCode: this.topicCode,
        TopicID: this.topicID,
        GroupID: this.groupID,
      };

      this.connection.doPost('Chat/UpdateChatStatus', params, false).then((response: any) => {
        this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { })
      }).catch(error => {
        console.log(error);
      });
    }
  }

  getName(userID) {
    if (!_.isEmpty(this.chatUsers) && userID in this.chatUsers) {
      return this.chatUsers[userID].Name;
    }
    return '';
  }

  isWithinRange(time) {
    let momentTime = moment(time).utc().local();
    if (momentTime.isValid()) {
      time = moment().utc().valueOf() - momentTime.valueOf();
      return time <= 3000;
    }
    return false;
  }

  doFoldering() {
    this.file.checkDir(this.dataDirectory, this.topicCode).then(exist => {

    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(this.dataDirectory, this.topicCode, false).then(entry => { }).catch(error => { });
      }
    });
  }

  initOffline() {
    return new Promise((resolve, reject) => {
      this.storage.get('OfflineMessages-' + this.topicCode).then(messages => {
        if (_.isEmpty(messages)) {
          messages = {};
        }
        if (_.size(messages) === 0) {
          this.events.publish('toast:create', this.offlineMessageText);
          reject(false);
          return;
        }
        //init List
        for (let key in messages) {
          this.pushItem(messages[key], false);
        }
        //for first message
        if (this.messages.length) {
          this.firstMessageKey = this.messagesKeys[0];
          this.checkForNoMoreMessages();
        }
        //saveOffline
        this.saveOfflineData().then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  pushItem(item, pushFlag: boolean = true) {
    //converting time in milisec
    if (isNaN(item.CreateAt)) {
      let time = moment(item.CreateAt);
      if (time.isValid()) {
        item.CreateAt = time.valueOf();
      }
    }

    let key = item.key;
    let index = this.messagesKeys.indexOf(key);
    if (index === -1) {
      if (pushFlag) {
        index = this.messages.push(item);
        //adding TopicCode
        this.messagesKeys.push(key);
        //offline messages
        this.offlineMessages.push(item);
      } else {
        index = this.messages.unshift(item);
        //adding TopicCode
        this.messagesKeys.unshift(key);
        //offline messages
        this.offlineMessages.unshift(item);
      }
    }
    return index;
  }


  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.set('OfflineMessages-' + this.topicCode, this.offlineMessages).then(status => {
        resolve(status);
      }).catch(error => {
        reject(error);
      });
    });
  }

  setOfflineTopicList(data) {
    return new Promise((resolve, reject) => {
      this.storage.get('OfflineTopics').then(topicCodes => {
        if (_.isEmpty(topicCodes)) {
          topicCodes = {};
        }
        topicCodes[this.topicCode] = data;

        this.storage.set('OfflineTopics', topicCodes).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  openReading(event, message) {
    let time = new Date().getTime();
    if ((time - this.lastReadingTime) < 1000) {
      return;
    }
    this.lastReadingTime = time;
    let params = {
      message: message,
      chatUsers: this.chatUsers,
      topicID: this.topicID,
      topicCode: this.topicCode,
      groupID: this.groupID,
      groupCode: this.groupCode,
      userID: this.userID,
    };
    let chatReadModal = this.modal.create(ChatReadModalPage, params);
    chatReadModal.onDidDismiss(data => {

    });
    chatReadModal.present();
  }

  openChatOptions() {
    let params = {
      user: this.data,
      path: this.dataDirectory,
      folder: this.topicCode,

    }
    let chatOptionModal = this.modal.create(ChatOptionsPage, params);
    chatOptionModal.onDidDismiss(data => {

    });
    chatOptionModal.present();
  }

  openSavedMedia(event) {
    switch (event.name) {
      case 'open-media':
        let params = {
          path: this.dataDirectory,
          folder: this.topicCode,
        };
        let savedMediaModal = this.modal.create(SavedMediaPage, params);
        savedMediaModal.onDidDismiss(data => {

        });
        savedMediaModal.present();
        break;

      case 'options':
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Do You Want to Close ',
          buttons: [
            {
              text: 'Close it now!',
              role: 'destructive',
              handler: () => {
                this.connection.doPost('Chat/UpdateTopicStatus', {
                  GroupID: this.groupID,
                  TopicID: this.topicID,
                  StatusID: 2
                }).then((response: any) => {
                  this.data.StatusID = 2;
                  this.headerButtons.pop();

                  if (response.Data.Message) {
                    this.events.publish('toast:create', response.Data.Message);
                  }
                  //firebase 
                  if (response.FireBaseTransaction) {
                    this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => { }).catch(error => { });
                  }

                  //send notification
                  if (response.OneSignalTransaction) {
                    this._notifications.sends(response.OneSignalTransaction, 'ChatPage', {
                      topicID: this.topicID,
                      groupID: this.groupID,
                    });
                  }
                }).catch(error => {
                  console.log(error);
                });
              }
            }, {
              text: 'Cancel',
              role: 'cancel',
            }]
        });

        actionSheet.present();
        break;
    }
  }

  goToElement(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let element = document.getElementById(id)
        if (element) {
          let yOffset = element.offsetTop;
          this.content.scrollTo(0, yOffset).then(() => {
            resolve();
          }).catch(error => {
            reject();
          })
        }
      });
    });
  }
}
