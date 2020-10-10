import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'add-users', component: AddUsersComponent},
  { path: 'edit-users/:id', component: EditUsersComponent},
  { path: 'get--users', component: GetUsersComponent},
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'get--product', component: GetProductComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
