import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './components';
import { CategoriaService } from '../shared/services';

@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaComponent
  ],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }
