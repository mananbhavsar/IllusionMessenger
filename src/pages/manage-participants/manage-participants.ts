import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { FormGroup ,FormBuilder ,FormControl } from '@angular/forms';
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
  manageForm:FormGroup;
  selectedUsers:Array<any>=[];

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
    public formBuilder:FormBuilder,
  	public viewCtrl:ViewController) {
  	this.participants=this.navParams.data.participants;
  	this.users=this.participants;
    this.selectedUsers=this.navParams.data.users;
    this.manageForm=this.formBuilder.group({

    });

    // this.setValue();
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

  setParticipants(user_id,users,index){
	   if(this.selectedUser.indexOf(user_id) === -1){
  		    this.selectedUser.push(user_id,users);
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

  setValue(){
    this.manageForm.patchValue({
      
    });
          
   }

  onCreate(){  	
    console.log(this.selectedUser);
  	this.viewCtrl.dismiss(this.selectedUser);
  }
}
