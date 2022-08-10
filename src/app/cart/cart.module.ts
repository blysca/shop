import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CartListComponent, CartItemComponent } from './components';

const cartModuleComponents = [CartListComponent, CartItemComponent];

@NgModule({
  declarations: [cartModuleComponents],
  imports: [
    ShareModule
  ],
  exports: [cartModuleComponents]
})
export class CartModule { }
