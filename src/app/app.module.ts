import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';

@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    FrontOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
