import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrandingComponent } from './tranding/tranding.component';
import { SaleComponent } from './sale/sale.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';

const routes: Routes = [
  {path : "" , component : HomeComponent}
] 

@NgModule({
  declarations: [
    TrandingComponent,
    SaleComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
