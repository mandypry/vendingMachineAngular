import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/cliente';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    const categoria = this.categoriaService.categoria();
  }

}
