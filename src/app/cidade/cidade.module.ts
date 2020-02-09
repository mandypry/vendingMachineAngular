import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeComponent } from './components';
import { CidadeService } from './services';



@NgModule({
  declarations: [CidadeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CidadeComponent,
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
