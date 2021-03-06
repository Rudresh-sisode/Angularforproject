import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductDetailsComponent } from './products/product-detail.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { RouterGaurd } from './products/product-routerGaurd';

const routes:Routes=[
  {path:'product',component:ProductComponent},
          {path:'product/:id',canActivate:[RouterGaurd],component:ProductDetailsComponent},
  {path:'orders',component:OrderComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:  NotFoundComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  providers:[
    RouterGaurd
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
