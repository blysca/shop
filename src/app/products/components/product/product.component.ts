import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addProduct = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    console.log(`Buy`);
    this.addProduct.emit(this.product);
  }
}
