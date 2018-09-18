import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { GroupPage } from '../group/group';
import { CommonProvider } from '../../providers/common/common';
import { AddFlashPage } from '../group/add-flash/add-flash';
import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { NotificationsProvider } from '../../providers/notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html',
})
export class GroupListPage {
  situationID : number = 2;
  page : number = 0;
  query : string = null;
  groups : any;
  title : string = 'Groups';
  badges: any = {};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public connection : ConnectionProvider,
    public common : CommonProvider,
    public _firebaseTransaction  :FirebaseTransactionProvider,
    public events : Events,
    public modalController : ModalController,
    public notifications : NotificationsProvider
    ) {
      this.setTitle();
      this.getData();
  }
  
  getData() {
    return new Promise((resolve, reject) => {
        this.connection.doPost('Chat/GetTaskDetail', {
            PageNumber: this.page,
            SituationID: this.situationID,
            RowsPerPage: 100,
            Query: this.query,
            OrderBy: '',
            Order: '',
        }, false).then((response: any) => {
           this.groups = response.Groups_Wise;
           console.log(this.groups);
           
        });
      });
}

openSortOptions() {
  this.common.openSortOption().then((response) => {
      if(response){
          this.doSorting();
      }
  });
 }

 doSorting() {
     this.page = 0;
     this.groups = [];
     this.getData();
 }


 addFlash() {
  let flashModal = this.modalController.create(AddFlashPage, {
      group_id: 0,
      group_name: null,
  });
  flashModal.onDidDismiss(data => {
      this.setTitle();

      if (data) {
          this.events.publish('toast:create', data.Data.Message);
          this.notifications.sends(data.OneSignalTransaction);
          this._firebaseTransaction.doTransaction(data.FireBaseTransaction).catch(error => {

          });
          //refresh
          setTimeout(() => {
              this.getData();
          });
      }
  });
  flashModal.present();
}

headerButtonClicked(event) {
  switch (event.name) {
      case 'sort':
          this.openSortOptions();
          break;
      case 'search':
          // this.searchData();
          break;
      case 'flash':
          this.addFlash();
          break;
  }
}




openGroup(GroupID, Group) {
  this.navCtrl.push(GroupPage, { GroupID, Group });
}

getBadge(groupCode) {
  if (groupCode in this.badges) {
      return this.badges[groupCode];
  }
  return false;
}

setTitle() {
  this.title = null;
  setTimeout(() => {
    this.title = 'Groups';
  });
}

getTitle() {
  return this.title;
}
}
