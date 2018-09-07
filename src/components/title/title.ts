<<<<<<< HEAD
import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
=======
import { Component, Input, OnChanges } from '@angular/core';
import { App, Events, NavController } from 'ionic-angular';
>>>>>>> master
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'title',
  templateUrl: 'title.html'
})
<<<<<<< HEAD
export class TitleComponent {
  @Input() title: string = null;
  @Input() subTitle: string = null;
  @Input() badgeCount: number = 0;


=======
export class TitleComponent implements OnChanges {
  @Input() title: string = null;
  @Input() subTitle: string = null;
  @Input() badgeCount: number = 0;
  @Input() subSubTitle: string = null;
>>>>>>> master
  constructor(
    private _app: App,
    private _events: Events,
    private _user: UserProvider,
<<<<<<< HEAD
  ) {
    this._events.subscribe('badge:set', total => {
      this.setHtmlTitle();
=======
    public navCtrl: NavController,
  ) {
    this._events.subscribe('badge:set', total => {
      this.setHtmlTitle('badge');
>>>>>>> master
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

<<<<<<< HEAD
  ngOnChanges() {
    this.setHtmlTitle();
  }

  setHtmlTitle() {
    if (this._user.totalBadgeCount) {
      this._app.setTitle(this.title + this.getTotalBadgeCount());
    } else {
      this._app.setTitle(this.title);
    }
  }

  getTotalBadgeCount() {
    return ' (' + this._user.totalBadgeCount + ')';
=======
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
    }
    return '';
>>>>>>> master
  }
}
