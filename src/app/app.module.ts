import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { SidebarComponent } from './back-office/sidebar/sidebar.component';
import { NavbarComponent } from './back-office/navbar/navbar.component';
import { FooterComponent } from './back-office/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    FrontOfficeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
