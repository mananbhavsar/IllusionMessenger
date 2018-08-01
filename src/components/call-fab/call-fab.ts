import { Component,Output,EventEmitter, Input } from '@angular/core';
import { Global } from '../../app/global';
@Component({
  selector: 'call-fab',
  templateUrl: 'call-fab.html'
})
export class CallFabComponent {
 @Output() clicked = new EventEmitter();

  constructor(
  ) {

  }

  openPage(event){
   this.clicked.emit({
     name : event
   })
  }
  

}
