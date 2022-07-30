import { CartService } from '../../../cart/services';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddProduct(p: ProductModel): void {
    this.cartService.addProduct(p);
  }

}
