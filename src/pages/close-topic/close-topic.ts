import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import * as  moment from "moment";
import { locale } from 'moment';

/**
 * Generated class for the CloseTopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-close-topic',
  templateUrl: 'close-topic.html',
})
export class CloseTopicPage {
	group_id:number=null;
  closelist: Array<any> = [];
  page:number=0;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public connection: ConnectionProvider) {
  	this.group_id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloseTopicPage');
    this.getDetails();
  }

  getDetails(){
	 return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject(false);
      } else {
          this.connection.doPost('Chat/GetClosedTopicDetail', {
            GroupID: this.group_id,
            StatusID:1,
            DisablePaging:true,
            PageNumber: this.page,
            RowsPerPage:20
          }).then((response: any) => {
          let data=response.ClosedTopicList;
           if (data.length > 0) {
              data.forEach(list => {
                this.closelist.push(list);
            });
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch(error => {
          this.page = -1;
          reject(false);
        });
      }
    });
  }

	refresh(refresher) {
    this.page = 0;
    this.closelist = [];
    this.getDetails().then(status => {
      refresher.complete();
    }).catch(error => {
      refresher.complete();
    })
  }
  
	paginate(paginator) {
    this.getDetails().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      console.log(error);
      paginator.enable(false);
    });
  }

}
