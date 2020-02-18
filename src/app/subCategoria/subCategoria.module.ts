import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriaComponent } from './components';
import { SubCategoriaService } from '../shared/services';

@NgModule({
  declarations: [SubCategoriaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SubCategoriaComponent
  ],
  providers: [
    SubCategoriaService
  ]
})
export class SubCategoriaModule { }
