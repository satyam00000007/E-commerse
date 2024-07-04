import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        data: { breadcrumb: 'Home' }
      },
      {
        path: 'home',
        canActivate:[AuthGuard] ,
        loadChildren : () => import ('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path : "product" ,
        canActivate:[AuthGuard],
         loadChildren:() => import('./components/product/product.module').then(m => m.ProductModule),
      },
      {
        path : "cart" ,
        canActivate:[AuthGuard],
        component : CartComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
