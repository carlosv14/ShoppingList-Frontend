import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';
import { ShoppingListService } from '../services/shopping-list.service';
import { ShoppingListItem } from '../models/shopping-list-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.css']
})
export class ShoppingListDetailComponent implements OnInit {

  shoppingList: ShoppingList;
  shoppingListItem : ShoppingListItem;
  constructor(private shoppingListService : ShoppingListService, private route: ActivatedRoute) {
    this.shoppingListService = shoppingListService;
    this.shoppingListItem = new ShoppingListItem();
    this.route = route;
   }

  ngOnInit() {
    const id : number = Number(+this.route.snapshot.paramMap.get('id')); 
    this.shoppingListService.getListItems(id)
    .subscribe((data : ShoppingList) => {
      this.shoppingList = data;
    });
  }

  saveData(){
    this.shoppingList.shoppingListItems.push(this.shoppingListItem);
    this.shoppingListService.putListItem(this.shoppingList)
      .subscribe((result) => {
        alert(result);
      });
  }
}

