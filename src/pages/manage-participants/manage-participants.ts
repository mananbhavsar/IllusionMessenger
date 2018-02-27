import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ManageParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-participants',
  templateUrl: 'manage-participants.html',
})
export class ManageParticipantsPage {
	participants:Array<any>=[];
	users:Array<any>=[];
	selectedUser:Array<any>=[];
	selectedParticipantsID:any={};
	selectedParticipants:boolean;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl:ViewController) {
  	this.participants=this.navParams.data.participants;
  	this.users=this.participants;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageParticipantsPage');
  }

  getData(event){
	  this.initializeItems();
      let val = event.target.value;      
      if (val && val.trim() !== '') {
      console.log(val);
      let tempUser=[];
        this.participants.forEach((user) =>{
        	if(user.User[0].User.toLowerCase().indexOf(val.toLowerCase()) > -1){
        		tempUser.push(user);
        	}
        });
        this.participants=tempUser;
      }
  }

  setParticipants(user_id,index){
	if(this.selectedUser.indexOf(user_id) === -1){
		this.selectedUser.push(user_id);
	}else{
		this.selectedUser.splice(this.selectedUser.indexOf(user_id),1);
	}
  }

   initializeItems() {
    this.participants = this.users;
  }

  onCancel(){
  	 this.initializeItems();
  }

  onClear(){
   this.initializeItems();
  }

  dismiss(data){
  	this.selectedParticipantsID=this.selectedUser;
  	console.log(this.selectedParticipantsID);
  	this.viewCtrl.dismiss(this.selectedParticipantsID);
  }
}
