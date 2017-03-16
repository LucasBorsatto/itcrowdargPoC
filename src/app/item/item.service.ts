import { Injectable } from '@angular/core';
import { Item } from './item';
import * as localforage from "localforage";

@Injectable()
export class ItemService {
  lastId: number = 0;
  items: Item[] = [];

  constructor() {
    localforage.config({
      name: 'itCrowdArgApp'
    });
    localforage.getItem("items").then((result) => {
      this.items = result ? <any>result : [];
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  addItem(item: Item): ItemService {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.items.push(item);
    localforage.setItem('items', this.items).then(function () {
      return localforage.getItem('items');
    }).then(function (value) {
      console.log("Added item.")
    }).catch(function (err) {
      console.log(err)
    });
    return this;
  }

  deleteItemById(id: number): ItemService {
    this.items = this.items
      .filter(item => item.id !== id);
    return this;
  }

  deleteAllItems() {
    this.items = [];
    localforage.clear().then(function() {
      console.log('Database is now empty.');
    }).catch(function(err) {
      console.log(err);
    });
    return this;
  }

  getItemById(id: number): Item {
    return this.items
      .filter(item => item.id === id)
      .pop();
  }

  getItemByDescription(description: string): Item {
    return this.items
      .filter(item => item.description === description)
      .pop();
  }

}
