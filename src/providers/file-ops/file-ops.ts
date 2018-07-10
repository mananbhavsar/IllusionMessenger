import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Platform, Events, normalizeURL } from 'ionic-angular';

import * as _ from 'underscore';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  progressPercent: number = 0;

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


  constructor(
    private network: Network,
    private streamingMedia: StreamingMedia,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    public camera : Camera,
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

  uploadFile(file, params, identifier) {
    return new Promise((resolve, reject) => {
      let fileName = this.getFileName(file);
      const fileTransfer: FileTransferObject = this.transfer.create();

      fileTransfer.upload(file, Global.SERVER_URL + 'Communication/InsertChat_Attachement', this.setFileOptions(file, params)).then(data => {
        if (data.response.indexOf('http') === -1) {
          reject(data);
        } else if (data.response.indexOf('>') > -1) {
          resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
        } else {
          resolve(JSON.parse(data.response));
        }
      }, (err) => {
        this.progressPercent = 0;
        reject(err);
      }).catch(error => {
        reject(error);
      });

      fileTransfer.onProgress(event => {
        if (event.lengthComputable) {
          this.events.publish('upload:progress:' + identifier, {
            progress: parseInt('' + (event.loaded / event.total) * 100),
            identifier: identifier
          });
        }
      });
    });
  }


  
  setFileOptions(file, params = {}): FileUploadOptions {
    //removing ? if any
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));
    let fileName = this.getFileName(file);
    let fileExtension = this.getFileExtension(file);

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: fileName,
      mimeType: mime.lookup(fileExtension),
      chunkedMode: false,
      // headers: new Headers({
      //   // 'Content-Type': 'application/json',
      //   // Connection: "close",
      // }),
      params: params
    }
    return options;
  }



  
  captureAndUpload(type, identifier: string = null) {
    return new Promise((resolve, reject) => {
      this.capture(type).then(uri => {
        this.uploadFile(uri, {
          date: identifier || new Date().getTime(),
        }, identifier).then(uploadedURL => {
          resolve(uploadedURL);
        }).catch(error => {
          this.events.publish('toast:error', error);
          reject(error)
        });
      }).catch(error => {

      });
    });
  }

  capture(type) {
    return new Promise((resolve, reject) => {
      switch (type) {
        case 'camera':
        case 'image':
          let optons = type === 'camera' ? this.cameraOptions : this.galleryOptions;
          this.camera.getPicture(optons).then(url => {
            resolve(url);
          }).catch(error => {
            reject(error);
          });
          break;
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

  getFileNameWithoutExtension(file) {
    if (file) {
      return file.substring(0, file.lastIndexOf('.'));
    }
  }

  getFileExtension(file) {
    if (file) {
      return file.substring(file.lastIndexOf('.') + 1);
    }
  }

}
