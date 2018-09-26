import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ConnectionProvider } from '../../providers/connection/connection';
import { AddFlashPage } from '../group/add-flash/add-flash';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  title : string = 'Dashboard';
  days = {
    Today : {
      label : 'Today',
      value : 0
    },
    Day_1: {
      label: '1 Day',
      value: 1
    },
    Day_2: {
      label: '2 Day',
      value: 2
    }, Day_3: {
      label: '3 Day',
      value: 3
    }, Day_4Plus: {
      label: '4+ Day',
      value: 4
    },
    Past_Day : {
      label : 'Past Due Days',
      value : -1
    }
  };
  situationID : number = 1;
  data : any;
  constructor(
    public modal: ModalController,
    public event: Events,
    public network: Network,
   public connection: ConnectionProvider,
   public notifications : NotificationsProvider,
   public common : CommonProvider,
   public _firebaseTransaction : FirebaseTransactionProvider) {
   this.getData();
  }



  getData(){
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetTaskDetail', {
          PageNumber: 0,
          SituationID: this.situationID,
          RowsPerPage: 100,
          Query: '',
          OrderBy: '',
          Order: '',
      }, false).then((response: any) => {
        this.data = response.TaskDueInDays[0];
        // this.registerDevice();
      });
    });
  }

  openTopics(event, day) {
    if (this.network.type !== 'none') {
      let modal = this.modal.create('DueTopicsPage', { Day: this.days[day].value });
      modal.onDidDismiss((data) => {
        this.event.publish('dashboard:close');
      });
      modal.present();
    }
  }

  addFlash() {
    let flashModal = this.modal.create(AddFlashPage, {
      group_id: 0,
      group_name: null,
    });
    flashModal.onDidDismiss(data => {
      this.setTitle();

      if (data) {
        this.event.publish('toast:create', data.Data.Message);
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

  // registerDevice(){
  //   this.common.registerDevice(false).then((response : any) => {
  //   });
  // }


  setTitle() {
    this.title = null;
    setTimeout(() => {
     this.title = 'Dashboard';
    });
  }

  getTitle() {
    return this.title;
  }

}
