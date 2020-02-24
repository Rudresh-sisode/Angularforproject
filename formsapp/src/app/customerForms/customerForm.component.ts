import {Component} from '@angular/core';
import {ICustomer} from '../modals/customer.model';

@Component({
selector:'app-form',
templateUrl:'./customerFrom.component.html'
})

export class CustomerFormComponent{
  maxdays:any[]=['1-day','2-day','3-day'];
  mycust=new ICustomer('John','','','',true,'','');
  firstToUpper(value):void{
    if(value.length> 0){
      this.mycust.firstname=value.charAt(0).toUpperCase()+value.slice(1);

    }
    else{
      this.mycust.firstname=value;
    }
  }
}
