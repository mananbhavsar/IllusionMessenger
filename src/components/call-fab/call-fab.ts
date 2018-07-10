import { Component, Input } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number';
import { Global } from '../../app/global';
@Component({
  selector: 'call-fab',
  templateUrl: 'call-fab.html'
})
export class CallFabComponent {
  @Input() type: string;
  constructor(
    public callNumber: CallNumber,
  ) {

  }

  call() {
    let number = null;
    switch (this.type) {
      case 'PickUp':
        number = Global.support.pick_up;
        break;

      case 'CaseStatus':
        number = Global.support.case_status;
        break;

      default:
        number = Global.support.landline;
        break
    }
    if (number) {
      this.callNumber.callNumber(number, true);
    }
  }
}
