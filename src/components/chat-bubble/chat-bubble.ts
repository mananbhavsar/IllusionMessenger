import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Platform, NavController, Events, normalizeURL } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'underscore';
import * as mime from 'mime-types';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Network } from '@ionic-native/network';

import { CommonProvider } from "../../providers/common/common";
import { TranslateService } from "@ngx-translate/core";

import * as moment from 'moment';

import 'moment/locale/fr';
import 'moment/locale/en-gb';

import { Global } from '../../app/global';
import { retry } from 'rxjs/operator/retry';

import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html',
})
export class ChatBubbleComponent {
  element: any = null;
  @Input() message: any;
  @Input() userID: string;
  @Input() ticket: string;
  @Input() users: any = {};
  @Input() LoginTypeID: number = 0;
  @Input() myLanguage: string = 'en';

  global: any = Global;

  basePath: string = '';
  messagePath: string = '';
  statusRef = null;
  dataDirectory: string = null;
  downloadDirectory: string = null;
  selectedTrack: number;
  isCordova: boolean = false;

  not_available_offline_translate: string = 'Not available in Offline';
  constructor(
    public angularFireDB: AngularFireDatabase,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    private navCtlr: NavController,
    private streamingMedia: StreamingMedia,
    private _imageViewerController: ImageViewerController,
    private _elementRef: ElementRef,
    private common: CommonProvider,
    private network: Network,
    private translate: TranslateService,
  ) {
    this.global = Global;
    this.isCordova = this.platform.is('cordova');

    //listening to page change event to pause audio
    this.navCtlr.viewWillLeave.subscribe(event => {

    });
    this.events.subscribe('platform:onPause', (event) => {

    });

  }

  doTranslate() {
    this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(translated => {
      this.not_available_offline_translate = translated;
    });
  }

  ngOnInit() {
    this.doTranslate();
    this.basePath = 'Communications/' + this.ticket + '/';
    this.messagePath = this.basePath + 'Chat/' + this.message.key;

    this.doReading();

    this.common.getDataDirectory().then((path: string) => {
      this.dataDirectory = path;

      this.downloadDirectory = this.dataDirectory + this.ticket + '/';
      this.createIfNotExist();

      this.processFile();
    }).catch(error => {
      console.log(error);
    });

    // this.processBadgeCount();
  }

  ngOnDestroy() {
    this.events.unsubscribe('platform:onPause');
    this.events.unsubscribe('message:file:deleted');
  }

  doReading() {
    //only if active page is chat
    if (Global.getActiveComponentName(this.navCtlr.getActive()) === 'ChatPage') {
      //adding myself to read list
      if (this.message.Read && this.userID in this.message.Read) {//already read by me
        if (this.message.Status !== 2) { // & not 2 already
          this.updateStatus();
        }
      } else {
        //now making it read by me
        this.angularFireDB.object(this.messagePath + '/Read/' + this.userID).set(firebase.database.ServerValue.TIMESTAMP).then(result => {
          if (this.message.Status !== 2) { // & not 2 already
            this.updateStatus();
          }
        });
      }
    }
  }


  /**
   * update status of message if sent by other user LoginTypeID
   * 1: if 
   * 2: if read by all
   */
  updateStatus() {
    /**
     * if sent by 
     * 1. Dentist
     *  1.1 even if single GroupUser reads, make it 2
     * 2. Group User
     *  2.1 If any single dentist read, make it 1
     *  2.2 read by all dentist & group users, make it 2
     */
    if (!('UserID' in this.message)) {
      this.message['UserID'] = 0;
    }
    if (!('LoginTypeID' in this.message)) {
      this.message['LoginTypeID'] = 0;
    }
    if (this.message.UserID !== this.userID) { //avoid same user type also
      let status = -1;
      //sent by 
      if ([Global.LoginType.Doctor, Global.LoginType.Parent].indexOf(this.message.LoginTypeID) > -1 && this.LoginTypeID === Global.LoginType.Group) { //dentist & read by group user
        status = 2;
      } else if ([Global.LoginType.LabGuru, Global.LoginType.Group].indexOf(this.message.LoginTypeID) > -1) { //sent by group user
        //checking if read by all
        if (_.size(this.message.Read) === _.size(this.users)) {
          status = 2;
        } else if ([Global.LoginType.Doctor, Global.LoginType.Parent].indexOf(this.message.LoginTypeID) === -1 && this.message.Status === 0) { //read by any dentist
          status = 1;
        }
      }
      if (status > 0) {
        this.angularFireDB.object(this.messagePath + '/Status').set(status);
      }
    }
  }

