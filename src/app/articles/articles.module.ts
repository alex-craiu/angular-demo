import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule, routedComponents } from './articles-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [routedComponents]
})
export class ArticlesModule { }
