import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: ProductModel[] = [
    {
      name: 'Pennsylvania Golistic',
      price: 20.51,
      description: 'Nostrud fugiat sunt proident nulla nulla.',
      isAvailable: true,
      quantity: 2
    },
    {
      name: 'Alabama Skyplex',
      price: 38.81,
      description: 'In mollit aliquip cupidatat eiusmod reprehenderit esse.',
      isAvailable: true,
      quantity: 1
    },
  ]
  private productsSubject = new BehaviorSubject<ProductModel[]>(Object.assign([], this.products));
  products$ = this.productsSubject.asObservable();
  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  get totalCost(): number {
    const cost = this.products.reduce(
      (total, current) => total + (current.quantity ? current.quantity : 1) * current.price, 0
    );
    return cost;
  }

  get totalQuantity(): number {
    const qnt = this.products.reduce(
      (total, current) => total + (current.quantity ? current.quantity : 1), 0
    );
    return qnt;
  }

  addProduct(p: ProductModel): void {
    console.log({ p });
    const existId = this.products.findIndex(it => it.name === p.name)
    if (existId >= 0) {
      this.products[existId].quantity = (this.products[existId].quantity || 1) + 1;
    } else {
      p.quantity = 1
      this.products.push(p);
    }
    return this.productsSubject.next(Object.assign([], this.products))
  }

  decreaseProduct(p: ProductModel): void {
    const decreaseNumber = 1;
    console.log('decreaseProduct', { p });
    const existId = this.products.findIndex(it => it.name === p.name);
    if (existId < 0) {
      console.log('No shuck item in the Cart')
      return;
    }
    let q = (this.products[existId].quantity || 0) - decreaseNumber;
    if (q <= 1) {
      this.deleteProduct(p);
    } else  {
      this.products[existId].quantity = q
    }
    
    return this.productsSubject.next(Object.assign([], this.products))
  }

  deleteProduct(p: ProductModel): void {
    console.log('deleteProduct', { p });
    const existId = this.products.findIndex(it => it.name === p.name)
    if (existId < 0) {
      console.log('No shuck item in the Cart')
      return;
    }
    const removed = this.products.splice(existId, 1); // returns array of removed items
    console.log('fruits', this.products );
    console.log('removed', removed);
    return this.productsSubject.next(Object.assign([], this.products))
  }
}
