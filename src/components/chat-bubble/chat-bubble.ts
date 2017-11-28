import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform, NavController, Events, normalizeURL } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'underscore';
import * as mime from 'mime-types';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import * as moment from 'moment';

import { AudioProvider } from 'ionic-audio';
import { Global } from '../../app/global';
import { retry } from 'rxjs/operator/retry';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html',
})
export class ChatBubbleComponent {
  @Input() message: any;
  @Input() userID: string;
  @Input() ticket: string;
  @Input() users: any = {};
  @Input() LoginTypeID: number = 0;

  basePath: string = '';
  messagePath: string = '';
  statusRef = null;
  dataDirectory: string = null;
  downloadDirectory: string = null;
  selectedTrack: number;
  constructor(
    public angularFireDB: AngularFireDatabase,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    private fileOpener: FileOpener,
    private _audioProvider: AudioProvider,
    private navCtlr: NavController,
  ) {
    this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.dataDirectory;
    //listening to page change event to pause audio
    this.navCtlr.viewWillLeave.subscribe(event => {
      this.pauseSelectedTrack();
    });
    this.events.subscribe('platform:onPause', (event) => {
      this.pauseSelectedTrack();
    });
  }

  ngOnInit() {
    this.basePath = 'Communications/' + this.ticket + '/';
    this.messagePath = this.basePath + 'Chat/' + this.message.key;

    this.doReading();


    this.downloadDirectory = this.dataDirectory + this.ticket + '/';
    this.createIfNotExist();

    this.processFile();

    // this.processBadgeCount();
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
    if (this.message.UserID !== this.userID) { //avoid same user type also
      let status = -1;
      //sent by 
      if (this.message.LoginTypeID === 1 && this.LoginTypeID === 3) { //dentist & read by group user
        status = 2;
      } else if (this.message.LoginTypeID === 3) { //sent by group user
        //checking if read by all
        if (_.size(this.message.Read) === _.size(this.users)) {
          status = 2;
        } else if (this.LoginTypeID === 1 && this.message.Status === 0) { //read by any dentist
          status = 1;
        }
      }
      if (status > 0) {
        this.angularFireDB.object(this.messagePath + '/Status').set(status);
      }
    }
  }

  openImage(url) {
    //checking if file exist
    //this.check(url).then((entry: any) => {
    //  this.openFileInApp(entry.nativeURL);
    //});
  }

  openAudio(message) {

  }

  check(file) {
    return new Promise((resolve, reject) => {
      this.isFileDownloaded(file).then(status => {
        resolve(status);
      }).catch(error => {
        this.events.publish('loading:create', 'downloading');
        this.downloadFile(file).then((entry: any) => {
          this.events.publish('loading:close');
          resolve(entry);
        }).catch(error => {
          this.events.publish('loading:close');
          this.events.publish('toast:error', error);
          reject(error);
        })
      });
    });
  }

  openFileInApp(file) {
    //opening
    this.fileOpener.open(this.getNativeURL(file), mime.lookup(file)).then(status => {
    }).catch(error => {
      this.events.publish('toast:error', error);
    });
  }

  _processFile() {
    //downloading file
    if (this.message.URL) {
      //if cordova
      if (this.platform.is('cordovaaa')) {

      } else {
        this.message.downloaded = true;
        this.message.nativeURL = this.message.URL;
        this.makeTrackForAudio();
      }
    } else {
      this.message['downloaded'] = true;
    }
  }

  processFile() {
    //downloading file
    if (this.message.URL) {
      //if cordova
      if (this.platform.is('cordova')) {
        let file = this.message.URL;

        this.isFileDownloaded(file).then(status => {
          if (status) {
            this.message['downloaded'] = true;
            this.message.nativeURL = this.getNativeURL(file);
            console.log(this.message.nativeURL);
            //download for thumbnail in case of image
            //pending
          }
          this.makeTrackForAudio();
        }).catch(error => {
          this.message['downloaded'] = false;
          this.downloadFile(file).then((entry: any) => {
            this.message.downloaded = true;
            this.message.nativeURL = this.getNativeURL(entry.nativeURL);

            this.makeTrackForAudio();
          }).catch(error => {
            this.message.downloaded = false;
            this.message['error'] = error;
          });
        })

      } else {
        this.message.downloaded = true;
        this.message.nativeURL = this.message.URL;
        this.makeTrackForAudio();
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

  downloadFile(file) {
    return new Promise((resolve, reject) => {
      let fileName = this.getFileName(file);

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(file, this.downloadDirectory + fileName).then((entry) => {
        resolve(entry);
      }, (error) => {
        this.message['failed'] = error;
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
    this.file.checkDir(this.downloadDirectory, this.ticket).then(status => {
    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(this.downloadDirectory, this.ticket, false).catch(error => { });
      }
    });
  }

  getTime(time) {
    if (time) {
      let momentTime = null;

      momentTime = moment(time).utc().local();
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
    if (this.LoginTypeID === 3) {
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

  playSelectedTrack(trackId) {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.pause(this.selectedTrack);
  }

  togglePlay(audioTrack) {
    if (audioTrack.isPlaying) {
      audioTrack.pause()
    } else {
      //pause other playing video
      if (this.selectedTrack !== audioTrack.id) {
        this._audioProvider.pause();
        // this.selectedTrack = audioTrack.id;
        audioTrack.play();
      } else {
        audioTrack.play()
      }
    }
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
    //re-adding this track
    this.message.audioTrack = {
      src: null,
    };
    setTimeout(() => {
      this.makeTrackForAudio();
    }, 150);
  }
}
