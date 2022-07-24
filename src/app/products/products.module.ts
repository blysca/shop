import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent, ProductListComponent} from './components'
import { ProductService } from './product.service';
import { MaterialModule } from '../share/material.module';

const productModuleComponents = [ProductComponent, ProductListComponent]

@NgModule({
  declarations: [
    productModuleComponents
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    productModuleComponents
  ]
})
export class ProductsModule { }
