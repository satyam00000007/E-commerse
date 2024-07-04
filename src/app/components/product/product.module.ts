import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "list" , component : ListComponent},
  {path : "detail" , component : DetailComponent}
]

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
