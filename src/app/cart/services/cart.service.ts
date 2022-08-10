import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: ProductModel[] = [
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
  // мне нравится, когда в названии переменной, которая содержит subject используется два знака $$ как суффикс
  // а для переменной, которая содержит observable - один знак $.
  // может и вам будет интересно использовать такой подход
  private productsSubject = new BehaviorSubject<ProductModel[]>(Object.assign([], this.cartProducts));
  products$ = this.productsSubject.asObservable();
  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  get totalCost(): number {
    const cost = this.cartProducts.reduce(
      (total, current) => total + (current.quantity ? current.quantity : 1) * current.price, 0
    );
    return cost;
  }

  get totalQuantity(): number {
    const qnt = this.cartProducts.reduce(
      (total, current) => total + (current.quantity ? current.quantity : 1), 0
    );
    return qnt;
  }

  get isEmptyCart(): boolean {
    return this.cartProducts.length > 0;
  }

  addProduct(p: ProductModel): void {
    console.log({ p });
    const existId = this.cartProducts.findIndex(it => it.name === p.name)
    if (existId >= 0) {
      this.cartProducts[existId].quantity = (this.cartProducts[existId].quantity || 1) + 1;
    } else {
      p.quantity = 1
      this.cartProducts.push(p);
    }
    return this.productsSubject.next(Object.assign([], this.cartProducts))
  }

  decreaseProduct(p: ProductModel): void {
    const decreaseNumber = 1;
    console.log('decreaseProduct', { p });
    const existId = this.cartProducts.findIndex(it => it.name === p.name);
    if (existId < 0) {
      console.log('No shuck item in the Cart')
      return;
    }
    let q = (this.cartProducts[existId].quantity || 0) - decreaseNumber;
    if (q <= 1) {
      this.removeProduct(p);
    } else {
      this.cartProducts[existId].quantity = q
    }

    return this.productsSubject.next(Object.assign([], this.cartProducts))
  }

  removeProduct(p: ProductModel): void {
    console.log('removeProduct', { p });
    const existId = this.cartProducts.findIndex(it => it.name === p.name)
    if (existId < 0) {
      console.log('No shuck item in the Cart')
      return;
    }
    const removed = this.cartProducts.splice(existId, 1); // returns array of removed items
    console.log('fruits', this.cartProducts);
    console.log('removed', removed);
    return this.productsSubject.next(Object.assign([], this.cartProducts))
  }

  removeAllProducts(): void {
    console.log('removeAllProducts');
    this.cartProducts = [];
    console.log('products', this.cartProducts);
    return this.productsSubject.next(Object.assign([], this.cartProducts))
  }
}
