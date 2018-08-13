import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  ratingForm: FormGroup;
  ratingData : any = {};
  title : string = 'Rating';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public formBuilder : FormBuilder,
    public connection : ConnectionProvider,
    public viewCtrl : ViewController) {
    this.ratingForm = this.formBuilder.group({
      Comment: ['', [Validators.required]],
    });
  }

  starClicked(value) {
    this.ratingData.Rate = value;
  }

  submitForm(){
    this.ratingData.Comment = this.ratingForm.get('Comment').value;
    this.viewCtrl.dismiss(this.ratingData);
  }

  dismiss(event){
    this.viewCtrl.dismiss();
  }


}
