import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';

import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";

import { ChatPage } from "../chat/chat";

@IonicPage()
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage {
  @ViewChild(Content) content: Content;
  title: String = 'loading';
  titles = ['Today', 'Pending', 'All'];
  status = {
    'Resolved': { label: 'Resolved', color: 'secondary' },
    'Pending': { label: 'Pending', color: 'danger' },
  };
  selectedOffice: any = {};
  selectedTab = 'All';
  page: number = 0;
  items: any = [];
  itemsSearchCopy: any = [];
  searchText: string = '';
  showSearchBar: boolean = true;
  constructor(
    public navCtrl: NavController,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
  ) {

  }

  ionViewDidLoad() {
    this.offliceList.getOffice('Communication').then((selectedOffice) => {
      this.selectedOffice = selectedOffice;
      this.setTitle();

      this.initData();
    }).catch((error) => {
      this.events.publish('toast:error', error);
      this.navCtrl.popToRoot();
    })
  }

  initData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Communication/GetAllQueries', {
        BranchID: this.selectedOffice.CustomerBranchID,
        DoctorID: 0,
        DisablePaging: false,
        PageNumber: this.page,
        RowsPerPage: 100,
      }).then((response: any) => {
        for (let i = 0; i < response.length; i++) {
          this.items.push(response[i]);
          //making copy for search
          this.itemsSearchCopy.push(response[i]);
        }
        this.page++;
        //checking if already searched
        // this.getItems();
        resolve();
      }).catch(error => {
        this.page = -1;
        reject();
      });
    });
  }


  segmentChanged(event) {
    this.selectedTab = event.value;
    this.setTitle();

    this.scrollToTop();
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

  setTitle() {
    this.title = 'Queries: ' + this.selectedTab;
  }

  getStatusColor(status) {
    return this.status[status].color;
  }

  getStatusLabel(status) {
    return this.status[status].label;
  }

  doInfinite(paginator) {
    this.initData().then(() => {
      paginator.complete();
      this.content.resize();
    }).catch((error) => {
      paginator.enable(false);
      this.content.resize();
    })

  }

  onCancel(event) {
    this.items = this.itemsSearchCopy;
  }

  isHidden(item) {
    // ALL
    if (this.selectedTab === 'All') {
      return false;
    } else if (this.selectedTab === 'Today' && item.IsTodayQuery) { //For Today
      return false;
    }
    return item.QueryStatus !== this.selectedTab
  }

  openChat(item) {
    this.navCtrl.push(ChatPage, item.TicketNo);
  }

  getItems() {
    const fields = ['Doctor', 'ImpressionNo', 'ReferenceEntryNo', 'Patient'];
    // Reset items back to all of the items
    this.items = this.itemsSearchCopy;

    // if the value is an empty string don't filter the items
    if (this.searchText && this.searchText.trim() != '') {
      //lowercase 
      this.searchText = this.searchText.toLowerCase();
      this.items = this.items.filter((item) => {
        for (let i = 0; i < fields.length; i++) {
          if (item[fields[i]].toLowerCase().indexOf(this.searchText) > -1) {
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
