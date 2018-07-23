import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DateProvider } from './../../providers/date/date';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  constructor(
    private _date: DateProvider,
  ) {

  }
  transform(value: string, aging: boolean = false, timeAgo: boolean = false) {
    if (value && moment(value).isValid()) {
      let date = this._date.get(value);

      //aging like whatsapp
      if (aging) {
        //convert to moment
        if (!moment.isMoment(date)) {
          date = moment(date, 'Do MMM, hh:mm A');
        }
        //check if today
        if (date.isSame(moment(), 'd')) {
          return date.format('hh:mm A')
        }
        //check if yesterday
        if (date.isSame(moment().subtract(1, 'days').startOf('day'), 'd')) {
          return 'YESTERDAY';
        }
        return date.format('Do MMM');
      }

      //time ago
      if (timeAgo) {
        //convert to moment
        if (!moment.isMoment(date)) {
          date = moment(date, 'Do MMM, hh:mm A');
        }
        return date.from(moment());

      }
      return date;
    }
    return value;
  }
}
