import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Platform, Events, normalizeURL } from 'ionic-angular';

import * as _ from 'underscore';
import * as mime from 'mime-types';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { Network } from '@ionic-native/network';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { FileOpener } from '@ionic-native/file-opener';

import { Global } from '../../app/global';

@Injectable()
export class FileOpsProvider {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isCordova: boolean = false;

  constructor(
    private network: Network,
    private streamingMedia: StreamingMedia,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    private fileOpener: FileOpener,
    private androidPermissions: AndroidPermissions,
  ) {
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');
    this.isCordova = this.platform.is('cordova');
  }

  getDataDirectory() {
    return new Promise((resolve, reject) => {
      if (this.isCordova) {
        if (this.isAndroid) {
          //check if has permission
          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(permission => {
            if (permission.hasPermission) {
              //creating folder
              this.file.createDir(this.file.externalRootDirectory, Global.APP_NAME, false).then(entry => {
                resolve(this.file.externalRootDirectory + Global.APP_NAME + '/');
              }).catch(error => {
                if (error.code === 12) { //Dir Exist
                  resolve(this.file.externalRootDirectory + Global.APP_NAME + '/');
                } else {
                  reject(error);
                }
              });
            } else {
              this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(permission => {
                if (permission.hasPermission) {
                  this.getDataDirectory().then(path => {
                    resolve(path);
                  }).catch(error => {
                    reject(error);
                  });
                }
              }, error => {
                console.log(error);
                reject('Permission reject to write files');
              });
            }
          }, error => {
            console.log(error);

          });

        } else { //iOS
          resolve(this.file.dataDirectory);
        }
      } else {
        resolve(this.file.dataDirectory);
      }
    });
  }

  isFileDownloaded(file, directory) {
    return new Promise((resolve, reject) => {

      let fileName = this.getFileName(file);
      //checking if file downloaded
      this.file.checkFile(directory, fileName).then(status => {
        resolve(status);
      }).catch(error => {
        reject(error);
      });
    });
  }


  /**
   * Checks if file downloaded or downloads 
   * @param file remote file path
   * @param directory directory to check in
   */
  getFile(file, directory) {
    return new Promise((resolve, reject) => {
      this.isFileDownloaded(file, directory).then(status => {
        resolve(status);
      }).catch(error => {
        this.events.publish('toast:create', 'downloading...');
        this.downloadFile(file, directory).then((entry: any) => {
          resolve(entry);
        }).catch(error => {
          this.events.publish('toast:error', error);
          reject(error);
        });
      });
    });
  }

  openFile(file, directory) {
    let nativeURL = this.getNativeURL(file, directory);
    return this.fileOpener.open(nativeURL, mime.lookup(file));
  };

  getNativeURL(file, directory) {
    if (file) {
      //checking if still http
      if (file.indexOf('https') === 0) {
        let fileName = this.getFileName(file);
        return normalizeURL(directory + fileName);
      }
      return normalizeURL(file);
    }
    return file;
  }

  downloadFile(file, directory) {
    return new Promise((resolve, reject) => {
      let fileName = this.getFileName(file);

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(file, directory + fileName).then((entry) => {
        resolve(entry);
      }, (error) => {
        reject(error);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }

  createDirectoryIfNotExist(path, directoryName) {
    this.file.checkDir(path, directoryName).then(status => {
    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(path, directoryName, false).catch(error => { });
      }
    });
  }

  getFileName(file) {
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));

    return file.substring(file.lastIndexOf('/') + 1);
  }

}
