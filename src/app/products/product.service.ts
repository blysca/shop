import { ProductModel } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: ProductModel[] = [
    {
      name: 'Pennsylvania Golistic',
      price: 20.51,
      description: 'Nostrud fugiat sunt proident nulla nulla.',
      isAvailable: true
    },
    {
      name: 'Alabama Skyplex',
      price: 38.81,
      description: 'In mollit aliquip cupidatat eiusmod reprehenderit esse.',
      isAvailable: true
    },
    {
      name: 'Delaware Quility',
      price: 38.87,
      description: 'Aliquip labore qui excepteur amet ut aliquip.',
      isAvailable: false
    },
    {
      name: 'Wyoming Digitalus',
      price: 31.17,
      description: 'Exercitation laborum anim elit nisi labore proident do ea adipisicing exercitation velit commodo ipsum.',
      isAvailable: true
    },
    {
      name: 'Michigan Nikuda',
      price: 36.07,
      description: 'Officia occaecat sit anim ipsum dolore do id elit reprehenderit est magna eiusmod.',
      isAvailable: true
    },
    {
      name: 'Rhode Island Xiix',
      price: 49.33,
      description: 'Esse eu eu sit proident nisi dolor cupidatat culpa quis amet culpa laborum ut.',
      isAvailable: false
    }
  ]

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
