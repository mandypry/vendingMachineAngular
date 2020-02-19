import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './components';
import { PedidoService } from '../shared/services';
@NgModule({
  declarations: [PedidoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PedidoComponent
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
