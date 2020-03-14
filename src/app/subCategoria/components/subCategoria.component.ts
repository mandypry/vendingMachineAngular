import { Component, OnInit } from '@angular/core';
import { SubCategoriaService } from '../../shared/services';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-subCategoria',
  templateUrl: './subCategoria.component.html',
  styleUrls: ['./subCategoria.component.sass']
})
export class SubCategoriaComponent implements OnInit {

  constructor(
    private subCategoriaService: SubCategoriaService
  ) { }

  ngOnInit() {

   const subCategoria = this.subCategoriaService.subCategoria();

  }

}
