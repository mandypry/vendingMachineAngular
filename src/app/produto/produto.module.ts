import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './components';
import { ClienteService, ProdutoService } from '../shared/services';



@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
