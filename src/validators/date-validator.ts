import { FormControl, AbstractControl, FormGroup } from '@angular/forms';

import * as  moment from 'moment';

export class DateValidator {

    static moreThan(formControl: FormControl) {
        return (c: FormGroup): { [key: string]: any } | null => {
            console.log(formControl);
            if (formControl) {
                let date = formControl.value;
                if (date) {
                    if (!moment.isMoment(date)) {
                        date = moment(date.replace('T', ' ').replace('Z', ''));
                    }
                    if (date.isValid()) {
                        if (date.toDate().getTime() < moment().toDate().getTime()) {
                            // formControl.setErrors({ InvalidDatetime: true });
                            return {
                                dates: "Date from should be less than Date to"
                            };
                        } else {
                        }
                    };
                }
            }
            return null;
        };
    }
}