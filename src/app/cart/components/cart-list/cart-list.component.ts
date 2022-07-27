import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/product';
import { CartActions } from '../../cart-actions';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products!: ProductModel[];
  displayedColumns: string[] = ['name', 'price', 'quantity', 'subtotal'];
  total: number = 0;
  quantity: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => {
      this.products = [...products]
      this.total = this.cartService.totalCost;
      this.quantity = this.cartService.totalQuantity;
    });
  }

  onAction(action: CartActions, p: ProductModel): void {
    console.log({action});
    
    switch (action) {
      case CartActions.increase:
      this.cartService.addProduct(p)
      break;

      case CartActions.decrease:
      this.cartService.decreaseProduct(p)
      break;

      case CartActions.delete:
      this.cartService.deleteProduct(p)
      break;      
    }
  }

}
