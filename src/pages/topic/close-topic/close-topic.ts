import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';
import * as  moment from "moment";
import { locale } from 'moment';
import { ModalController } from 'ionic-angular';

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
  topics: Array<any> = [];
  page:number=0;
  list:Array<any>=[];
  query:string=null;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public connection: ConnectionProvider,
  public modalCtrl: ModalController) {
  this.group_id = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloseTopicPage');
    this.getDetails();
    this.initializeItems();    
  }

  getData(event) {
      this.initializeItems();
      let val = event.target.value;
      console.log(val);
     
      if (val && val.trim() != '') {
        this.query=val;
        this.page=0;
        this.topics=[];
        this.getDetails().catch(error=>{
          
        });
      } else {
        this.query = null;     
      } 
  }

  getDetails(){
	 return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject(false);
      } else {
          this.connection.doPost('Chat/GetClosedTopicDetail', {
            query:this.query,
            GroupID: this.group_id,
            StatusID:1,
            DisablePaging:true,
            PageNumber: this.page,
            RowsPerPage:20
          }).then((response: any) => {
          let data=response.ClosedTopicList;
          console.log(data);
           if (data.length > 0) {
              data.forEach(list => {
                this.topics.push(list);                
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

  initializeItems(){
    this.page=0;
    this.topics=[];

  }

  onCancel(){
    this.initializeItems();
  }

  onClear(){
    this.initializeItems();
  }

	refresh(refresher) {
    this.page = 0;
    this.topics = [];
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
