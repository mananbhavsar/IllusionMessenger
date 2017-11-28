import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, ModalController } from 'ionic-angular';
import { ConnectionProvider } from "../connection/connection";

import { OfficeListPage } from "../../pages/office-list/office-list";

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import * as _ from 'underscore';

@Injectable()
export class OfficeServiceProvider {
  officeList: any = {};
  loadingOfficeList: Boolean = true;
  isMultipleOffice: boolean | -1 = -1;

  pickupSelectedOffice: any = null;
  caseStatusSelectedOffice: any = null;
  communicationSelectedOffice: any = null;

  user: any = {};
  constructor(
    public storage: Storage,
    public events: Events,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
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
      }
    });

    //on Logout clearing office list
    this.events.subscribe('user:postLogout', () => {
      this.officeList = null;
    });
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
      this.loadingOfficeList = true;
      //loading from firebase
      firebase.database().ref('OfficeList/' + this.user.id).on('value', snapshot => {
        this.officeList = snapshot.val();
        this.loadingOfficeList = false;
        
        if (_.size(this.officeList) > 0) {
          this.isMultipleOffice = _.size(this.officeList) > 1;
          resolve(true);
        } else {
          this.isMultipleOffice = -1;
          reject(false);
        }
      });
    })
  }

  /**
   * returns true if more than one Office is assigned
   */
  isMultiOffice() {
    return this.isMultipleOffice;
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
          reject('No Office/Branch is asigned to you. Kindly contact Admin');
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
        this.events.publish('loading:create', 'loading');
        //subscribing to event
        this.events.subscribe('officeList:loaded', (status) => {
          //closing office list
          this.events.publish('loading:close');
          //sending message
          if (status) {
            resolve(true);
          } else {
            reject('Failed to load Office list');
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
    }
  }
}
