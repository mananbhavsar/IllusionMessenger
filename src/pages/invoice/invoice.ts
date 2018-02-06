import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ActionSheetController } from 'ionic-angular';

import { TranslateService } from "@ngx-translate/core";
import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";
import { FileOpsProvider } from "../../providers/file-ops/file-ops";

import * as firebase from 'firebase';
import * as moment from 'moment';
import * as _ from 'underscore';
import { UUID } from 'angular2-uuid';

import { Global } from "../../app/global";

import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  items: any = [];
  itemInvoices: any = [];
  offlineItems: any = {};

  paymentRef: firebase.database.Reference;
  browser: InAppBrowserObject = null;
  paymentSnapshot: any = {};

  loginType: number = 0;
  selectedOffice: any = {};
  selectedCustomerBranchID: string = null;
  global: any = null;

  dataDirectory: string = null;
  downloadDirectory: string = null;

  hasInternet: boolean = true;
  loading: String = 'loading';
  title: string = 'Invoice';
  invoice_translate: string = 'Invoice';
  not_availble_in_offline_translate: string = 'Not available in Offline';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
    private _network: Network,
    private _storage: Storage,
    private translate: TranslateService,
    private actionSheetCtrl: ActionSheetController,
    private _fileOps: FileOpsProvider,
    private _inAppBrowser: InAppBrowser,
    private network: Network,
  ) {
    this.global = Global;
    this.loginType = this.connection.user.LoginTypeID;

    this.hasInternet = this._network.type !== 'none';
  }

  doTranslate() {
    //loading
    this.translate.get('Common._Loading_').subscribe(translated => {
      this.loading = translated;
    });
    //title
    this.translate.get('HomeScreen._Invoice_').subscribe(translated => {
      this.title = translated;
    });
    //Not Available in Offline
    this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(translated => {
      this.not_availble_in_offline_translate = translated;
    });
  }

  ionViewCanEnter() {
    this.doTranslate();
    if (this.network.type === 'none') {
      this.events.publish('toast:error', this.not_availble_in_offline_translate);
    }
    return this.network.type !== 'none';
  }

  ionViewDidEnter() {
    this.doTranslate();
    if (_.isEmpty(this.selectedOffice)) {
      this.offliceList.getOffice('Invoice').then((selectedOffice) => {
        this.selectedOffice = selectedOffice;
        if (this.selectedOffice) {
          this.selectedCustomerBranchID = this.selectedOffice.CustomerBranchID;

          //creating folder
          this._fileOps.getDataDirectory().then((path: string) => {
            this.dataDirectory = path;

            this.downloadDirectory = this.dataDirectory + 'invoice/';
            this._fileOps.createDirectoryIfNotExist(this.dataDirectory, 'invoice');
          }).catch(error => {
            console.log(error);
          });

          this.setTitle();
          this.initOffline();
        }

        this.initData().then(response => { }).catch(error => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
        if (error !== null) {
          this.events.publish('toast:error', error);
        }
        this.navCtrl.popToRoot();
      })
    }
  }

  setTitle() {
    this.title = this.invoice_translate;
  }

  initData() {
    return new Promise((resolve, reject) => {
      if (this.hasInternet) {
        setTimeout(() => {
          this.connection.doPost('MobileApp/GetInvoiceDetails', {
            BranchID: this.selectedCustomerBranchID,
          }, this.items.length === 0).then((response: any) => {
            let data = response;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              this.pushItem(data[i], true);
            }
            this.saveOfflineData();
          }).catch(error => {
            reject(error);
          });
        });
      } else {
        reject(false);
      }
    });
  }

  ngOnDestroy() {
    if (this.paymentRef) {
      this.paymentRef.off('value');
    }
  }

  initOffline() {
    return new Promise((resolve, reject) => {
      this._storage.get('OfflineInvoice').then(invoices => {
        if (_.isEmpty(invoices)) {
          invoices = {};
        }
        //checking if this office is set
        if (!(this.selectedCustomerBranchID in invoices)) {
          invoices[this.selectedCustomerBranchID] = {};
        }
        this.offlineItems = invoices[this.selectedCustomerBranchID];

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

  pushItem(item, addToOffline: boolean = true) {
    //converting impressDate to timeinmili
    item['InvoiceDateInMili'] = new Date(item.InvoiceDate).getTime();

    let invoiceNo = item.InvoiceNo;
    let index = this.itemInvoices.indexOf(invoiceNo);
    if (index === -1) {
      index = this.items.push(item);
      //adding impression
      this.itemInvoices.push(invoiceNo);
    } else {
      this.items[index] = item;
    }
    //adding to Offline
    if (addToOffline) {
      this.addToOffline(item);
    }
    return index;
  }

  addToOffline(item) {
    this.offlineItems[item.InvoiceNo] = item;
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this._storage.get('OfflineInvoice').then(invoices => {
        if (_.isEmpty(invoices)) {
          invoices = {};
        }
        //checking if this office is set
        if (!(this.selectedCustomerBranchID in invoices)) {
          invoices[this.selectedCustomerBranchID] = {};
        }
        invoices[this.selectedCustomerBranchID] = this.offlineItems;

        this._storage.set('OfflineInvoice', invoices).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }


  openInvoice(item, index) {
    if (this.hasInternet) {
      if (item.URL) {
        //showing ActionSheet 
        let selection = this.actionSheetCtrl.create({
          title: 'Select an option',
          buttons: [{
            text: 'Download',
            handler: () => {
              this.downloadAndOpen(item);
            }
          }, {
            text: 'Email',
            handler: () => {
              this.email(item);
            }
          }, {
            text: 'Cancel',
            role: 'cancel'
          },]
        });
        selection.present();
      } else {
        this.events.publish('alert:basic', 'Alert', item.Message);
      }
    }
  }

  email(item) {
    this.connection.doPost('MobileApp/Invoice_SendMail', {
      InvoiceNo: item.InvoiceNo
    }, 'sending').then((response: any) => {
      this.events.publish('toast:' + (response.Status ? 'create' : 'error'), response.Message);
    }).catch(error => {

    });
  }

  downloadAndOpen(item) {
    this._fileOps.getFile(item.URL, this.downloadDirectory).then(status => {
      let nativeURL = this._fileOps.getNativeURL(item.URL, this.downloadDirectory);
      //open File
      this._fileOps.openFile(item.URL, this.downloadDirectory);
    }).catch(error => {

    });
  }

  makePayment() {
    //create uuid to identify it
    let payment_uuid = UUID.UUID();
    console.log(payment_uuid);

    //making request to server to save sync this uuid
    this.connection.doPost('MobileApp/GetTransactionURL', {
      UUID: payment_uuid
    }).then((response: any) => {
      //listening to status change event
      if (this.paymentRef) {
        this.paymentRef.off('value');
      }
      this.paymentRef = firebase.database().ref('Payment/' + payment_uuid);
      this.paymentRef.on('value', snapshot => {
        this.paymentSnapshot = snapshot.val();

        switch (this.paymentSnapshot.Status) {
          case 'Initiate':
            //open inAppBrowser 
            this.browser = this._inAppBrowser.create(response.URL, '_blank', {
              zoom: 'no',
              location: 'yes',
              enableViewportScale: 'no',
              toolbar: 'no'
            });
            this.browser.show();
            break;

          case 'Success':
            this.browser.close();
            break;

          case 'Failed':
            this.browser.close();
            break;
        }

        if (this.paymentSnapshot.Status === 'Initiate') {
          //listening to close event
          this.browser.on('exit').subscribe((event) => {
            this.paymentRef.off('value');
            this.paymentRef = null;

            if (['Success', 'Failed'].indexOf(this.paymentSnapshot.Status) > -1) {
              setTimeout(() => {
                this.events.publish('alert:basic', this.paymentSnapshot.Status + '!', this.paymentSnapshot.Message);
                //loading data again if success to get latest payment
                if (this.paymentSnapshot.Status === 'Success') {
                  this.initData().catch(error => { });
                }
              });
            }
          }, (error) => {
            console.log(error);
          });
        }
      });

    }).catch(error => {
      console.log(error);
    });

  }

}
