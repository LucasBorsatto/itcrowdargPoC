import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {
  lastId: number = 0;
  items: Item[] = [];

  constructor() {

  }

  addItem(item: Item): ItemService {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.items.push(item);
    return this;
  }

  deleteItemById(id: number): ItemService {
    this.items = this.items
      .filter(item => item.id !== id);
    return this;
  }

  deleteAllItems() {
    this.items = [];
    return this;
  }

  getItemById(id: number): Item {
    return this.items
      .filter(item => item.id === id)
      .pop();
  }

}
