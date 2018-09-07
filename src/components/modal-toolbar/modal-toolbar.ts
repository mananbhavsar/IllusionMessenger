import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-toolbar',
  templateUrl: 'modal-toolbar.html'
})
export class ModalToolbarComponent {
  @Input() title: string = null;
  @Input() subTitle: string = null;
  @Input() badgeCount: number = 0;
  @Input() color: string = 'primary';
<<<<<<< HEAD

=======
  @Input() close:boolean = false;
  @Input() buttons: any = null;
  @Output() buttonClicked = new EventEmitter();
>>>>>>> master
  @Output() dismiss = new EventEmitter();
  constructor() {

  }

  sendDismiss(data) {
    this.dismiss.emit(data);
  }
<<<<<<< HEAD
=======

  sendButtonClicked(button, event) {
    button.event = event;
    this.buttonClicked.emit(button);
}
>>>>>>> master
}