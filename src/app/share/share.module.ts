import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { HighlightDirective, BorderDirective } from './directives';
import { OrderByPipe } from './pipes';

const directives = [HighlightDirective, BorderDirective];
const pipes = [OrderByPipe];

@NgModule({
  declarations: [
    ...directives,
    ...pipes,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ...directives,
    ...pipes,
  ]
})
export class ShareModule { }
