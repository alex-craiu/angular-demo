import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { NavTitleModule } from 'angular-nav-title';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavTitleModule,
    AppRoutingModule,
    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
