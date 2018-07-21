import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {
  @Output() buttonClicked = new EventEmitter;
  @Input() dueDays: any = null;

  days = {
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
    }
  };

  constructor(
    public modal: ModalController) {

  }

  openTopics(event, day) {
    let modal = this.modal.create('DueTopicsPage', { Day: this.days[day].value });
    modal.onDidDismiss((data) => {
      if (data) {

      }
    });
    modal.present();

  }

}
