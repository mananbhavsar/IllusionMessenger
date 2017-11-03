import { Component } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number';
import { Global } from '../../app/global';
@Component({
  selector: 'call-fab',
  templateUrl: 'call-fab.html'
})
export class CallFabComponent {

  constructor(
    public callNumber: CallNumber,
  ) {

  }

  call() {
    this.callNumber.callNumber(Global.support.landline, true);
  }
}
