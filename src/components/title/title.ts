import { Component, Input, OnChanges } from '@angular/core';
import { App, Events, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'title',
  templateUrl: 'title.html'
})
export class TitleComponent implements OnChanges {
  @Input() title: string = null;
  @Input() subTitle: string = null;
  @Input() badgeCount: number = 0;
  @Input() subSubTitle: string = null;
  constructor(
    private _app: App,
    private _events: Events,
    private _user: UserProvider,
    public navCtrl: NavController,
  ) {
    this._events.subscribe('badge:set', total => {
      this.setHtmlTitle('badge');
    });
  }

  getBadgeCount() {
    let badgeString: any = '';
    if (this.badgeCount) {
      if (this.badgeCount > 100) {
        badgeString = '100+';
      } else {
        badgeString = this.badgeCount;
      }
    }
    return badgeString;
  }

  ngOnInit() {
    this.setHtmlTitle('init');
  }

  ngOnChanges() {
    this.setHtmlTitle('changes');
  }

  setHtmlTitle(action) {
    let titleToSet = this.title;
    if (this._user.totalBadgeCount) {
      titleToSet += this.getTotalBadgeCount();
    }
    //set
    this._app.setTitle(titleToSet);
    document.title = titleToSet;
  }

  getTotalBadgeCount() {
    if (this._user.totalBadgeCount) {
      return ' (' + this._user.totalBadgeCount + ')';
    } else {
      return '';
    }
  }
}
