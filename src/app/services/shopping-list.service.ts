import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingListItem } from '../models/shopping-list-item';
import { ShoppingList } from '../models/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  baseUrl: string = "http://localhost:52642/api";
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getLists(){
     return this.httpClient.get(`${this.baseUrl}/ShoppingList`);
   }

   getListItems(id : number){
    return this.httpClient.get(`${this.baseUrl}/ShoppingList/${id}`);
   }

   putListItem(shoppingList : ShoppingList ){
      return this.httpClient.put(`${this.baseUrl}/ShoppingList/${shoppingList.id}`, shoppingList.shoppingListItems[shoppingList.shoppingListItems.length - 1]);
   }
}
