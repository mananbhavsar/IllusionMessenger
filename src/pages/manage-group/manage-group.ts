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
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetGroupDetail_Master')
          .then((response: any) => {
            //groups
            this.groups = response.GroupList.Group;
            this.page++;
            resolve(true);
          }).catch(error => {
            this.page = -1;
            reject();
          });
      }
    });
  }

  removeGroup(group, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveGroup', {
        GroupID: group.GroupID
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

  paginate(paginator) {
    this.getData().then(status => {
      console.log(status);

      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }


  refresh(refresher) {
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
