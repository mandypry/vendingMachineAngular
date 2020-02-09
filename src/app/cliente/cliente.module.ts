import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components';
import { ClienteService } from '../shared/services';



@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClienteComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