  openFile() {
    if (this.network.type === 'none') {
      this.events.publish('toast:error', this.not_available_offline_translate);
      return;
    }
    if (this.message.URL) {
      if (this.isCordova) {
        let file = this.message.nativeURL || this.message.URL;
        //if already downloading
        if (this.message.downloading) {
          return;
        }
        let wasDownloaded = this.message.downloaded;
        this.check(file).then(entry => {
          if (wasDownloaded) {
            switch (this.message.MessageType) {
              case 'Image':
                this.openImage();
                break;

              case 'Audio':
                this.openAudio();
                break;

              case 'Video':
                this.openVideo();
                break;
            }
          }

        }).catch(error => {
          console.log(error);
        });
      }
    }
  }

  openImage() {
    this.element = this._elementRef.nativeElement.querySelector('#message-image-' + this.message.key);
    let image = this._imageViewerController.create(this.element);
    image.present();

  }

  openAudio() {
    let options = {
      successCallback: () => { console.log('Audio played') },
      errorCallback: (e) => { console.log('Error streaming') },
      shouldAutoClose: true,
      bgImage: 'https://s3-ap-southeast-1.amazonaws.com/eiosys/images/equilizer.gif',
    };
    this.streamingMedia.playAudio(this.message.nativeURL, options);
  }

