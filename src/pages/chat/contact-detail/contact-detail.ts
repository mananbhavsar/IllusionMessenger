import { Component } from '@angular/core';
import { IonicPage,Platform, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  title: string = 'View Contact';
  contactData: any;
  contactNumbers: any = [];
  isBrowser : boolean = false;
  constructor(public navCtrl: NavController,
    public contacts: Contacts,
    public navParams: NavParams,
    public platform : Platform,
    public viewCtrl : ViewController) {
    this.contactData = this.navParams.data.Contact;
    this.contactNumbers = this.navParams.data.Contact.phoneNumbers;
    this.isBrowser = this.platform.is('core');
  }

  ionViewWillEnter() {

  }

  saveContact() {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null,this.contactData.formatted, this.contactData.givenName);
    this.contactNumbers.forEach((number) => {
      contact.phoneNumbers = [new ContactField(number.type, number.value)];      
    });
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }

  dismiss(event){
  this.viewCtrl.dismiss();
  }

}
