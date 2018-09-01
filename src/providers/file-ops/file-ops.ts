import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Network } from '@ionic-native/network';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Events, normalizeURL, Platform } from 'ionic-angular';
import * as mime from 'mime-types';
import { Global } from '../../app/global';
import { CommonProvider } from '../common/common';




@Injectable()
export class FileOpsProvider {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  directory: string = null;
  progressPercent: number = 0;
  isCordova: boolean = false;
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


  private allowedMimes = [
    'application/pdf', 'image/png', 'image/jpeg',
    // 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  constructor(
    private network: Network,
    private streamingMedia: StreamingMedia,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private events: Events,
    private fileOpener: FileOpener,
    private fileChooser: FileChooser,
    private camera: Camera,
    private filePath: FilePath,
    private common: CommonProvider,
    private androidPermissions: AndroidPermissions,
  ) {
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');
    this.isCordova = this.platform.is('cordova');
  }

  setDataDirecory() {
    this.getDataDirectory().then((path: any) => {
      this.directory = path;
    }).catch(error => {
    });
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
                reject('Permission rejected to write files');
              });
            }
          }, error => {
            reject('Permission rejected to write files');
          });

        } else { //iOS
          resolve(this.file.dataDirectory);
        }
      } else {
        resolve(this.file.dataDirectory);
      }
    });
  }

  isFileDownloaded(file, directory = null) {
    return new Promise((resolve, reject) => {

      let fileName = this.getFileName(file);
      if (directory === null) {
        directory = this.directory;
      }
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
  getFile(file, directory = null, identifier) {
    return new Promise((resolve, reject) => {
      if (directory === null) {
        directory = this.directory;
      }
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

  openFile(file, directory, doNative: boolean = true) {
    return new Promise((resolve, reject) => {
      if (doNative) {
        file = this.getNativeURL(file, directory);
      }
      this.fileOpener.open(decodeURIComponent(file), mime.lookup(file)).then(status => {
        resolve(status);
      }).catch(error => {
        reject(error);
      });
    });
  };

  getNativeURL(file, directory = null) {
    if (directory === null) {
      directory = this.directory;
    }
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

  downloadFile(file, directory, identifier = null) {
    return new Promise((resolve, reject) => {
      if (directory === null) {
        directory = this.directory;
      }
      let fileName = this.getFileName(file);

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(file, directory + fileName).then((entry) => {
        resolve(entry);
      }, (error) => {
        reject(error);
      }).catch(error => {
        reject(error);
      });
      //onProgress
      fileTransfer.onProgress(event => {
        if (event.lengthComputable) {
          this.events.publish('download:progress:' + identifier, {
            progress: parseInt('' + (event.loaded / event.total) * 100),
            identifier: identifier
          });
        }
      });
    });
  }


  capture(type) {
    return new Promise((resolve, reject) => {
      switch (type) {
        case 'camera':
        case 'image':
        case 'gallery':
          let optons = type === 'camera' ? this.cameraOptions : this.galleryOptions;
          this.camera.getPicture(optons).then(url => {
            resolve(url);
          }).catch(error => {
            reject(error);
          });
          break;

        case 'file':
          this.fileChooser.open().then(uri => {
            this.filePath.resolveNativePath(uri).then(file => {
              //check if this mime type is allowed
              let fileMime = mime.lookup(file);
              if (this.allowedMimes.indexOf(fileMime) > -1) {
                resolve(file);
              } else {
                reject('We only allow ' + this.common.joinAnd(['PDF', 'Image', 'Excel']));
              }
            }).catch(error => {
              reject(error);
            });
          }).catch(error => {
            reject(error);
          });
          break;
      }
    });
  }


  uploadFile(file, identifier, params: any = {}) {
    return new Promise((resolve, reject) => {
      let fileName = this.getFileName(file);
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options = this.setFileOptions(file, params);

      fileTransfer.upload(file, Global.SERVER_URL + 'Chat/CreateFlashNews_Attachement', options).then(data => {

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

  setFileOptions(file, params: any = {}): FileUploadOptions {
    //removing ? if any
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));
    let fileName = this.getFileName(file);
    let fileExtension = this.getFileExtension(file);

    //set params
    params = Object.assign(params, {
      VirtualPath : file,
      FileName: fileName,
      FileExtension: fileExtension
    });
    //set options
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

  getFileName(file) {
    if (file.indexOf('?') === -1) {
      file += '?';
    }
    file = file.substring(0, file.lastIndexOf('?'));

    return file.substring(file.lastIndexOf('/') + 1);
  }

  getFileNameWithoutExtension(file) {
    if (file) {
      return file.substring(0, file.lastIndexOf('.')).toLowerCase();
    }
  }

  getFileExtension(file) {
    if (file) {
      return file.substring(file.lastIndexOf('.') + 1).toLowerCase();
    }
  }


  createDirectoryIfNotExist(path, directoryName) {
    this.file.checkDir(path, directoryName).then(status => {
    }).catch(error => {
      if (error.code === 1) {
        this.file.createDir(path, directoryName, false).catch(error => { });
      }
    });
  }

  captureAndUpload(type, identifier: string = null, params: any = {}) {
    return new Promise((resolve, reject) => {
      this.capture(type).then(uri => {
        this.uploadFile(uri, identifier, params).then(uploadedURL => {
          let url = uploadedURL;
          resolve(url);
        }).catch(error => {
          this.events.publish('toast:error', error);
          reject(error);
        });
      }).catch(error => {
        this.events.publish('toast:error', error);
        reject(error);
      });
    });
  }

  openRemoteFile(file, directory = null, identifier) {
    return new Promise((resolve, reject) => {
      //check if directory null
      if (directory === null) {
        directory = this.directory;
      }
      this.isFileDownloaded(file, directory).then(status => {
        this.openFile(file, directory, identifier).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        this.downloadFile(file, directory, identifier).then(status => {
          this.openFile(file, directory, identifier).then(status => {
            resolve(status);
          }).catch(error => {
            reject(error);
          });
        }).catch(error => {
          reject(error);
        });
      });
    });
  }



}
