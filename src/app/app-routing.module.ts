import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { UsersComponent } from  './users/users.component'

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'edit-users', component: EditUsersComponent},
  { path: 'get--users', component: GetUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
