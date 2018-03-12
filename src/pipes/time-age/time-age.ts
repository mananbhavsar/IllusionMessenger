import { DateProvider } from './../../providers/date/date';
import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
@Pipe({
  name: 'timeAge',
})
export class TimeAgePipe implements PipeTransform {
  constructor(
    private _date: DateProvider,
  ) {

  }
  transform(value: string, avoidExtra: boolean = false) {
    return this._date.fromServerFormat(value).fromNow(avoidExtra);
  }
}
