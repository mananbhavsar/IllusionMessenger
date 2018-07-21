import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Button } from 'ionic-angular/components/button/button';
import { DueTopicsPage } from '../../pages/due-topics/due-topics';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  @Output() buttonClicked = new EventEmitter;
  @Input() dueDays: Array<any> = [];

  constructor(
    public modal: ModalController) {

  }

  openTopics(event, day) {
    let modal = this.modal.create('DueTopicsPage',{Day : day});
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {

      }
    });
  }

}
