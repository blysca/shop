import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

const modules = [MatButtonModule, MatCardModule, MatTableModule];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
