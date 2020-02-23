import {NgModule} from '@angular/core'

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { StartComponent } from './star.component';

NgModule({
  imports:[

    FormsModule,
    CommonModule
  ],
  declarations:[
    StartComponent
  ]
  ,
  exports:[
    FormsModule,
    CommonModule,
    StartComponent
  ]
})
export class SharedModule{

}
