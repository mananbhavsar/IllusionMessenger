import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'empty',
    templateUrl: 'empty.html'
})
export class EmptyComponent {
    _text: string = null;
    constructor(
        public navCtrl: NavController,
    ) {

    }

    @Input()
    set text(text: string) {
        this._text = text;
    }

    get text() {
        return this._text;
    }

    openSearch() {
    }

}
