import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from 'src/app/products/product';
import { CartActions } from '../../cart-actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() product!: ProductModel;
  @Output() action = new EventEmitter<CartActions>();

  delete(): void {
    this.action.emit(CartActions.remove)
  }
  increase(): void {
    this.action.emit(CartActions.increase)
  }
  decrease(): void {
    this.action.emit(CartActions.decrease)
  }

}
