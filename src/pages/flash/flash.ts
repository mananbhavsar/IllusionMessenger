import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, Events, Platform, ViewController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ImageViewerController } from 'ionic-img-viewer';
import { UUID } from 'angular2-uuid';
import { FlashNewsProvider } from '../../providers/flash-news/flash-news';
import { FileOpsProvider } from '../../providers/file-ops/file-ops';

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {
  news: any;
  title: string;
  element: any;
  groupId: number;
  isPage: Boolean;
  attachments: any = [];
  isBrowser: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    private connection: ConnectionProvider,
    public platform: Platform,
    public _imageViewerController: ImageViewerController,
    public _flashNews: FlashNewsProvider,
    public events: Events,
    public _elementRef: ElementRef,
    public _fileOps : FileOpsProvider) {

    this.news = this.navParams.data.news;
    this.groupId = this.navParams.data.id;
    this.isPage = this.navParams.data.isPage;
    this.title = this.news.CreatedBy;
    this.isBrowser = this.platform.is('core');
    this.initData();
  }

  ionViewWillEnter(){
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetFlashNews_Attachement', {
      GroupID: this.groupId,
      FlashID: this.news.FlashID
    },false).then((response: any) => {
      this.attachments = response.FlashNews_AttachementList;
    }).catch((error) => { });
  }

  flashNewsSeen() {
    if (this.isPage) {
      this._flashNews.markRead(this.news.FlashID);
    } else {
      this.viewCntl.dismiss();
    }
  }

  captured(file) {
    if (this.platform.is('core')) {
      window.open(file, '_blank');
    } else {
      this._fileOps.getDataDirectory().then(path => {
        let identifier = UUID.UUID();
        let flashPath = path + 'Flash' + '/';
        this._fileOps.openRemoteFile(file, flashPath, identifier).then(status => {
        }).catch(error => {
        });
      });
    }
  }


}
