import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Events, ModalController } from 'ionic-angular';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(
    public modal: ModalController,
    public event: Events,
    public network: Network) {
  }

}
