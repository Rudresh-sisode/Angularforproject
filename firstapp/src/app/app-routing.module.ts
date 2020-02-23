import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailsComponent } from './products/product-detail.component';

const routes:Routes=[
  {path:'orders',component:OrderComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductDetailsComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  providers:[],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
