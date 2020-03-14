import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../shared/services';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    //chamando a categoria
    const categoria = this.categoriaService.categoria();
  }

}
