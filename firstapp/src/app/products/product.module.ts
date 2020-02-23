import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearchPipe } from './productFilter.pipe';
import { ProductDetailsComponent } from './product-detail.component';
import { ProductServicev } from './product.service';
import { StartComponent } from '../shared/star.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:[
    SharedModule,
    RouterModule.forChild([

    ])

  ],
  declarations:[
  ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        ProductDetailsComponent,

  ],
  providers:[
    ProductServicev
  ]

})

export class ProductModule{

}
