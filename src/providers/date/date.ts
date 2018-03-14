import { Injectable } from '@angular/core';

import * as _ from 'underscore';
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
      return date.format('Do MMM, hh:mm A');
    }
    return date;
  }

  get(date) {
    if (date) {
      return this.format(this.fromServerFormat(date));
    }
    return date;
  }

  toUTC(date) {
    if (date && moment(date).isValid()) {
      if (!moment.isMoment(date)) {
        date = moment(date);
        date.set({ second: 0, millisecond: 0 })
      }
      return date.utc();
    }
    return date;
  }

  toUTCISOString(date) {
    if (date && moment(date).isValid()) {
      if (typeof date === 'string') {
        date = this.replaceTZ(date);
      }
      return this.toUTC(date).toISOString() + '';
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
