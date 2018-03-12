import { Injectable } from '@angular/core';

import * as _ from 'underscore';
import * as moment from 'moment';


@Injectable()
export class DateProvider {

  constructor(

  ) {

  }

  toUTC(date) {
    if (date && moment(date).isValid()) {
      if (!moment.isMoment(date)) {
        date = moment(date);
      }
      return date.utc();
    }
    return date;
  }

  toUTCISOString(date) {
    if (date && moment(date).isValid()) {
      return this.toUTC(date).toISOString() + '';
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

  fromServerFormat(date) {
    if (date) {
      return moment(date).local();
    }
    return moment(date);
  }

}
