import { ProductModel } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
    {
      name: 'Delaware Quility',
      price: 38.87,
      description: 'Aliquip labore qui excepteur amet ut aliquip.'
    },
    {
      name: 'Wyoming Digitalus',
      price: 31.17,
      description: 'Exercitation laborum anim elit nisi labore proident do ea adipisicing exercitation velit commodo ipsum.'
    },
    {
      name: 'Michigan Nikuda',
      price: 36.07,
      description: 'Officia occaecat sit anim ipsum dolore do id elit reprehenderit est magna eiusmod.'
    },
    {
      name: 'Rhode Island Xiix',
      price: 49.33,
      description: 'Esse eu eu sit proident nisi dolor cupidatat culpa quis amet culpa laborum ut.'
    }
  ]

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
