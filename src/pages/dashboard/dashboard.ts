import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ConnectionProvider } from '../../providers/connection/connection';

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
   public connection: ConnectionProvider) {
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
        console.log(this.data);
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
