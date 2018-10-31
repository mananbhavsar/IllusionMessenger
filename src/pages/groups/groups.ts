import { Component } from '@angular/core';
import { IonicPage,reorderArray, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { GroupPage } from '../group/group';
import { AddFlashPage } from '../group/add-flash/add-flash';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { FirebaseTransactionProvider } from '../../providers/firebase-transaction/firebase-transaction';
import { CommonProvider } from '../../providers/common/common';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';
import { FlashNewsProvider } from '../../providers/flash-news/flash-news';
import { ReadMessageProvider } from '../../providers/read-message/read-message';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  title: string = 'Groups';
  groups: any = [];
  page: number = 0;
  situationID = 2;
  badges: any = {};
  query: string = null;
  readOptions : boolean = false;
  searchInputBtn: boolean = false;
  reorder : boolean = false;
  sort_by : string = '';
  sort_order : string = '';
  readAllSelected: boolean;
  hideRefresher : boolean = false;
  selectedGroup: any = [];
  data : any;
  flashNews : any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalController: ModalController,
    public events: Events,
    public user : UserProvider,
    public notifications: NotificationsProvider,
    public _firebaseTransaction: FirebaseTransactionProvider,
    public common : CommonProvider,
    public flashNewsProvider : FlashNewsProvider,
    public read : ReadMessageProvider
  ) {
    this.setTitle();
    this.getData();
  }

  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
      this.connection.doPost('Chat/GetTaskDetail', {
        PageNumber: this.page,
        SituationID: this.situationID,
        RowsPerPage: 100,
        Query: this.query,
        OrderBy: '',
        Order: '',
      }, false).then((response: any) => {
        this.data = response;
        if (response.Groups_Wise.length > 0) {
          response.Groups_Wise.forEach(list => {
            this.groups.push(list);
          });
          if (response.FlashNews) {
            this.flashNews = response.FlashNews;
            this.flashNews.forEach((news, key) => {
                this.flashNewsProvider.openUnreadFlashNews(news);
            });
        }
          this.connectToFireBase();
          this.page++;
          resolve(true);
        } else {
          this.page = -1;
          resolve(false);
        }
      }).catch((error) => {
        this.page = -1;
        resolve(false);
      });
    }
    });
  }


  readSelected() {
    this.read.read(this.selectedGroup, null).then((response) => {
        if (response) {
            this.selectedGroup = [];
            this.groups = [];
            this.readAllSelected = true;
            this.readOptions = false;
        this.getData();
        }
    });
}


readAll() {
    this.read.read(null, null, true).then((response: any) => {
        this.selectedGroup = [];
        this.groups = [];
        this.readAllSelected = true;
        this.readOptions = false;
        this.getData();
    }).catch((error) => {
    });
}

  getUnreadCount() {
    let field = 'Groups_Wise' + '_Count';
    if (this.data) {
        if (field in this.data) {
            if (this.data[field] > 0) {
                return true;
            }
            return false;
        }
    }
    return false;
}

  connectToFireBase() {
    //user setting
    this.user.getUser().then(user => {
        if (this.groups) {
            let groupsTemp: any = this.groups;
            groupsTemp.forEach((group, index) => {
                let ref = firebase.database().ref('Badge/' + user.id + '/Groups/' + group.GroupCode + '/Total');
                ref.off('value');
                ref.on('value', (snapshot) => {
                    let total = snapshot.val();
                    if (total) {
                        this.badges[group.GroupCode] = total;
                    } else {
                        this.badges[group.GroupCode] = 0;
                    }
                });
            });

        }
    });
}


  addFlash() {
    let flashModal = this.modalController.create(AddFlashPage, {
      group_id: 0,
      group_name: null,
    });
    flashModal.onDidDismiss(data => {
      this.setTitle();

      if (data) {
        this.events.publish('toast:create', data.Data.Message);
        this.notifications.sends(data.OneSignalTransaction);
        this._firebaseTransaction.doTransaction(data.FireBaseTransaction).catch(error => {

        });
        //refresh
        setTimeout(() => {
          this.getData();
        });
      }
    });
    flashModal.present();
  }

  refresh(refresher) {
    this.page = 0;
    this.groups = [];
    this.getData().then(status => {
      this.selectedGroup = [];
      this.readAllSelected = true;
      this.readOptions = false;
      refresher.complete();
      this.connectToFireBase();
    }).catch(error => {
      refresher.complete();
    });
  }

  openGroup(GroupID, Group) {
    this.navCtrl.push(GroupPage, { GroupID, Group });
  }

  

  getBadge(groupCode) {
    if (groupCode in this.badges) {
      return this.badges[groupCode];
    }
    return false;
  }

  headerButtonClicked(event) {
    switch (event.name) {
      case 'sort':
        this.openSortOptions();
        break;
      case 'search':
        this.searchData();
        break;
      case 'flash':
        this.addFlash();
        break;
    }
  }


  openSortOptions() {
    this.common.openSortOption().then((response : any) => {
      if(response){
        this.sort_by = response.sort_by;
        this.sort_order = response.sort_order;
        this.doSorting();
    }
    });
}

doSorting() {
    this.page = 0;
    this.groups = [];
    this.getData();
}

  searchData() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
    this.groups = [];
    this.query = null;
    this.initializeItems();
  }

  initializeItems() {
    this.page = 0;
    this.getData().catch(error => {
    });
  }

  onCancel(event) {
    this.query = null;
    this.initializeItems();
  }

  onClear(event) {
    this.query = null;
    this.initializeItems();
  }

  openReadOptions() {
    if (this.readOptions) {
        this.readOptions = false;
        this.selectedGroup = [];
        this.readAllSelected = true;
    } else {
        this.readOptions = true;
    }
}

  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.groups = [];
      this.getData().catch(error => {
      });
    } else {
      this.groups = [];
      this.query = null;
      this.initializeItems();
    }
  }

  readMessage(ev, group) {
    group.IsRead = ev.checked;
    if (ev.checked) {
        if (this.selectedGroup.indexOf(this.selectedGroup.GroupCode) === -1) {
            this.selectedGroup.push({
                checked: group.IsRead,
                GroupCode: group.GroupCode,
            });
            this.readAllSelected = false;
        }
    } else {
        this.selectedGroup.splice(this.selectedGroup.indexOf(this.selectedGroup.GroupCode), 1);
    }

    if (this.selectedGroup.length === 0) {
        this.readAllSelected = true;
    }
}

reorderItems(indexes) {
    this.groups = reorderArray(this.groups, indexes);
    let group_reorder = [];
    let groupIds = [];

    this.groups.forEach((group, index) => {
        if (groupIds.indexOf(group.GroupID) === -1) {
            group_reorder.push({ 'OrderIndex': index, 'GroupID': group.GroupID });
            groupIds.push(group.GroupID);
        }

    });

    this.connection.doPost('chat/MyGroupOrder', {
        OrderIndex: group_reorder.map(order => order.OrderIndex),
        GroupID: group_reorder.map(groupId => groupId.GroupID)
    }, false).then((response: any) => {
        if (response) {

        }
    }).catch((error) => {
    });

}

reorderGroups() {
    if (this.reorder) {
        this.reorder = false;
    } else {
        this.reorder = true;
        this.hideRefresher = false;
    }
}


  setTitle() {
    this.title = null;
    setTimeout(() => {
      this.title = 'Groups';
    });
  }

  getTitle() {
    return this.title;
  }

}
