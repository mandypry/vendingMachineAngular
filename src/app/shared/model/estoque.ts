import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';
import { Produto } from './produto';

export class Estoque {

    private produto: Produto;
    private categoria: Categoria;
    private subCategoria: SubCategoria;
    private quantidade: number;

  constructor(produto: Produto, categoria: Categoria, subCategoria: SubCategoria, quantidade: number ) {
     this.produto = produto;
     this.categoria = categoria;
     this.subCategoria = subCategoria;
     this.quantidade = quantidade;
   }

  getProduto() {
    return this.produto;
  }

  setProduto() {
    this.produto = this.produto;
  }
  getCategoria() {
    return this.categoria;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  getSubCategoria() {
    return this.subCategoria;
  }

  setSubCategoria(subCategoria) {
    this.subCategoria = subCategoria;
  }

  getQuantidade() {
    return this.quantidade;
  }

  setQuantidade(quantidade){
    this.quantidade = quantidade;
  }
}
