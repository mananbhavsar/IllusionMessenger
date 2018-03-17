import { FormControl, AbstractControl, FormGroup } from '@angular/forms';

import * as  moment from 'moment';

export class DateValidator {

    static isBefore(abstractControl: AbstractControl) {
        if (abstractControl) {
            let key = 'due_date';//create form
            //checking if add flash
            if (abstractControl.get('end_date')) {
                key = 'end_date'
            }
            let date = abstractControl.get(key).value;
            if (!moment.isMoment(date)) {
                date = moment(date);
            }
            if (date.isValid()) {
                if (date.toDate().getTime() < moment().toDate().getTime()) {
                    abstractControl.get(key).setErrors({ InvalidDatetime: true })
                    return;
                }
            }
        }
        return true;
    }
}