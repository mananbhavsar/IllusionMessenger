import { AbstractControl } from '@angular/forms';

import * as  moment from 'moment';

export class DateValidator {

    static isBefore(abstractControl: AbstractControl) {
        if (abstractControl) {
            let key = 'due_date';//create form
            let minhoursdiff = 3;
            //checking if add flash
            if (abstractControl.get('end_date')) {
                key = 'end_date'
                minhoursdiff = 2;
            }
            let date = abstractControl.get(key).value;
            if (!moment.isMoment(date)) {
                date = moment(date);
            }
            if (date.isValid()) {
                if (date.toDate().getTime() < moment().add(minhoursdiff, 'hours').set({
                    minute: 0,
                    second: 0,
                    millisecond: 0
                }).toDate().getTime()) {
                    abstractControl.get(key).setErrors({ InvalidDatetime: true })
                    return;
                }
            }
        }
        return true;
    }
}