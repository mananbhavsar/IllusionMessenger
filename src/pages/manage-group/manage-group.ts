import { Component } from '@angular/core';
import { IonicPage, Events, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CreateGroupPage } from './create-group/create-group';


@IonicPage()
@Component({
  selector: 'page-manage-group',
  templateUrl: 'manage-group.html',
})
export class ManageGroupPage {
  page: number = 1;
  title: string = 'Manage Group';
  sort_by: string = '';
  sort_order: string = '';
  data: any;
  badges: any;
  groups: any = [];
  constructor(public navCtrl: NavController,
    public connection: ConnectionProvider,
    public navParams: NavParams,
    public modal: ModalController,
    public events: Events) {
    this.getData();
  }


  getData() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/GetTaskDetail', {
        PageNumber: this.page,
        RowsPerPage: 100,
        Query: '',
        OrderBy: this.sort_by,
        Order: this.sort_order,
      }, false).then((response: any) => {
        //groups
        this.data = response.Groups_Wise;
        console.log(this.data);

        resolve(true);
      }).catch(error => {

      })
    });
  }

  removeGroup(group, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveGroup', {
        UserID: group.GroupID,
        Group: group.Group,
        GroupCode: group.GroupCode
      }).then((response: any) => {
        if (response) {
          this.events.publish('toast:create', response.Data.Message);
          this.groups.splice(index, 1);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  updateGroup(group) {
    let groupModal = this.modal.create(CreateGroupPage, group);

    groupModal.onDidDismiss((data) => {
      if (data) {
        this.getData();
      }
    });
    groupModal.present();

  }


  refresh(refresher){
    this.getData().then((response) => {
      refresher.complete();
    }).catch((error) => {
      refresher.complete();
    })
  }

  addGroup() {
    let groupModal = this.modal.create(CreateGroupPage);

    groupModal.onDidDismiss((data) => {
      if (data) {
        this.getData();
      }
    });
    groupModal.present();

  }

}
