/**
 * Serviço de clientes com Angular
 * @author Amanda Silva <amanda.adgti@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';
import { Estoque } from 'src/app/shared/model/estoque';
import { Categoria } from '../model/categoria';
import { SubCategoria } from '../model/subCategoria';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})

export class EstoqueService {

  public produto: Produto;
  public categoria: Categoria;
  public subCategoria: SubCategoria;
  public quantidade: number;

  estoque() {
    return new Estoque(this.produto, this.categoria, this.subCategoria, 10);
  }
}

