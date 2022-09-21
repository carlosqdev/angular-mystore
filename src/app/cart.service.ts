import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  items: Product[] = [];

  // This method appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  // This method collects the items users add to the cart
  // and returns each item with its associted quantity
  getItems() {
    return this.items;
  }

  //  This method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }

}
