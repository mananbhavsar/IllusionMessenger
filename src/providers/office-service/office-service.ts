import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, ModalController } from 'ionic-angular';
import { ConnectionProvider } from "../connection/connection";

import { OfficeListPage } from "../../pages/office-list/office-list";

import * as _ from 'underscore';

@Injectable()
export class OfficeServiceProvider {
  officeList: any = [];
  loadingOfficeList: Boolean = false;

  pickupSelectedOffice: any = null;
  caseStatusSelectedOffice: any = null;
  communicationSelectedOffice: any = null;
  constructor(
    public storage: Storage,
    public events: Events,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
  ) {
    //to fetch from server
    this.events.subscribe('officeList:get', (officeList) => {
      this.loadingOfficeList = true;
      this.connection.doPost('Dashboard/GetOfficeList', {}, false).then((officeList) => {
        this.storage.set('OfficeList', officeList).then((officeList) => {
          this.officeList = officeList;
          this.loadingOfficeList = false;

          this.events.publish('officeList:loaded', true);
        });
      }).catch((error) => {
        this.loadingOfficeList = false;
        this.events.publish('officeList:loaded', false);
      });
    });
    //event to listen update
    this.events.subscribe('officeList:updated', (officeList) => {
      this.loadingOfficeList = true;
      this.storage.set('OfficeList', officeList).then((officeList) => {
        this.officeList = officeList;
        this.loadingOfficeList = false;

        this.events.publish('officeList:loaded', true);
      });
    });

    //onLogin getting list of offices
    this.events.subscribe('user:ready', (user) => {
      this.events.publish('officeList:get');
    });

    //on Logout clearing office list
    this.events.subscribe('user:postLogout', () => {
      this.storage.remove('OfficeList').then(() => {
        this.officeList = [];
      });
    });
  }

  /**
   * returns true if more than one Office is assigned
   */
  isMultiOffice() {
    if (this.officeList.length > 0) {
      return this.officeList.length > 1;
    }
    return -1;
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

        switch (this.isMultiOffice()) {
          case true:
            //open Office List Modal
            let officeListModal = this.modalCtrl.create(OfficeListPage);
            officeListModal.onDidDismiss((selectedOffice) => {
              if (selectedOffice === null) {
                reject(null);
              } else {
                this.setSelectedOffice(type, selectedOffice);
                resolve(selectedOffice);
              }
            });
            officeListModal.present();
            break;

          case false:
            resolve(this.officeList[0]);
            break;

          case -1:
            reject('No Office/Branch is asigned to you. Kindly contact Admin');
            break;
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
        this.events.publish('loading:create', 'Initializing Office List');
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
        //loaded
        resolve(true);
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
