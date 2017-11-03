import { Component } from '@angular/core';

/**
 * Generated class for the RefreshComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'refresh',
  templateUrl: 'refresh.html'
})
export class RefreshComponent {

  text: string;

  constructor() {
    console.log('Hello RefreshComponent Component');
    this.text = 'Hello World';
  }

}
