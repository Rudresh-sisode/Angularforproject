import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';

import { StartComponent } from './shared/star.component';

import {HttpClientModule} from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './shared/NotFound.component';
import { ProductModule } from './products/product.module';


@NgModule({
    //all the module will be declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([

          {path:'orders',component:OrderComponent},
          {path:'home',component:HomeComponent},
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'**',component:NotFoundComponent}
        ]),
        ProductModule


    ],
    //all the componenet and pipe go in declaration
    declarations:[
        AppComponent,
        HeaderComponent,


        OrderComponent,
        HomeComponent,

        NotFoundComponent



    ],
    //only first component
    bootstrap:[
        AppComponent
        //this is main component
    ],
    //all servicess
    providers:[



    ]

})
export class AppModule{

}
