import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
