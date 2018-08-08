import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, Platform, ViewController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ImageViewerController } from 'ionic-img-viewer';
import { FlashNewsProvider } from '../../providers/flash-news/flash-news';
import { HomePage } from '../home/home';

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
  attachments: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    private connection: ConnectionProvider,
    public platform: Platform,
    public _imageViewerController: ImageViewerController,
    public _flashNews: FlashNewsProvider,
    public _elementRef: ElementRef) {
    this.news = this.navParams.data.news;
    this.groupId = this.navParams.data.id;
    this.title = this.news.CreatedBy;
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetFlashNews_Attachement', {
      GroupID: this.groupId,
      FlashID: this.news.FlashID
    }).then((response: any) => {
      this.attachments = response.FlashNews_AttachementList;
    }).catch((error) => { });
  }

  flashNewsSeen() {
    this._flashNews.markRead(this.news.FlashID);
    this.viewCntl.dismiss();
  }

  openImage(file) {
    if (this.platform.is('core')) {
      window.open(file, '_blank');
    } else {
      this.element = this._elementRef.nativeElement.querySelector('#url');
      let image = this._imageViewerController.create(this.element);
      image.present();
    }
  }


}
