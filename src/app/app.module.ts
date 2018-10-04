import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ServiceComponent } from './service/service.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [ 
  { path: 'Service', component: ServiceComponent }, 
  { path: 'Inventory', component: InventoryComponent }, 
  { path: 'Product', component:ProductComponent },
  { path: 'Login', component:LoginComponent },
  { path: 'Register', component:RegisterComponent },
  { path: 'Home', component:HomeComponent }
];  
@NgModule({
 
  declarations: [
    AppComponent,
    InventoryComponent,
    ServiceComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
