import { ProductModel } from './../../product/product';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products!: ProductModel[];
  displayedColumns: string[] = ['name', 'price', 'count'];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

}
