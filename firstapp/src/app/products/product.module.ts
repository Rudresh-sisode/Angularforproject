import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './productFilter.pipe';
import { ProductDetailsComponent } from './product-detail.component';
import { ProductServicev } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  imports:[
    SharedModule,
    AppRoutingModule

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
