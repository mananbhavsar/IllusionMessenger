import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ConnectionProvider } from '../../providers/connection/connection';
import { Events } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'internet-status',
  templateUrl: 'internet-status.html'
})
export class InternetStatusComponent {
  deviceRegsiter : number = 0;
  connectedTime: string = null;
  constructor(
    public user : UserProvider,
    public platform : Platform,
    public _network : Network,
    public connection : ConnectionProvider,
    public _oneSignal : OneSignal,
    public events : Events
  ) {
    this.registerDevice(false);
  }

  registerDevice(isPullDown) {
    //make device regsiter call
    //if internet
    if (this._network.type === 'none') {
        this.deviceRegsiter = 0;
    } else if (this.platform.is('core')) {
        if (this.connection.getPushID()) {
            this.deviceRegsiter = 1;
            this.connectToServer(this.connection.push_id, isPullDown);
        } else {
            this.events.subscribe('pushid:created', (userId) => {
                this.deviceRegsiter = 1;
                this.connectToServer(userId, isPullDown);

            });
            //wait 15sec and check again for user id
            setTimeout(() => {
                let OneSignal = window['OneSignal'] || [];
                let that = this;
                OneSignal.push(function () {
                    OneSignal.getUserId(function (userId: string) {
                        if (userId) {
                            that.deviceRegsiter = 1;
                            that.connectToServer(userId, isPullDown);

                        }
                    });
                });
            });
        }
    } else if (this.platform.is('cordova')) {
        this.deviceRegsiter = 1;
        this._oneSignal.getIds().then((id) => {
            this.connectToServer(id.userId, isPullDown);
        }).catch(error => {
            this.deviceRegsiter = 0;
        });
    }
}

  connectToServer(pushID, isPullDown) {
    this.user.registerPushID(pushID, isPullDown).then((response: any) => {
        if (response.Data && response.Data.LastActivity) {
            this.deviceRegsiter = 2; //connected
            this.connectedTime = response.Data.LastActivity; //this will be utc
        } else {
            this.deviceRegsiter = 0;
        }
    }).catch(error => {
        this.deviceRegsiter = 0;
    });
}

}
