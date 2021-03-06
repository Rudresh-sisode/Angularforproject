import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
    //all the module will be declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,

        ProductModule,
        AppRoutingModule


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
