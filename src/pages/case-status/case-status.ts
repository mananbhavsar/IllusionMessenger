import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, Content, AlertController } from 'ionic-angular';

import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";
import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { TranslateService } from "@ngx-translate/core";

import { ChatPage } from "../chat/chat";

import { CaseStatusModalPage } from "./case-status-modal/case-status-modal";
import * as _ from 'underscore';

import { Global } from "../../app/global";

import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-case-status',
  templateUrl: 'case-status.html'
})
export class CaseStatusPage {
  @ViewChild(Content) content: Content;
  title: String = 'loading';
  status = {
    'All': { label: 'All', color: 'danger' },
    'In Process': { label: 'In Process', color: 'danger' },
    'Job Delivered': { label: 'Ready To Deliver', color: 'danger' },
    'Job Dispatched': { label: 'Dispatched', color: 'secondary' }
  };
  selectedOffice: any = {};
  selectedCustomerBranchID: string = null;
  global: any = null;

  selectedTab = 'All';
  page: number = 0;

  items: any = [];
  itemImpressions = [];
  itemsSearchCopy: any = [];

  offlineItems: any = {};

  searchText: string = '';
  showSearchBar: boolean = true;
  loginType: number = 0;

  hasInternet: boolean = true;
  case_status: string = 'Case Status';
  constructor(
    public navCtrl: NavController,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
    private _firebaseTransaction: FirebaseTransactionProvider,
    private _network: Network,
    private _storage: Storage,
    private alertCtrl: AlertController,
    private translate: TranslateService,
  ) {
    this.global = Global;
    this.loginType = this.connection.user.LoginTypeID;

    this.hasInternet = this._network.type !== 'none';
    this.events.subscribe('network:online', () => {
      this.hasInternet = true;
    });
    this.events.subscribe('network:offline', () => {
      this.hasInternet = false;
    });
  }

  doTranslate() {
    //loading
    this.translate.get('Common._Loading_').subscribe(translated => {
      if (this.title === 'loading') {
        this.title = translated;
      }
    });
    //case staus
    this.translate.get('CaseStatus._CaseStatus').subscribe(translated => {
      this.case_status = translated;
    });
    //all
    this.translate.get('CaseStatus._All_').subscribe(translated => {
      this.status['All'].label = translated;
    });
    //In Process
    this.translate.get('CaseStatus._InProcess_').subscribe(translated => {
      this.status['In Process'].label = translated;
    });
    //Job Delivered
    this.translate.get('CaseStatus._ReadyToDeliver_').subscribe(translated => {
      this.status['Job Delivered'].label = translated;
    });
    //Job Dispatched
    this.translate.get('CaseStatus._Dispatched').subscribe(translated => {
      this.status['Job Dispatched'].label = translated;
    });
  }

  ionViewDidEnter() {
    this.doTranslate();
    if (_.isEmpty(this.selectedOffice)) {
      this.offliceList.getOffice('CaseStatus').then((selectedOffice) => {
        this.selectedOffice = selectedOffice;
        if (this.selectedOffice) {
          this.selectedCustomerBranchID = this.selectedOffice.CustomerBranchID;

          this.setTitle();
          this.initOffline();
        }


        this.initData().then(response => { }).catch(error => {
          console.log(error);
        });
      }).catch((error) => {
        this.events.publish('toast:error', error);
        this.navCtrl.popToRoot();
      })
    }
  }

