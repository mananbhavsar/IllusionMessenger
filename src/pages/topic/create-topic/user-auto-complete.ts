import { ConnectionProvider } from './../../../providers/connection/connection';
import { AutoCompleteService } from 'ionic2-auto-complete-ng5';
import { Injectable } from "@angular/core";

@Injectable()
export class UserAutoCompleteService implements AutoCompleteService {
    labelAttribute = "User";
    formValueAttribute = "UserCode"

    participants: Array<any> = [];
    constructor(
        private connection: ConnectionProvider,
    ) {
    }

    getResults(keyword: string) {
        let results: Array<any> = [];
        this.participants.forEach(user => {
            user = user.User[0];
            //avoiding self
            if (user.User.UserID !== this.connection.user.id) {
                if (user.User.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                    results.push(user);
                }
            }
        });
        return results;
    }
}