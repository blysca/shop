import { HighlightDirective } from './highlight.directive';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    HighlightDirective
  ]
})
export class ShareModule { }