  openVideo() {
    let options = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => {
        console.log(e);
        return false;
      },
      shouldAutoClose: true,
    };
    this.streamingMedia.playVideo(this.message.nativeURL, options);
  }

  check(file) {
    return new Promise((resolve, reject) => {
      this.isFileDownloaded(file).then(status => {
        console.log(status);
        resolve(status);
      }).catch(error => {
        this.message.downloading = true;
        this.downloadFile(file).then((entry: any) => {
          this.message.nativeURL = this.getNativeURL(file);
          this.message.downloading = false;
          this.message.downloaded = true;

          this.subscribeToFileDelete(file);
          setTimeout(() => {
            console.log(entry);
            resolve(entry);
          });
        }).catch(error => {
          this.message.downloading = false;
          this.events.publish('toast:error', error);
          reject(error);
        })
      });
    });
  }

  processFile() {
    //downloading file
    if (this.message.URL) {
      if (this.isCordova) {
        let file = this.message.URL;

        this.isFileDownloaded(file).then(status => {
          if (status) {
            this.message['downloaded'] = true;
            this.message['downloading'] = false;
            this.message.nativeURL = this.getNativeURL(file);

            this.subscribeToFileDelete(file);
          }
        }).catch(error => {
          //checking if sent by me and sent within last 500ms. We will try to download this
          if (this.message.UserID === this.userID && (moment().utc().valueOf() - this.message.CreateAt) <= 10000) {
            this.openFile();
          } else {
            this.message['downloaded'] = false;
            this.message['downloading'] = false;
          }
        });

      } else {
        this.message['downloaded'] = false;
      }
    } else {
      this.message['downloaded'] = true;
    }
  }

  isFileDownloaded(file) {
    return new Promise((resolve, reject) => {

      let fileName = this.getFileName(file);
      //checking if file downloaded
      this.file.checkFile(this.downloadDirectory, fileName).then(status => {
        resolve(status);
      }).catch(error => {
        reject(error);
      });
    });
  }

  downloadMessage() {
    let file = this.message.URL;
    if (this.isCordova) {
      this.message.downloading = true;
      this.downloadFile(file).then((entry: any) => {
        this.message.downloaded = true;
        this.message.nativeURL = this.getNativeURL(entry.nativeURL);

        this.message.downloading = false;
        this.subscribeToFileDelete(file);
        this.makeTrackForAudio();
      }).catch(error => {
        this.message.downloading = false;
        this.message.downloaded = false;
        this.message['error'] = error;
      });
    }
  }

  downloadFile(file) {
    return new Promise((resolve, reject) => {
      let fileName = this.getFileName(file);

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(file, this.downloadDirectory + fileName).then((entry) => {
        resolve(entry);
      }, (error) => {
        console.log(error);
        this.message['failed'] = error;
        this.message.downloaded = false;
        this.message.downloading = false;
      }).catch(error => {
        console.log(error);
        this.message['failed'] = error;
        this.message.downloaded = false;
        this.message.downloading = false;
      });
    });
  }

  getFileName(file) {
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));

    return file.substring(file.lastIndexOf('/') + 1);
  }

  getNativeURL(file) {
    if (file) {
      //checking if still http
      if (file.indexOf('https') === 0) {
        let fileName = this.getFileName(file);
        return normalizeURL(this.downloadDirectory + fileName);
      }
      return normalizeURL(file);
    }
    return file;
  }

  createIfNotExist() {
    this.file.checkDir(this.dataDirectory, this.ticket).then(status => {
    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(this.dataDirectory, this.ticket, false).catch(error => { });
      }
    });
  }

  getTime(time) {
    if (time) {
      let momentTime = null;

      momentTime = moment(time).utc().local();
      momentTime.locale(this.myLanguage);

      //checking if its dd-mm-yyy format
      if (!momentTime.isValid() && moment(time, 'DD-MM-YYYY hh:mm:ss').isValid()) {
        momentTime = moment(time, 'DD-MM-YYYY hh:mm:ss').utc().local();
      }
      if (momentTime.isValid()) {
        var today = moment().startOf('day');

        if (momentTime.isSame(today, 'd')) {// today
          return momentTime.format('hh:mm a');
        } else if (momentTime.isBetween(moment().subtract(7, 'days').startOf('day'), today)) { //within a week
          return momentTime.format('ddd D, hh:mm a');
        } else if (momentTime.isBetween(moment().startOf('month'), today)) { //within a month
          return momentTime.format('ddd D, hh:mm a');
        } else {
          return momentTime.format('ddd, D MMM hh:mm a');
        }
      } else {
      }
    }
    return time;
  }

  showRead(message) {
    if (this.LoginTypeID === Global.LoginType.Group) {
    }
  }

  /**
   * This will reduce badge count if message is newly sent & read first time
   */
  processBadgeCount() {
    if (this.message.BadgeCount) {
      //checking if not already reduced
      if (this.userID in this.message.BadgeCount && this.message.BadgeCount[this.userID]) {//in list && not yet made false
        //making it false first
        this.message.BadgeCount[this.userID] = false;
        this.angularFireDB.object(this.messagePath + '/BadgeCount/' + this.userID).set(false);

        //not reducing badge count from communication & total
        this.reduceCount('CommunicationCount');
        this.reduceCount('Total');

      }
    }
  }

  reduceCount(path) {
    let ref = firebase.database().ref('Badge/' + this.userID + '/' + path);
    ref.transaction(function (count) {
      count = count || 0;
      if (count === 0) {
        return count;
      }
      return count - 1;
    });
  }

  makeTrackForAudio() {
    this.message.audioTrack = {
      src: this.message.nativeURL
    };
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
    //re-adding this track
    // this.message.audioTrack = {
    //   src: null,
    // };
    setTimeout(() => {
      this.makeTrackForAudio();
    });
  }

  onHold(event) {
    //showing popover for read, translate
    console.log('on hold');

  }

  subscribeToFileDelete(file) {
    let fileName = file.substring(file.lastIndexOf('/') + 1);

    this.events.unsubscribe('message:file:deleted');
    this.events.subscribe('message:file:deleted', (deletedFileName) => {
      if (fileName === deletedFileName) {
        this.message.nativeURL = null;
        this.processFile();
      }
    });
  }

  isHidden() {
    //checking if sent by LabGuru & logged in user type is group then show tick
    if (this.message.LoginTypeID === Global.LoginType.LabGuru && this.LoginTypeID === Global.LoginType.Group) {
      return false;
    }
    return this.message.UserID !== this.userID;
  }

  getTextMessage() {
    //checking if MyLang exist in message
    if (!('Translation' in this.message)) {
      this.message['Translation'] = {};
    }
    if (!(this.myLanguage in this.message.Translation)) {
      this.message.Translation[this.myLanguage] = this.message.Message;
    }
    return this.message.Translation[this.myLanguage];
  }
}
