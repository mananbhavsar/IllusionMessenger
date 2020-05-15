import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events, ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'dashboard-detail',
  templateUrl: 'dashboard-detail.html'
})
export class DashboardDetailComponent {
  @Output() buttonClicked = new EventEmitter;
  @Input() dueDays: any = null;

  days = {
    Today: {
      label: 'Today',
      value: 0
    },
    Day_1: {
      label: '1 Day',
      value: 1
    },
    Day_2: {
      label: '2 Days',
      value: 2
    },
    Day_3: {
      label: '3 Days',
      value: 3
    },
    Day_4Plus: {
      label: '4+ Days',
      value: 4
    },
    Past_Day: {
      label: 'Past Due Days',
      value: -1
    }
  };

  constructor(
    public modal: ModalController,
    public event: Events,
    public network: Network,
    public navCntrl: NavController,
  ) {

  }

  ionViewDidLeave(){
    this.event.publish('dashboard:close');
  }

  openTopics(event, day) {
    if (this.network.type !== 'none') {
      this.navCntrl.push('DueTopicsPage', { Day: this.days[day].value });
    } else {
      this.event.publish('toast:create', 'You seems to be offline');
    }
  }

}

