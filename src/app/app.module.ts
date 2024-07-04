import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ContactComponent } from './components/contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    MainLayoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
