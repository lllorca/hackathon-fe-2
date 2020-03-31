import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    MainComponent,
    UserComponent,
    PurchaseComponent,
    ProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
