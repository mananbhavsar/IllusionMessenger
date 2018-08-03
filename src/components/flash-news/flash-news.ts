import { DateProvider } from './../../providers/date/date';
import { Slides, NavController, ModalController } from 'ionic-angular';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { FlashPage } from '../../pages/flash/flash';

@Component({
  selector: 'flash-news',
  templateUrl: 'flash-news.html'
})
export class FlashNewsComponent {
  @ViewChild('slides') slides: Slides;
  @Input() flashNews: Array<any> = [];
  @Input() GroupID: number;

  flashTimer = null;
  flashes: Array<any> = [];
  flashesID: any = {};

  processing: boolean = false;

  constructor(
    private _date: DateProvider,
    private navCntl: NavController,
    public modalCntl: ModalController
  ) {

  }

  ngAfterViewInit() {
    if (this.flashTimer === null) {
      this.flashTimer = setInterval(() => {
        this.processForRange();
      }, 15000);
    }
  }


  /**
   * new flash added will be passed here
   */
  ngOnChanges(changes: SimpleChanges) {
    this.processing = true;
    if (changes.flashNews && changes.flashNews.currentValue) {
      this.processing = false;
      this.updateSlider(changes.flashNews.currentValue);
    }
  }


  ngOnDestroy() {
    if (this.flashTimer) {
      clearInterval(this.flashTimer);
      this.flashTimer = null;
    }
  }

  processForRange() {
    let tmpFlashes: Array<any> = [];
    if (this.flashes && this.flashes.length) {
      this.flashes.forEach(flash => {
        let start = this._date.fromServerFormat(flash.StartDate_UTC).toDate().getTime();
        let end = this._date.fromServerFormat(flash.EndDate_UTC).toDate().getTime();
        let now = new Date().getTime();
        if (start <= now && now <= end) {
          tmpFlashes.push(flash);
        }
      });
      this.updateSlider(tmpFlashes);
    }
  }

  updateSlider(tmpFlashes: Array<any> = []) {
    if (this.processing) {
      return;
    }
    //first time init
    if (tmpFlashes.length === 0) {
      tmpFlashes = this.flashNews;
    }

    setTimeout(() => {
      let oldLength = this.flashes.length;
      this.flashes = tmpFlashes;
      if (this.slides) {
        this.slides.update();
        //selecting first
        if (oldLength !== this.flashes.length && this.flashes.length) {
          this.slides.slideTo(0);
        }
      }
    });
  }

  openFlashNews(flashNews, GroupID) {
    this.modalCntl.create(FlashPage, { news: flashNews, id: GroupID }).present();
  }

}
