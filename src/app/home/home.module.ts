import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [routedComponents]
})
export class HomeModule { }
