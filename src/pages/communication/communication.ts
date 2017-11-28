import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, Platform } from 'ionic-angular';

import { OfficeServiceProvider } from "../../providers/office-service/office-service";
import { ConnectionProvider } from "../../providers/connection/connection";

import { ChatPage } from "../chat/chat";
import * as _ from 'underscore';
import * as firebase from 'firebase';
import { Item } from 'ionic-angular/components/item/item';

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
  itemsTicketNo: any = [];
  itemsSearchCopy: any = [];
  searchText: string = '';
  showSearchBar: boolean = true;
  wasModalShown: boolean | -1 = false;
  openingChat: boolean = false;

  newChatEventRefs: Object = {};
  newQueryEventRefs: Object = {};

  constructor(
    public navCtrl: NavController,
    public offliceList: OfficeServiceProvider,
    public events: Events,
    public connection: ConnectionProvider,
    public platform: Platform,
  ) {

  }

  ionViewDidEnter() {
    if (_.isEmpty(this.selectedOffice)) {
      this.offliceList.getOffice('Communication').then((selectedOffice) => {
        this.selectedOffice = selectedOffice;
        console.log(this.selectedOffice);
        
        this.setTitle();

        this.wasModalShown = this.offliceList.isMultiOffice();

        this.initData().then(response => { }).catch(error => {
         
        });
      }).catch((error) => {
        console.log(error);
        this.events.publish('toast:error', error);
        this.navCtrl.popToRoot();
      });
    } else {
      this.listenToFirebaseQueryEvent();
      this.items.forEach(item => {
        this.listenToFirebaseChatEvent(item);
      });
    }
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
          this.itemsTicketNo.push(response[i].TicketNo);

          //making copy for search
          this.itemsSearchCopy.push(response[i]);
          //listening to count event
          this.listenToFirebaseChatEvent(response[i]);
        }
        this.page++;
        //checking if already searched
        // this.getItems();
        resolve();
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

  openChat(item, index) {
    if (this.items && typeof this.items[index] !== 'undefined') {
      this.items[index].UnreadCount = 0;
    }
    item.UnreadCount = 0;
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

  listenToFirebaseChatEvent(item) {
    let ticketNo = item.TicketNo;
    let path = 'NewChatEvent/' + ticketNo + '/' + this.connection.user.id;

    if (!(path in this.newChatEventRefs)) {
      let itemRef = firebase.database().ref(path)
      this.newChatEventRefs[path] = itemRef;

      //removing existing as we just got it from server
      itemRef.remove();
      //now listening to new
      itemRef.on('child_added', (snapshot) => {
        let count = snapshot.val();
        item.UnreadCount += count;
        itemRef.remove();
      });
    }
  }

  listenToFirebaseQueryEvent() {
    let path = 'NewQueryEvent/' + this.selectedOffice.CustomerBranchID + '/' + this.connection.user.id;
    //checking if not already listening
    if (!(path in this.newQueryEventRefs)) {
      let queryRef = firebase.database().ref(path)
      this.newQueryEventRefs[path] = queryRef;

      queryRef.on('child_added', (snapshot) => {
        let item = snapshot.val();
        if (typeof item.QueryStatus === 'undefined') {
          item.QueryStatus = 'Pending';
        }
        //checking if already exist
        if (this.itemsTicketNo.indexOf(item.TicketNo) === -1) {
          this.items.unshift(item);
          this.itemsTicketNo.push(item.TicketNo);
        }
        queryRef.remove();
      });
    }
  }

  ionViewWillLeave() {
    for (let key in this.newChatEventRefs) {
      this.newChatEventRefs[key].off('child_added');
      delete this.newChatEventRefs[key];
    }
    for (let key in this.newQueryEventRefs) {
      this.newQueryEventRefs[key].off('child_added');
      delete this.newQueryEventRefs[key];
    }
  }
}
