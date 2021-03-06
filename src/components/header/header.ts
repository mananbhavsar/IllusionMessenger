import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, NavController } from 'ionic-angular';
import { Global } from "../../app/global";


@Component({
    selector: 'header',
    templateUrl: 'header.html'
})
export class HeaderComponent {
    @Input() title: string = null;
    @Input() subTitle: string = null;
    @Input() buttons: any = null;
    @Output() buttonClicked = new EventEmitter();
    @Input() hideTitle: boolean = false;

    cartCounter: number = null;
    prevPageColor: string = null;
    colorHex = Global.color;
    constructor(
        public navCtrl: NavController,
        public events: Events,
        private _statusBar: StatusBar,
    ) {
        this.ionViewDidEnter();
        this.navCtrl.viewDidEnter.subscribe(page => {
            setTimeout(() => {
                let currentPageColor = this.getColor(page.name);
                if (true || this.prevPageColor !== currentPageColor) {
                    this.prevPageColor = currentPageColor;
                    //setting header color
                    this._statusBar.backgroundColorByHexString('#' + this.colorHex[this.prevPageColor]);
                }
            });
        });
    }

    ionViewDidEnter() {
    }

    openSearch() {
    }


    getColor(name: string = null) {
        if (true || name === null) {
            name = Global.getActiveComponentName(this.navCtrl.getActive());
        }
        switch (name) {
            case 'PickupPage':
            case 'PickupTodayPage':
            case 'PickupTomorrowPage':
                return 'pickup';

            case 'CaseStatusPage':
                return 'casestatus';

            case 'CommunicationPage':
                return 'communication';

            case 'InvoicePage':
                return 'invoice';

            case 'PaymentsPage':
                return 'payments';

            default:
                return 'primary';
        }
    }

    sendButtonClicked(button, event) {
        button.event = event;
        this.buttonClicked.emit(button);
    }

    getTitle() {
        return this.title;
    }
}
