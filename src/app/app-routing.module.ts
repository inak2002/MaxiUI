import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductfunctionsComponent } from './productfunctions/productfunctions.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'post',component:ProductfunctionsComponent},
  {path:'put',component:ProductupdateComponent},
  {path:'filter',component:FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
