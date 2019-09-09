import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.model';
import { AppComponent } from './app.component';
import {ProductsComponent} from './products.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import {ProductsService} from './products.service';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
