import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  shoppingLists: Array<ShoppingList>;
  selectedShoppingList: ShoppingList;

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService = shoppingListService;
   }

  ngOnInit() {
    this.shoppingListService.getLists()
      .subscribe((data : Array<ShoppingList>) => {
        this.shoppingLists = data;
      },
      err => {
        console.log(err);
      });
  }

  onClick(shoppingList : ShoppingList){
    this.selectedShoppingList = shoppingList;
    this.shoppingListService.getListItems(this.selectedShoppingList.id)
    .subscribe((data : ShoppingList) => {
      this.selectedShoppingList = data;
    });
  }

}
