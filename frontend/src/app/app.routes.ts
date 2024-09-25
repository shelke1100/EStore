import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProductComponent } from './pages/admin/product/product.component';
export const routes: Routes = [

 {path:'',component:LoginComponent},
  {path:'layout', component:LayoutComponent},
  {path:'product',component:ProductComponent}  
];

// {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full',
    //   },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   },
    //   {
    //     path: 'admin',
    //     component: LayoutComponent,
    //     children: [
    //       {
    //         path: 'product',
    //         component: ProductComponent,
    //       },
    //     ],
    //   },