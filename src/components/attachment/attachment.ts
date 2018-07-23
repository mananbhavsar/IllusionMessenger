import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Events } from 'ionic-angular';
import { FileOpsProvider } from '../../providers/file-ops/file-ops';

@Component({
  selector: 'attachment',
  templateUrl: 'attachment.html'
})
export class AttachmentComponent {
  @Input() attachments: Array<any> = null;
  @Input() editable: boolean = false;
  @Output() captured = new EventEmitter();
  @Output() removed = new EventEmitter();
  progresses: any = {};
  constructor(
    private fileOps: FileOpsProvider,
    private events: Events
  ) {

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
    
    this.fileOps.captureAndUpload(type, identifier).then(url => {
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
    
    let identifier = UUID.UUID();
    this.fileOps.openRemoteFile(file, null, identifier).catch(error => {

    });
  }
}
