import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent, CartItemComponent } from './components';

const cartModuleComponents = [CartListComponent, CartItemComponent];

@NgModule({
  declarations: [cartModuleComponents],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [cartModuleComponents]
})
export class CartModule { }
