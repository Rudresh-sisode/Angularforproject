import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}from '@angular/forms';
import { StartComponent } from './star.component';
@NgModule({
  imports:[
    CommonModule,
    FormsModule
  ],
  declarations:[


    StartComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    StartComponent


  ]
})
export class SharedModule{

}
