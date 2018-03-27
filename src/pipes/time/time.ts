import { DateProvider } from './../../providers/date/date';
import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  constructor(
    private _date: DateProvider,
  ) {

  }
  transform(value: string, avoidExtra: boolean = false) {
    if (value && moment(value).isValid()) {
      return this._date.get(value);
    }
    return value;
  }
}
