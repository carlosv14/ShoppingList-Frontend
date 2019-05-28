import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';

const routes: Routes = [
  {path: "ShoppingLists", component: ShoppingListsComponent},
  {path: "ShoppingLists/:id" , component: ShoppingListDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
