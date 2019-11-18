import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'call-fab',
  templateUrl: 'call-fab.html'
})
export class CallFabComponent {
  @Output() clicked = new EventEmitter();

  constructor(
  ) {

  }

  openPage(event) {
    this.clicked.emit({
      name: event
    })
  }


}
