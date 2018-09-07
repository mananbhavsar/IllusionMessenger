import { Injectable } from '@angular/core';
<<<<<<< HEAD

import * as _ from 'underscore';
=======
>>>>>>> master
import * as moment from 'moment';


@Injectable()
export class DateProvider {

  constructor(

  ) {

  }

  format(date) {
    if (date) {
      if (!moment.isMoment(date)) {
        date = moment(date);
      }
<<<<<<< HEAD
      return date.format('Do MMM, hh:mm A');
=======
      return date.locale('en').format('DD MMM, hh:mm A');
>>>>>>> master
    }
    return date;
  }

  get(date) {
    if (date) {
      return this.format(this.fromServerFormat(date));
    }
    return date;
  }

  toUTC(date, minuteFlag: boolean = true, secondFlag: boolean = true) {
    if (date && moment(date).isValid()) {
      if (!moment.isMoment(date)) {
        date = moment(date);
        let zeroParams = {
          millisecond: 0
        };
        if (minuteFlag) {
          zeroParams['minute'] = 0;
        }
        if (secondFlag) {
          zeroParams['second'] = 0;
        }
        date.set(zeroParams);
      }
      return date.utc();
    }
    return date;
  }

  toUTCISOString(date, minuteFlag: boolean = true, secondFlag: boolean = true) {
    if (date && moment(date).isValid()) {
      if (typeof date === 'string') {
        date = this.replaceTZ(date);
      }
      return this.toUTC(date, minuteFlag, secondFlag).toISOString() + '';
    }
    return date;
  }

  replaceTZ(date) {
    if (date) {
      return date.replace('T', ' ').replace('Z', '');
    }
    return date;
  }

  toLocal(date) {
    if (date && moment(date).isValid()) {
      if (moment(date).isLocal()) {
        return moment(date);
      }
      return moment(date).local();
    }
    return date;
  }

  fromServerFormat(date): moment.Moment {
    if (date) {
      return moment(date).local();
    }
    return moment(date);
  }

}
