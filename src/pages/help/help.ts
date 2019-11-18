import { Component } from '@angular/core';
import { Network} from '@ionic-native/network/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { VideoPlayer} from '@ionic-native/video-player/ngx';
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
    private platform: Platform,
    private events: Events,
    public network: Network,
    public streamingMedia: StreamingMedia,
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
    if (this.network.type === 'none') {
      this.events.publish('toast:error', 'You seems to be offline');
    } else {
      if (this.platform.is('core')) {
        window.open(this.url, '_blank');
      } else if (this.platform.is('android')) {
        this.videoPlayer.play(this.url).catch(error => {
          this.events.publish('toast:create', error);
        });
      } else if (this.platform.is('ios')) {
        let options: StreamingVideoOptions = {
          successCallback: () => { console.log('Video played') },
          errorCallback: (e) => { console.log('Error streaming') },
          shouldAutoClose: true,
          controls: true
        };

        this.streamingMedia.playVideo(this.url, options);
      }
    }
  }

}
