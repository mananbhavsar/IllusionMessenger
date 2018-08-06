import { Injectable } from '@angular/core';
import { ConnectionProvider } from '../connection/connection';

@Injectable()
export class FlashNewsProvider {
  flashNews : any = [];
  constructor(
    private connection : ConnectionProvider
  ) {

  }

  openUnreadFlashNews(FlashId){
   this.connection.doPost('',{
    FlashId : FlashId
   }).then((response : any) => {
  console.log(response);
    if(response){
      
    }
   });
  }

}