  initData() {
    return new Promise((resolve, reject) => {
      if (this.hasInternet) {
        setTimeout(() => {
          this.connection.doPost('CaseSearch/CaseSearchBy', {
            JobEntryNo: null,
            ReferenceEntryNo: null,
            Patient: null,
            BranchID: this.selectedCustomerBranchID,
            DoctorID: 0,
            Status: "",
            DisablePaging: false,
            PageNumber: this.page,
            RowsPerPage: 500,
            SortDetails: null,
            DateRange: null,
          }, this.items.length === 0).then((response: any) => {
            let data = response.Data;

            for (let i = 0; i < data.length; i++) {
              this.pushItem(data[i], true);
            }
            this.saveOfflineData();

            this.page++;
            //now doing firebase transaction
            this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => {
              resolve(data.length);
            }).catch(error => {
              resolve(data.length);
            });
          }).catch(error => {
            this.page = -1;
            reject(error);
          });
        });
      } else {
        reject(false);
      }
    });
  }

  segmentChanged(event) {
    this.selectedTab = event.value;
    this.setTitle();

    this.scrollToTop();
  }

  setTitle() {
    this.title = this.case_status + ': ' + this.status[this.selectedTab].label;
  }

  scrollToTop() {
    setTimeout(() => {
      if (this.content.resize) {
        this.content.resize();
      }
      if (this.content.scrollToTop) {
        this.content.scrollToTop();
      }
    });
  }

  getStatusColor(status) {
    return this.status[status].color;
  }

  getStatusLabel(status) {
    return this.status[status].label;
  }

  doInfinite(paginator) {
    if (this.hasInternet) {
      this.initData().then((response) => {
        paginator.complete();
      }).catch((error) => {
        paginator.enable(false);
      })
    } else {
      paginator.enable(false);
      this.events.subscribe('network:online', () => {
        if (paginator) {
          paginator.enable(true);
        }
      });
    }
  }

  onCancel(event) {
    this.items = this.itemsSearchCopy;
  }

  isHidden(status) {
    if (this.selectedTab === 'All') {
      return false;
    }
    return status !== this.selectedTab
  }

  openCase(item, index) {
    this.setIsNew(item, index);

    //only for Dispatched
    if (item.Status === 'Job Dispatched') {
      let modal = this.modalCtrl.create(CaseStatusModalPage, item);
      modal.onDidDismiss(data => {

      });
      modal.present();
    }
  }

  getItems(searchText) {
    const fields = ['Doctor', 'ImpressionNo', 'ReferenceEntryNo', 'Patient'];
    // Reset items back to all of the items
    this.items = this.itemsSearchCopy;

    // if the value is an empty string don't filter the items
    if (searchText && searchText.trim() != '') {
      //lowercase 
      searchText = searchText.toLowerCase();
      this.items = this.items.filter((item) => {
        for (let i = 0; i < fields.length; i++) {
          if (item[fields[i]].toLowerCase().indexOf(searchText) > -1) {
            return true;
          }
        }
        return false;
      });
    }
  }

  headerButtonClicked(event) {
    if (event.icon === 'search') {
      this.showSearchBar = !this.showSearchBar;
      this.scrollToTop();
      this.selectedTab = 'All';
    }
  }

  pushItem(item, addToOffline: boolean = true) {
    //converting impressDate to timeinmili
    item['ImpressionDateInMili'] = new Date(item.ImpressionDateTime).getTime();

    let impressionNo = item.ImpressionNo;
    let index = this.itemImpressions.indexOf(impressionNo);
    if (index === -1) {
      index = this.items.push(item);
      //making copy for search
      this.itemsSearchCopy.push(item);
      //adding impression
      this.itemImpressions.push(impressionNo);
    } else {
      this.items[index] = item;
      //making copy for search
      this.itemsSearchCopy[index] = item;
    }
    //adding to Offline
    if (addToOffline) {
      this.addToOffline(item);
    }
    return index;
  }

  initOffline() {
    return new Promise((resolve, reject) => {
      this._storage.get('OfflineCaseStatus').then(caseStatus => {
        if (_.isEmpty(caseStatus)) {
          caseStatus = {};
        }
        //checking if this office is set
        if (!(this.selectedCustomerBranchID in caseStatus)) {
          caseStatus[this.selectedCustomerBranchID] = {};
        }
        this.offlineItems = caseStatus[this.selectedCustomerBranchID];

        //init List
        for (let key in this.offlineItems) {
          this.pushItem(this.offlineItems[key], false);
        }
        //saveOffline
        this.saveOfflineData().then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        })
      }).catch(error => {
        reject(error);
      });
    });
  }

  addToOffline(item) {
    this.offlineItems[item.ImpressionNo] = item;
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this._storage.get('OfflineCaseStatus').then(caseStatus => {
        if (_.isEmpty(caseStatus)) {
          caseStatus = {};
        }
        //checking if this office is set
        if (!(this.selectedCustomerBranchID in caseStatus)) {
          caseStatus[this.selectedCustomerBranchID] = {};
        }
        caseStatus[this.selectedCustomerBranchID] = this.offlineItems;

        this._storage.set('OfflineCaseStatus', caseStatus).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  setIsNew(item, index) {
    return new Promise((resolve, reject) => {
      if (item.IsNew) {
        item.IsNew = 0;
        this.items[index].IsNew = 0;
        this.offlineItems[item.ImpressionNo].IsNew = 0;

        this.saveOfflineData().then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      } else {
        resolve(true);
      }
    });
  }

  openChat(item, index, event) {
    //stopping propogaton
    event.preventDefault();
    event.stopPropagation();

    if (item.TicketNo && item.TicketNo !== '') {
      this.navCtrl.push(ChatPage, item.TicketNo);
    } else {

      let alert = this.alertCtrl.create({
        title: 'Alert',
        message: item.PopupMessage,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {

            }
          },
          {
            text: 'Ok',
            handler: () => {

              this.connection.doPost('Communication/InitiateChat', {
                ImpNo: item.ImpressionNo
              }, true).then((response: any) => {
                let data = response.Data[0];
                item.TicketNo = data.TicketNo;
                this.items[index].TicketNo = data.TicketNo;

                this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(status => {
                  this.navCtrl.push(ChatPage, data.TicketNo);
                }).catch(error => {
                  console.log(error);
                  if (error === 'Empty') {
                    this.navCtrl.push(ChatPage, data.TicketNo);
                  }
                });
              }).catch(error => {
                console.log(error);
              });
            }
          }
        ]
      });
      alert.present();

    }
  }
}
