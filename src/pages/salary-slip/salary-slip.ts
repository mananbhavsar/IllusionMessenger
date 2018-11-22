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
  salarySlipData: any = [];
  page: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public platform: Platform,
    public _network : Network,
    public storage  :Storage,
    public _fileOps: FileOpsProvider,
    public events: Events) {

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
      if (this._network.type === 'none') {
        this.storage.get('salaryslips:offline').then((data: any) => {
          if(data){
          this.salarySlipData = data;
          resolve(true);
          }
        });
      } else {
        if (this.page === -1) {
          reject();
        } else {
          this.connection.doPost('Payroll/Get_SalarySlip_Payroll', {
            CompanyID: this.connection.user.CompanyID,
            PageNumber: this.page,
          }).then((response: any) => {
            if (!_.isEmpty(response)) {
              this.salarySlipData = response.SalarySlip;
              this.storage.set('salaryslips',this.salarySlipData);
              this.page++;
              resolve(true);
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
      }
    });
  }

  refresh(refresher) {
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
