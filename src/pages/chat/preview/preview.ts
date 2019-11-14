import { Component, ElementRef } from '@angular/core';
import { IonicPage, Platform, normalizeURL, ViewController, NavController, NavParams, Events } from 'ionic-angular';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { ImageViewerController } from 'ionic-img-viewer';
import { Crop } from '@ionic-native/crop';
import * as _ from 'underscore';
import Cropper from 'cropperjs';


@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  previewData: any = {};
  isCordova: any = true;
  message: any = '';
  element: any = null;
  cropper: any;
  croppedImgUrl: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private _elementRef: ElementRef,
    public crop: Crop,
    public events: Events,
    public streamingMedia: StreamingMedia,
    private _imageViewerController: ImageViewerController,
    public viewCntrl: ViewController) {
    this.previewData = this.navParams.data;
    this.isCordova = this.platform.is('cordova');
  }

  dismiss() {
    this.viewCntrl.dismiss(null);
  }

  Upload() {
    if (this.platform.is('core')) {
      if (!_.isEmpty(this.cropper)) {
        let url = this.cropper.getCroppedCanvas().toDataURL();
        this.previewData['nativeURL'] = url;
      }
    }
    else {
      if (!_.isEmpty(this.croppedImgUrl)) {
        this.previewData['nativeURL'] = this.croppedImgUrl;
      }
    }
    this.previewData['Text'] = this.message;
    this.viewCntrl.dismiss(this.previewData);
  }

  cropImg(element, img) {
    let changedURL: string;
    if (this.platform.is('core')) {
      var image = document.getElementById('img') as HTMLCanvasElement;
      this.cropper = new Cropper(image, {
        crop(event) {
        },
      });
    }
    if (this.platform.is('ios')) {
      changedURL = img.replace('http://localhost:8080/', 'file://');
    } else {
      changedURL = img;
    }
    if (this.platform.is('ios') || this.platform.is('android')) {
      let url = 'file://' + changedURL;
      this.crop.crop(url).then((croppedImgUrl) => {
        this.croppedImgUrl = normalizeURL(croppedImgUrl);
        this.previewData.nativeURL = this.croppedImgUrl;
      }).catch((error) => {
        this.events.publish('toast:error', 'Canceled');
      });
    }
  }

  openImage() {
    this.element = this._elementRef.nativeElement.querySelector('#img');
    let image = this._imageViewerController.create(this.element);
    image.present();
  }

  playAudio() {
    if (this.isCordova) {
      let options = {
        successCallback: () => { },
        errorCallback: (e) => { },
        shouldAutoClose: true,
        bgImage: 'https://s3-ap-southeast-1.amazonaws.com/eiosys/images/equilizer.gif',
      };
      this.streamingMedia.playAudio(this.previewData.nativeURL, options);
    }
  }

  playVideo() {
    if (this.isCordova) {
      let options = {
        successCallback: () => { },
        errorCallback: (e) => {
          return false;
        },
        shouldAutoClose: true,
      };
      this.streamingMedia.playVideo(this.previewData.nativeURL, options);
    }
  }



}
