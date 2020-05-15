import { Component, ElementRef } from '@angular/core';
import { Crop } from '@ionic-native/crop';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { VideoPlayer } from '@ionic-native/video-player';
import Cropper from 'cropperjs';
import { Events, IonicPage, NavController, NavParams, normalizeURL, Platform, ViewController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import * as _ from 'underscore';


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
    private streamingMedia: StreamingMedia,
    public videoPlayer: VideoPlayer,
    private _imageViewerController: ImageViewerController,
    public viewCntrl: ViewController) {
    this.previewData = this.navParams.data;
    this.isCordova = this.platform.is('cordova');
  }

  dismiss() {
    this.viewCntrl.dismiss(null);
  }
// upload file
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
// crop image
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
      changedURL = img.replace('http://localhost:8080/', 'file://'); // ios
    } else {
      changedURL = 'file://' + img; // android
    }
    if (this.platform.is('ios') || this.platform.is('android')) {
      this.crop.crop(changedURL).then((croppedImgUrl) => {
        this.croppedImgUrl = normalizeURL(croppedImgUrl);
        this.previewData.nativeURL = this.croppedImgUrl;
      }).catch((error) => {
        this.events.publish('toast:error', 'Canceled');
      });
    }
  }
// open image
  openImage() {
    this.element = this._elementRef.nativeElement.querySelector('#img');
    let image = this._imageViewerController.create(this.element);
    image.present();
  }
// play audio
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
  // play video
  playVideo() {
    if (this.isCordova) {
      let options = {
        successCallback: () => { },
        errorCallback: (e) => {
        },
        shouldAutoClose: true,
      };
      let url;
      if (this.platform.is('ios')) {
        url = 'http://localhost:8080' + this.previewData.nativeURL;
      } else {
        url = this.previewData.nativeURL;
      }
      this.streamingMedia.playVideo(url);
      // this.streamingMedia.playVideo(url, options);
    }
  }



}
