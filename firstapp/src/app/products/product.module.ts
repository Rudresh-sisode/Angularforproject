import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './productFilter.pipe';
import { ProductDetailsComponent } from './product-detail.component';
import { ProductServicev } from './product.service';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations:[
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    ProductSearchPipe,
    ProductDetailsComponent

  ],
  providers:[
    ProductServicev
  ]

})

export class ProductModule{

}
