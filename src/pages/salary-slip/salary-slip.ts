import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Events } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';
import { FileOpsProvider } from '../../providers/file-ops/file-ops';
import { UUID } from 'angular2-uuid';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-salary-slip',
  templateUrl: 'salary-slip.html',
})
export class SalarySlipPage {
  title: string = 'Salary Slip';
  salarySlipData: Array<any>  = null;
  pushedSalarySlipID : Array<any> = [];
  page: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public platform: Platform,
    public _network : Network,
    public storage  :Storage,
    public _fileOps: FileOpsProvider,
    public events: Events) {
  }

  ionViewWillEnter() {
    this.setTitle();
    this.salarySlipData = [];
    this.storage.get('offline:salary-slips').then((slips: any) => {
      if (_.isEmpty(slips)) {
        slips = [];
      }
      slips.forEach(slip => {
        this.pushItem(slip);
      });
    });
    this.getData();
  }


  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Salary Slip';
    });
  }

  getTitle() {
    return this.title;
  }

  download(file) {
    if (!_.isEmpty(file)) {
      if (this.platform.is('core')) {
        window.open(file, '_blank');
      } else {
        this._fileOps.getDataDirectory().then(path => {
          let identifier = UUID.UUID();
          let filePath = path + 'Salary Slips' + '/';
          this._fileOps.openRemoteFile(file, filePath, identifier).then(status => {
          }).catch(error => {
          });
        });
      }
    } else {
      this.events.publish('toast:create', 'No file Found');
    }
  }

  getData() {
    return new Promise((resolve, reject) => {
        if (this.page === -1) {
          reject();
        } else {
          this.connection.doPost('Payroll/Get_SalarySlip_Payroll', {
            CompanyID: this.connection.user.CompanyID,
            PageNumber: this.page,
          }).then((response: any) => {
            if (!_.isEmpty(response)) {
              response.SalarySlip.forEach(slips => {
                this.pushItem(slips);
              });
              this.page++;
              this.saveOfflineData().then(status => {
                resolve(status);
              });
            } else {
              this.page = -1;
              resolve(false);
            }
          }).catch((error) => {
            this.page = -1;
            resolve(false);
            reject();
          });
        }
    });
  }

  pushItem(item) {
    let index = this.pushedSalarySlipID.indexOf(item.TransactionNumber);
    if (index === -1) {//push
      this.salarySlipData.push(item);
      this.pushedSalarySlipID.push(item.TransactionNumber);
    } else {
      this.salarySlipData[index] = item;
    }
  }

  saveOfflineData() {
    return new Promise((resolve, reject) => {
      this.storage.get('offline:salary-slips').then(request => {
        request = this.salarySlipData;
        this.storage.set('offline:salary-slips', request).then(status => {
          resolve(status);
        }).catch(error => {
          reject(error);
        });
      })
    });
  }

  refresh(refresher) {
    this.salarySlipData = [];
    this.page = 0;
    this.storage.get('offline:salary-slips').then((slips: any) => {
      if (_.isEmpty(slips)) {
        slips = [];
      }
      slips.forEach(slip => {
        this.pushItem(slip);
      });
    });
    this.getData().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }

  paginate(paginator) {
    this.getData().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }


}
