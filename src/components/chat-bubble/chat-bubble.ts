import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Platform, Events, normalizeURL } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'underscore';
import * as mime from 'mime-types';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import * as moment from 'moment';


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
  messageRef = null;
  dataDirectory: string = null;
  constructor(
    public angularFireDB: AngularFireDatabase,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    private fileOpener: FileOpener,
  ) {
    this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.dataDirectory;

  }

  ngOnInit() {
    this.basePath = 'Communications/' + this.ticket + '/';
    this.messagePath = this.basePath + 'Chat/' + this.message.key;

    this.doReading();

    this.processFile();
  }

  doReading() {
    //adding myself to read list
    if (this.message.Read && this.userID in this.message.Read && this.message.Status !== 2) { //already read by me & not 2 already
      this.updateStatus();
    } else {
      //now making it read by me
      this.angularFireDB.object(this.messagePath + '/Read/' + this.userID).set(firebase.database.ServerValue.TIMESTAMP);
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
        this.messageRef = this.angularFireDB.object(this.messagePath + '/Status').set(status);
      }
    }
  }

  openImage(url) {
    //checking if file exist
    this.openFile(url);
  }

  openAudio(url) {
    this.openFile(url);
  }

  openFile(file) {
    this.isFileDownloaded(file).then(status => {
      this.openFileInApp(file);
    }).catch(error => {
      this.events.publish('loading:create', 'downloading');
      this.downloadFile(file).then((entry: any) => {
        this.events.publish('loading:close');
        this.openFileInApp(entry.nativeURL);
      }).catch(error => {
        this.events.publish('loading:close');
        this.events.publish('toast:error', error);
      })
    });
  }

  openFileInApp(file) {
    //opening

    this.fileOpener.open(this.getNativeURL(file), mime.lookup(file)).then(status => {
    }).catch(error => {
      this.events.publish('toast:error', error);
    });
  }

  processFile() {
    //downloading file
    if (this.message.URL) {
      //if cordova
      if (this.platform.is('cordova')) {
        let file = this.message.URL;

        this.isFileDownloaded(file).then(status => {
          this.message['downloaded'] = true;
          this.message.nativeURL = this.getNativeURL(file);
        }).catch(error => {
          this.message['downloaded'] = false;
          this.downloadFile(file).then(entry => {
            this.message.downloaded = true;
            this.message.nativeURL = this.getNativeURL(file);
          }).catch(error => {
            this.message.downloaded = false;
            this.message['error'] = error;
          });
        })

      } else {
        this.message.downloaded = true;
        this.message.nativeURL = this.message.URL;
      }
    } else {
      this.message['downloaded'] = true;
    }
  }

  isFileDownloaded(file) {
    return new Promise((resolve, reject) => {

      let fileName = this.getFileName(file);
      //checking if file downloaded
      this.file.checkFile(this.dataDirectory, fileName).then(status => {
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
      fileTransfer.download(file, this.file.dataDirectory + fileName).then((entry) => {
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
    return normalizeURL(file);
  }

  getTime(time) {
    if (time) {
      let momentTime = moment(time).utc().local();
      if (momentTime.isValid()) {
        var today = moment().startOf('day');

        if (momentTime.isSame(today, 'd')) {// today
          return momentTime.format('hh:ss a');
        } else if (momentTime.isBetween(moment().subtract(7, 'days').startOf('day'), today)) { //within a week
          return momentTime.format('ddd d, hh:ss a');
        } else if (momentTime.isBetween(moment().startOf('month'), today)) { //within a month
          return momentTime.format('ddd d, hh:ss a');
        } else {
          return momentTime.format('ddd, d MMM hh:ss a');
        }
      } else {
      }
    }
    return time;
  }

  showRead(message) {
    console.log(message.Read);
  }
}
