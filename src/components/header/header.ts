import { Component, Input } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { SearchPage } from '../../pages/search/search';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'header',
    templateUrl: 'header.html'
})
export class HeaderComponent {
    _title: string;
    cartCounter: number = null;
    constructor(
        public navCtrl: NavController,
        public events: Events,
    ) {
        this.ionViewDidEnter();
    }

    ionViewDidEnter() {
    }

    @Input()
    set title(title: string) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    openSearch() {
        this.navCtrl.push(SearchPage);
    }

}
