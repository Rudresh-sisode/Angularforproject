import {Component} from '@angular/core';
//decorator
@Component({
   selector:'app-root',
   template:`
   <div>
   <app-header></app-header>
   <app-prod></app-prod>
   <app-order></app-order>


   </div>`

})
export class AppComponent{

}
