import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService} from './user.service';
import { AddUsersComponent } from './add-users/add-users.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { ProductService } from  './product.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    EditUsersComponent,
    GetUsersComponent,
    AddUsersComponent,
    AddProductComponent,
    EditProductComponent,
    GetProductComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
