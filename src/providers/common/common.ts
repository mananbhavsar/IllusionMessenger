import { Injectable } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Injectable()
export class CommonProvider {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isCordova: boolean = false;
  sort_by: any;
  sort_order : any;
  constructor(
    private platform: Platform,
    public actionSheetController  :ActionSheetController
  ) {
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');
    this.isCordova = this.platform.is('cordova');
    
  }

  build_query(params) {

    var esc = encodeURIComponent;
    return Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
  }

  hasClass(element, cls) {
    if (element && cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
  }

  openSortOption(){
    return new Promise((resolve,reject) => {
        //creating buttons
        let buttons = [];
        let sortingOptions = {
            'CreationDate': 'Creation Date',
            'DueDate': 'Due Date'
        };
        for (let key in sortingOptions) {
            let label = sortingOptions[key];
            let icon = null;
            if (key === this.sort_by) {
                icon = this.sort_order === 'ASC' ? 'ios-arrow-round-up-outline' : 'ios-arrow-round-down-outline';
            }
            buttons.push({
                text: label,
                icon: icon,
                handler: () => {
                    //if not selected initially, making it desc so it could be reversed later
                    if (this.sort_by !== key) {
                        this.sort_order = 'DESC';
                    }
                    this.sort_by = key;
                    this.sort_order = this.sort_order === 'ASC' ? 'DESC' : 'ASC';
                    resolve(true);
                }
            });
          }

        //cancel button
        buttons.push({
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            reject(false);
          }

      });
      //creating action sheet
      let sortActionSheet = this.actionSheetController.create({
          title: 'Select sort options',
          buttons: buttons
      });
      sortActionSheet.present();
    });
  }


  joinAnd(array: Array<string>): string {
    let joined = '';
    if (array.length === 1) {
      joined = array[0];
    } else if (array.length === 2) {
      //joins all with "and" but no commas
      //example: "bob and sam"
      joined = array.join(' and ');
    } else if (array.length > 2) {
      //joins all with commas, but last one gets ", and" (oxford comma!)
      //example: "bob, joe, and sam"
      joined = array.slice(0, -1).join(', ') + ', and ' + array.slice(-1);
    }
    return joined;
  }

}
