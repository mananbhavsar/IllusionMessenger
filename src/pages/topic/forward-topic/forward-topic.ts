import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-forward-topic',
  templateUrl: 'forward-topic.html',
})
export class ForwardTopicPage {
  title : string = 'Forward To ..';
  groups : any = [];
  SelectedGroup: any = [];
  query : string;
  page : number = 0;
  searchInputBtn : boolean = false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public connection : ConnectionProvider) {
  this.groups.push(
    {
      Group : 'gdvg',
      GroupID : 1
    },
    {
      group : 'gdvg',
      GroupID : 2
    },
    {
      group : 'gdvg',
      GroupID : 3
    },
  )
  }

  getGroupList(){
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/', {
         
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        },false).then((response: any) => {
          if (response.TopicList.length > 0) {
            response.TopicList.forEach(list => {
              this.groups.push(list);
            });
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {
          this.page = -1;
          reject();
        });
      }
    });
  }

  selectGroup(group) {
    if (!this.in_array(this.SelectedGroup, group.GroupID)) {
      this.SelectedGroup.push(group);
    } else {
      if (this.in_array(this.SelectedGroup, group.GroupID)) {
        this.SelectedGroup.splice(this.SelectedGroup.indexOf(group), 1);
      }
    }    
  }

  in_array(array, GroupID) {
    if (array && GroupID) {
      return array.some((item) => {
        return item.GroupID === GroupID;
      });
    }
  }

  initializeItems() {
    this.page = 0;
    this.getGroupList().catch(error => {
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


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.groups = [];
      // this.getTopics().catch(error => {
      // });

    } else {
      this.groups = [];      
      this.query = null;
      this.initializeItems();
    }
  }

  searchGroup(){
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.groups = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

}
