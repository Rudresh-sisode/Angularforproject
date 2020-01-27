import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';

@NgModule({
    //all the module will be declare here
    imports:[
        BrowserModule
    ],
    //all the componenet and pipe go in declaration
    declarations:[
        AppComponent,
        HeaderComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe
    ],
    //only first component
    bootstrap:[
        AppComponent
        //this is main component
    ],
    //all servicess
    providers:[]

})
export class AppModule{

}