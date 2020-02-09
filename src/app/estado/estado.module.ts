import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from './components';
import { EstadoService } from './services';

@NgModule({
  declarations: [EstadoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EstadoComponent
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
