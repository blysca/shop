import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: ProductModel[] = [
    {
      name: 'Pennsylvania Golistic',
      price: 20.51,
      description: 'Nostrud fugiat sunt proident nulla nulla.'
    },
    {
      name: 'Alabama Skyplex',
      price: 38.81,
      description: 'In mollit aliquip cupidatat eiusmod reprehenderit esse.'
    },
  ]

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
