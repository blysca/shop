import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const modules = [MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule];

@NgModule({
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
