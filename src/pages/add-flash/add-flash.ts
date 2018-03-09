import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionProvider } from '../../providers/connection/connection';
import * as  moment from "moment";
import { locale } from 'moment';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-flash',
  templateUrl: 'add-flash.html',
})
export class AddFlashPage {
	addFlashForm:FormGroup;
	group_id:number=0;
  group:Array<any>=[];

  constructor(
   public navCtrl: NavController,
   public formBuilder: FormBuilder,
   private connection: ConnectionProvider,
   public user: UserProvider,
   public navParams: NavParams){
   this.group_id=this.navParams.data;
   console.log(this.group_id);
   this.addFlashForm = this.formBuilder.group({
        flash_message: ['', [Validators.required,Validators.maxLength(160)]],
        start_date: [moment().format()],
        end_date:[moment().format()], 
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFlashPage');   
  }

  getCurrentTime(){
    return moment().format();
  }

  addFlash(){
    let startDate=this.addFlashForm.get('start_date').value;
      startDate=moment(startDate).format('DD/MM/YYYY, HH:mm:ss A');
    let endDate=this.addFlashForm.get('end_date').value;
      endDate=moment(endDate).format('DD/MM/YYYY, HH:mm:ss A');
  	
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateFlashNews', {
        GroupID: this.group_id,
        Flash:this.addFlashForm.get('flash_message').value,
        StartDate:startDate,
        EndDate:endDate,
      }).then((response: any) => {
        this.navCtrl.setRoot(HomePage);
        resolve(true);
      }).catch(error => {
        reject(error);
      });
    });
  }
}
