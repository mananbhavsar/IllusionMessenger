import { AutoCompleteService } from 'ionic2-auto-complete-ng5';
import { Injectable } from "@angular/core";

@Injectable()
export class UserAutoCompleteService implements AutoCompleteService {
    labelAttribute = "User";
    formValueAttribute = "UserCode"

    participants: Array<any> = [];
    constructor(
    ) {
    }

    getResults(keyword: string) {
        let results: Array<any> = [];
        this.participants.forEach(user => {
            if (user.User.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                results.push(user);
            }
        });
        return results;
    }
}