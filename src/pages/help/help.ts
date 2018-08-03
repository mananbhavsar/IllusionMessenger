import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { VideoPlayer } from '@ionic-native/video-player';
import { Events, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Global } from '../../app/global';
import { FileOpsProvider } from '../../providers/file-ops/file-ops';



@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  global: any = {};
  dataDirectory: string = null;
  downloadDirectory: string = null;

  progress: number = 0;


  private url = 'https://documents.illusiondentallab.com/Tutorial/Update.mp4';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fileOps: FileOpsProvider,
    private videoPlayer: VideoPlayer,
    private platform : Platform,
    private streamingMedia: StreamingMedia,
    private events: Events
  ) {
    this.global = Global;
    this.fileOps.getDataDirectory().then((path: string) => {
      this.dataDirectory = path;

      this.downloadDirectory = this.dataDirectory + 'help/';
      this.fileOps.createDirectoryIfNotExist(this.dataDirectory, 'help');
    }).catch(error => {
    });

  }

  ionViewDidLoad() {

  }

  openVideo() {
    if (this.platform.is('core')) {
     window.open(this.url,'_blank');
    } else {
      this.videoPlayer.play(this.url).catch(error => {
        this.events.publish('toast:create', error);
      });
    }
  }

  openVideo1() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo(this.url, options);
  }

}
