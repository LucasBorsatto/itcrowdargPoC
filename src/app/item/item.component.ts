import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ ItemService ]
})
export class ItemComponent {

  textareaLength: number = 25;
  newItem: Item = new Item();
  repeatedItem: string;
  items: Item[];
  isItemAlready: boolean = false;

  constructor(private itemService: ItemService) {
  }

  addItem() {
    if(this.newItem.description) {
      let findItem = this.itemService.getItemById(this.newItem.id);

      if(findItem) {
        findItem = this.newItem;
      } else {
        const isItemAlready = this.itemService.getItemByDescription(this.newItem.description);

        if(isItemAlready) {
          this.repeatedItem = this.newItem.description;
          this.isItemAlready = true;
        } else {
          this.itemService.addItem(this.newItem);
        }
      }
    }

    this.reloadList();
    this.newItem = new Item();
  }

  removeItem(item) {
    this.itemService.deleteItemById(item.id);
    this.reloadList();
  }

  editItem(item) {
    this.newItem = item;
  }

  deleteAllItems() {
    this.itemService.deleteAllItems();
    this.reloadList();
  }

  reloadList() {
    this.items = this.itemService.items;
  }

}
