import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customerForms/customerForm.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
