import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { SearchPage } from '../../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
@Component({
    selector: 'header',
    templateUrl: 'header.html'
})
export class HeaderComponent {
    @Input() buttons: any = null;
    @Output() buttonClicked = new EventEmitter();
    _title: string;
    cartCounter: number = null;
    prevPageColor: string = null;
    colorHex = {
        primary: '#D5232F',
        secondary: '#32db64',
        danger: '#f53d3d',
        light: '#f4f4f4',
        dark: '#222',
        dashboard: '#4ECDC4',
        pickup: '#2574A9',
        casestatus: '#87D37C',
        communication: '#00B16A',
    };
    constructor(
        public navCtrl: NavController,
        public events: Events,
        private _statusBar: StatusBar,
    ) {
        this.ionViewDidEnter();
        this.navCtrl.viewWillEnter.subscribe(page => {
            let currentPageColor = this.getColor(page.name);
            if (this.prevPageColor !== currentPageColor) {
                this.prevPageColor = currentPageColor;
                //setting header color
                this._statusBar.backgroundColorByHexString(this.colorHex[this.prevPageColor]);
            }
        });
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

    getColor(name: string = null) {
        if (name === null) {
            name = this.navCtrl.getActive().name;
        }
        switch (name) {
            case 'DashboardPage':
                return 'dashboard';

            case 'PickupPage':
            case 'PickupTodayPage':
            case 'PickupTomorrowPage':
                return 'pickup';

            case 'CaseStatusPage':
                return 'casestatus';

            case 'CommunicationPage':
                return 'communication';

            default:
                return 'primary';
        }
    }

    sendButtonClicked(button, event) {
        this.buttonClicked.emit(button);
    }
}
