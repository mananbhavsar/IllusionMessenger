import { Injectable } from '@angular/core';
import { Platform, ActionSheetController, Events } from 'ionic-angular';
import { ConnectionProvider } from '../connection/connection';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
import { UserProvider } from '../user/user';

@Injectable()
export class CommonProvider {
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isCordova: boolean = false;
  sort_by: any;
  sort_order : any;
  deviceRegsiter : number = 0;
  connectedTime : string;
  deviceInfo : any = {};
  constructor(
    private platform: Platform,
    public actionSheetController  :ActionSheetController,
    public connection : ConnectionProvider,
    public events : Events,
    public _network : Network,
    public _oneSignal : OneSignal,
    public user : UserProvider
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
                    let data = {
                      sort_by : this.sort_by,
                      sort_order : this.sort_order
                    }
                    resolve(data);
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

  getUnreadCount(data:any) {
    return new Promise((resolve,reject) => {
    let field = 'Topic_Wise' + '_Count';
    if (data) {
        if (field in data) {
            if (data[field] > 0) {
                return true;
            }
            return false;
        }
    }
    return false;
  });
}

registerDevice(isPullDown) {
   return new Promise((resolve,reject) => {
  //make device regsiter call
  //if internet
  if (this._network.type === 'none') {
      this.deviceInfo.deviceRegsiter = 0;
  } else if (this.platform.is('core')) {
      if (this.connection.getPushID()) {
          this.deviceInfo.deviceRegsiter = 1;
          this.connectToServer(this.connection.push_id, isPullDown);
      } else {
          this.events.subscribe('pushid:created', (userId) => {
              this.deviceInfo.deviceRegsiter = 1;
              this.connectToServer('1234', isPullDown);
          });
          //wait 15sec and check again for user id
          setTimeout(() => {
              let OneSignal = window['OneSignal'] || [];
              let that = this;
              OneSignal.push(function () {
                  OneSignal.getUserId(function (userId: string) {
                      if (userId) {
                          that.deviceInfo.deviceRegsiter = 1;
                          that.connectToServer(userId, isPullDown);

                      }
                  });
              });
          });
      }
  } else if (this.platform.is('cordova')) {
      this.deviceInfo.deviceRegsiter = 1;
      this._oneSignal.getIds().then((id) => {
          this.connectToServer(id.userId, isPullDown);
      }).catch(error => {
          this.deviceInfo.deviceRegsiter = 0;
      });
  }
  resolve(this.deviceInfo);
});
}

connectToServer(pushID, isPullDown) {
  this.user.registerPushID(pushID, isPullDown).then((response: any) => {
      if (response.Data && response.Data.LastActivity) {
          this.deviceInfo.deviceRegsiter = 2; //connected
          this.deviceInfo.connectedTime = response.Data.LastActivity; //this will be utc
      } else {
          this.deviceInfo.deviceRegsiter = 0;
      }
  }).catch(error => {
      this.deviceInfo.deviceRegsiter = 0;
  });
}

}
