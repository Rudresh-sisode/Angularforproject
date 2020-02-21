import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import {FormsModule} from '@angular/forms';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { StartComponent } from './shared/star.component';
import { ProductServicev } from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-detail.component';


@NgModule({
    //all the module will be declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path:'product',component:ProductComponent},
          {path:'product/:id',component:ProductComponent},
          {path:'orders',component:OrderComponent},
          {path:'home',component:HomeComponent}
        ])


    ],
    //all the componenet and pipe go in declaration
    declarations:[
        AppComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StartComponent,
        OrderComponent,
        HomeComponent,
        ProductDetailsComponent



    ],
    //only first component
    bootstrap:[
        AppComponent
        //this is main component
    ],
    //all servicess
    providers:[
        ProductServicev


    ]

})
export class AppModule{

}
