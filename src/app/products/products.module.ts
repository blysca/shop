import { NgModule } from '@angular/core';

import { ShareModule } from './../share/share.module';
import { ProductService } from './product.service';
import { ProductComponent, ProductListComponent } from './components'

const productModuleComponents = [ProductComponent, ProductListComponent]

@NgModule({
  declarations: [
    productModuleComponents
  ],
  providers: [
    ProductService
  ],
  imports: [
    ShareModule
  ],
  exports: [
    productModuleComponents
  ]
})
export class ProductsModule { }
