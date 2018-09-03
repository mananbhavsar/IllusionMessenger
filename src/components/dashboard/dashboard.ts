import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events, ModalController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {
  @Output() buttonClicked = new EventEmitter;
  @Input() dueDays: any = null;

  days = {
    Today : {
      label : 'Today',
      value : 0
    },
    Day_1: {
      label: '1 Day',
      value: 1
    },
    Day_2: {
      label: '2 Day',
      value: 2
    }, Day_3: {
      label: '3 Day',
      value: 3
    }, Day_4Plus: {
      label: '4+ Day',
      value: 4
    },
    Past_Day : {
      label : 'Past Due Days',
      value : -1
    }
  };

  constructor(
    public modal: ModalController,
    public event: Events,
    public network: Network) {

  }

  openTopics(event, day) {
    if (this.network.type !== 'none') {
      let modal = this.modal.create('DueTopicsPage', { Day: this.days[day].value });
      modal.onDidDismiss((data) => {
        this.event.publish('dashboard:close');
      });
      modal.present();
    }
  }

}
