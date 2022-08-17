import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ShareModule } from './share/share.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

import { generatedString, GeneratorFactory, LocalStorageService, GeneratorService, ConstantService } from './core/services';


const constantServiceExample = new ConstantService();
const lclStorage = new LocalStorageService();
// const generatedString = GeneratorFactory(23);
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    ProductsModule,
    CartModule
  ],
  providers: [
    { provide: ConstantService, useValue: constantServiceExample },
    { provide: generatedString, useFactory: GeneratorFactory(23), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: lclStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Все ок
