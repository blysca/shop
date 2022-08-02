import { HighlightDirective, BorderDirective } from './directives';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const directives = [HighlightDirective, BorderDirective];

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    ...directives
  ]
})
export class ShareModule { }
