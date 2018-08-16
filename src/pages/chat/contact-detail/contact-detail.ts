import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  title: string = 'View Contact';
  contactData: any;
  contactNumbers: any = [];
  isBrowser: boolean = false;
  contact: Contact = this.contacts.create();
  constructor(public navCtrl: NavController,
    public contacts: Contacts,
    public navParams: NavParams,
    public platform: Platform,
    public viewCtrl: ViewController) {
    this.contactData = this.navParams.data.Contact;
    this.contactNumbers = this.navParams.data.Contact.phoneNumbers;
    this.isBrowser = this.platform.is('core');
  }

  ionViewWillEnter() {

  }

  saveContact() {
    this.contact.name = new ContactName(this.contactData.formatted, this.contactData.familyName, this.contactData.givenName, this.contactData.displayName);
    this.contactNumbers.forEach((number) => {
      this.contact.phoneNumbers = [new ContactField(number.type,number.value)];
    });
    this.contact.save().then(
      (contact) => {
        this.viewCtrl.dismiss(contact);
      }).catch(
        (error: any) => console.error('Error saving contact.', error)
      );
  }

  dismiss(event) {
    this.viewCtrl.dismiss();
  }

}
