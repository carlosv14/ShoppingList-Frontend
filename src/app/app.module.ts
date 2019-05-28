import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { HttpClientModule }    from '@angular/common/http';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module'
 
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListsComponent,
    ShoppingListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
