import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './components';
import { EstoqueService } from '../shared/services';



@NgModule({
  declarations: [EstoqueComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EstoqueComponent
  ],
  providers: [
    EstoqueService
  ]
})
export class EstoqueModule { }
