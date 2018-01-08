import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, ModalController } from 'ionic-angular';
import { ConnectionProvider } from "../connection/connection";

import { OfficeListPage } from "../../pages/office-list/office-list";

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import * as _ from 'underscore';

import { Network } from '@ionic-native/network';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class OfficeServiceProvider {
  officeList: any = {};
  loadingOfficeList: Boolean = true;
  isMultipleOffice: boolean | -1 = -1;

  pickupSelectedOffice: any = null;
  caseStatusSelectedOffice: any = null;
  communicationSelectedOffice: any = null;
  invoiceSelectedOffice: any = null;
  paymentsSelectedOffice: any = null;

  user: any = {};

  office_list_unavailable_translate: string = 'No Office/Branch is asigned to you. Kindly contact Admin';
  failed_to_load_translate: string = 'Failed to load Office list';
  loading_translate: string = 'loading';
  constructor(
    public storage: Storage,
    public events: Events,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
    private _network: Network,
    private translate: TranslateService,
  ) {
    //setting user ID
    this.setUser().catch(error => { });

    //to fetch from server
    this.events.subscribe('officeList:get', (officeList) => {
      this.setUser().then(status => {
        //getting Office List
        this.loadOfficeList().then(status => {
          this.events.publish('officeList:loaded', true);
        }).catch(error => {
          this.events.publish('officeList:loaded', true);
        });
      }).catch(error => { });
    });

    //onLogin getting list of offices
    this.events.subscribe('user:ready', (user) => {
      if (user) {
        this.events.publish('officeList:get');
      } else {
        this.reset();
      }
    });

    //on Logout clearing office list
    this.events.subscribe('user:postLogout', () => {
      this.reset();
    });

  }

  doTranslate() {
    //unavailable
    this.translate.get('OfficeList._OfficeListUnavailable_').subscribe(translated => {
      this.office_list_unavailable_translate = translated;
    });
    //failed to load
    this.translate.get('OfficeList._FailedToLoad_').subscribe(translated => {
      this.failed_to_load_translate = translated;
    });
    //loading
    this.translate.get('Common._Loading_').subscribe(translated => {
      this.loading_translate = translated;
    });
  }

  reset() {
    this.officeList = {};
    this.loadingOfficeList = true;
    this.isMultipleOffice = -1;
  }

  setUser() {
    return new Promise((resolve, reject) => {
      this.storage.get('User').then(User => {
        this.user = User;
        resolve(true);
      }).catch(error => {
        reject();
      });
    });
  }

  loadOfficeList() {
    return new Promise((resolve, reject) => {
      this.doTranslate();
      this.loadingOfficeList = true;
      //checking if has internet
      if (this._network.type === 'none') { //offline
        this.storage.get('OfflineOfficeList').then(officeList => {
          this.officeList = officeList;
          this.loadingOfficeList = false;

          this.setMultiOffice().then(status => {
            resolve(status);
          }).catch(status => {
            reject(status);
          });
        })
      } else { //online
        //loading from firebase
        firebase.database().ref('OfficeList/' + this.user.id).on('value', snapshot => {
          this.officeList = snapshot.val();
          this.storage.set('OfflineOfficeList', this.officeList);
          this.loadingOfficeList = false;

          this.setMultiOffice().then(status => {
            resolve(status);
          }).catch(status => {
            reject(status);
          });
        });
      }
    })
  }

  /**
   * returns true if more than one Office is assigned
   */
  isMultiOffice() {
    return this.isMultipleOffice;
  }

  setMultiOffice() {
    return new Promise((resolve, reject) => {
      if (_.size(this.officeList) > 0) {
        this.isMultipleOffice = _.size(this.officeList) > 1;
        resolve(true);
      } else {
        this.isMultipleOffice = -1;
        reject(false);
      }
    });
  }
  /**
   * returns selected Office or open Modal to selects on
   * @param type PageType
   * return this will return
   * -1 if no data found from server
   * office object, if selected
   * null, if nothing selected and closed
   */
  getOffice(type) {
    return new Promise((resolve, reject) => {
      //deselecting office list for page
      this.setSelectedOffice(type, null);

      this.isOfficeListLoaded().then(() => {

        //checking for number of office
        let multiOfficeFlag = this.isMultiOffice();
        if (multiOfficeFlag === true) {//more than one office. Need to select one
          //open Office List Modal
          let officeListModal = this.modalCtrl.create(OfficeListPage, {
            modelFlagName: type
          });
          officeListModal.onDidDismiss((selectedOffice) => {
            if (selectedOffice === null) {
              reject(null);
            } else {
              this.setSelectedOffice(type, selectedOffice);
              resolve(selectedOffice);
            }
          });
          officeListModal.present();
        } else if (multiOfficeFlag === false) { //just one office
          let first = this.officeList[Object.keys(this.officeList)[0]];
          resolve(first);
        } else { //no office
          reject(this.office_list_unavailable_translate);
        }
      }).catch((message) => {
        reject(message);
      });

    });
  }

  isOfficeListLoaded() {
    return new Promise((resolve, reject) => {
      //not loaded yet. Show loading and wait to load
      if (this.loadingOfficeList) {
        //showing loading
        this.events.publish('loading:create', this.loading_translate);
        //setting timeout of 10 secs to reload
        setTimeout(() => {
          if (this.loadingOfficeList) {//still loading
            this.events.publish('loading:close');
            //trying to load again
            this.loadOfficeList().then(status => {
              resolve(status);
            }).catch(error => {
              reject('Failed to load. Try again');
            });
          }
        }, 5000);
        //subscribing to event
        this.events.subscribe('officeList:loaded', (status) => {
          //closing office list
          this.events.publish('loading:close');
          //sending message
          if (status) {
            resolve(true);
          } else {
            reject(this.failed_to_load_translate);
          }
        });
      } else {
        if (_.isEmpty(this.officeList) || _.size(this.officeList) === 0) {
          //checking if it has offices or we will try to load again before moving back
          this.loadOfficeList().then(status => {
            resolve(true);
          }).catch(status => {
            resolve(true);
          });
        } else {
          resolve(true);
        }
      }
    });
  }

  setSelectedOffice(page, data) {
    switch (page) {
      case 'Pickup':
        this.pickupSelectedOffice = data;
        break;

      case 'CaseStatus':
        this.caseStatusSelectedOffice = data;
        break;

      case 'Communication':
        this.communicationSelectedOffice = data;
        break;

      case 'Invoice':
        this.invoiceSelectedOffice = data;
        break;

      case 'Payments':
        this.paymentsSelectedOffice = data;
        break;
    }
  }
}
