import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Events, Platform } from 'ionic-angular';
import { FileOpsProvider } from '../../providers/file-ops/file-ops';
import { ConnectionProvider } from '../../providers/connection/connection';

@Component({
  selector: 'attachment',
  templateUrl: 'attachment.html'
})
export class AttachmentComponent {
  @Input() attachments: Array<any> = null;
  @Input() editable: boolean = false;
  @Output() captured = new EventEmitter();
  @Output() removed = new EventEmitter();
  @Input() isBrowser: boolean;
  progresses: any = {};
  constructor(
    private _fileOps: FileOpsProvider,
    private platform: Platform,
    private events: Events,
    private connection: ConnectionProvider
  ) {
    
  }


  uplaodFile(file) {
    let input = file.target;
    let dataURL: string;
    let fileName = this._fileOps.getFileNameWithoutExtension(input.files[0].name);
    let fileExtension = this._fileOps.getFileExtension(input.files[0].name);
    let reader = new FileReader();
    console.log(fileExtension,fileName);
    let context = this;
    reader.onload = function () {
      dataURL = reader.result.replace(/^data:image\/\w+;base64,/, "");
      console.log(dataURL);
      
      context.uploadFileFromBrowser(fileName, fileExtension, dataURL)
        .then((data: any) => {
          context.captured.emit({
            url: data.Data,
            FileName : fileName,
            fileExtension : fileExtension
          });
          if (data.Data.indexOf('https') === 0) {
            // context.sendToFirebase('', 'Image', data.Data);
            console.log('ready to insert into firebase');
          } else {
            context.events.publish('alert:basic', data.Data);
          }
        }).catch((error) => {
        });
    }
    reader.readAsDataURL(input.files[0]);
  }

  uploadFileFromBrowser(fileName, fileExtension, Base64String) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateFlashNews_Attachement_Base64', {
        FileName: fileName,
        FileExtension: fileExtension,
        Base64String: Base64String
      }).then((data: any) => {
        resolve(data);
      }).catch((error) => {
        reject(false);
      });
    });
  }

  capture(type) {
    console.log(type);

    let identifier = UUID.UUID();
    // start listening to upload identifier
    this.events.subscribe('upload:progress:' + identifier, progress => {
      console.log('upload:progress');

      let count = progress.progress;
      //remove if 100%
      if (count === 100) {
        //this.removeProgress(progress.identifier);
      } else {
        this.progresses[identifier] = count;
      }
    });
    console.log('upload');

    this._fileOps.captureAndUpload(type, identifier).then(url => {
      console.log(url);

      this.captured.emit({
        url: url
      });
    }).catch(error => {
      this.removeProgress(identifier);
    });
  }

  removeProgress(identifier) {
    delete this.progresses[identifier];
    this.events.unsubscribe('upload:progress:' + identifier);
  }

  removeAttachment(index) {
    console.log(index);

    this.removed.emit({
      index: index
    });
  }

  openAttachment(file) {
    console.log(file);
    if (this.platform.is('core')) {
      window.open(file, '_blank');
    } else {
      let identifier = UUID.UUID();
      this._fileOps.openRemoteFile(file, null, identifier).catch(error => {
      });
    }
  }
}
