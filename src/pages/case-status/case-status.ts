import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, Content } from 'ionic-angular';

import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";

import { CaseStatusModalPage } from "./case-status-modal/case-status-modal";

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
    'Job Delivered': { label: 'Reay To Deliver', color: 'danger' },
    'Job Dispatched': { label: 'Dispatched', color: 'secondary' }
  };
  selectedOffice: any = {};
  selectedTab = 'All';
  page: number = 0;
  items: any = [];
  itemsSearchCopy: any = [];
  showSearchBar: boolean = true;
  loginType: number = 0;
  constructor(
    public navCtrl: NavController,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
    public modalCtrl: ModalController,
  ) {
    this.loginType = this.connection.user.LoginTypeID;
  }

  ionViewDidLoad() {
    this.offliceList.getOffice('CaseStatus').then((selectedOffice) => {
      this.selectedOffice = selectedOffice;
      this.setTitle();

      this.initData();
    }).catch((error) => {
      this.events.publish('toast:error', error);
      this.navCtrl.popToRoot();
    })
  }

  initData() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('CaseSearch/CaseSearchBy', {
        JobEntryNo: null,
        ReferenceEntryNo: null,
        Patient: null,
        BranchID: this.selectedOffice.CustomerBranchID,
        DoctorID: 0,
        Status: "",
        DisablePaging: false,
        PageNumber: this.page,
        RowsPerPage: 100,
        SortDetails: null,
        DateRange: null,
      }).then((response: any) => {
        for (let i = 0; i < response.length; i++) {
          this.items.push(response[i]);
          //making copy for search
          this.itemsSearchCopy.push(response[i]);
        }
        this.page++;
        resolve(response.length);
      }).catch(error => {
        this.page = -1;
        reject(error);
      });
    });
  }

  segmentChanged(event) {
    this.selectedTab = event.value;
    this.setTitle();

    this.scrollToTop();
  }

  setTitle() {
    this.title = 'Case Status: ' + this.status[this.selectedTab].label;
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
    this.initData().then((response) => {
      paginator.complete();
    }).catch((error) => {
      paginator.enable(false);
    })

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

  openCase(item) {
    //only for Dispatched
    if (item.Status === 'Job Dispatched') {
      let modal = this.modalCtrl.create(CaseStatusModalPage, item);
      modal.onDidDismiss(data => {
        item.IsNew = 0;
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
}
