import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { Categoria } from '../model/categoria';
import { SubCategoria } from '../model/subCategoria';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  public categoria: Categoria;
  public subCategoria: SubCategoria;

  produto() {
    return new Produto('Suco de Frutas Vermelhas', 3.10, this.categoria, this.subCategoria);
  }
}

