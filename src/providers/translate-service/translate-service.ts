import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TranslateServiceProvider {
  language: string = 'en';

  data: any = {};
  constructor(
    public http: Http,
  ) {
    this.getJSONData();
  }

  setDefaultLang(language) {
    this.language = language;
    //now ask everyone to change lang and send me content
    this.getJSONData();
  }


  get(key: string): Observable<string> {
    return new Observable(((obervable) => {
      let found = this.find(key);

      obervable.next(found);
      obervable.complete();
    }));
  }

  find(key) {
    let found = true;
    let foundData = this.data;

    if (key) {
      let keys = key.split('.');
      keys.forEach((key, index) => {
        //check if exist
        if (key in foundData) {
          foundData = foundData[key];
        } else {
          found = false
        }
      });
    }
    if (found) {
      return foundData;
    }
    return '';
  }

  use(language) {
    this.language = language;
    this.getJSONData();
  }

  getJSONData() {
    this.http.get('assets/i18n/' + this.language + '.json').map(res => res.json()).subscribe(data => {
      this.data = data;
    });
  }

}
