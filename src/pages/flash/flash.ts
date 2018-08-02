import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController,Platform, ViewController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {
 news: any;
  title : string;
  element : any;
  attachments : any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCntl: ViewController,
    private connection: ConnectionProvider,
    public platform : Platform,
   public _imageViewerController : ImageViewerController,
  public _elementRef : ElementRef) {
    this.news = this.navParams.data;
    this.title = this.news.CreatedBy;
    this.initData();
  }

  initData() {
    this.connection.doPost('Chat/GetFlashNews_Attachement', {
      FlashID : this.news.FlashID
    }).then((response : any) => {
      this.attachments = response.FlashNews_AttachementList;
    }).catch((error) => { });
  }


  dismiss() {
    this.viewCntl.dismiss();
  }

  openImage(file){
    if(this.platform.is('core')){
     window.open(file,'_blank');
    } else {
      this.element = this._elementRef.nativeElement.querySelector('#url');
      let image = this._imageViewerController.create(this.element);
      image.present();
    }
  }


}
