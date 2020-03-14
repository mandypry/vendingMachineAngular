import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';

export class Produto {
    private name: string;
    private preco: number;
    private categoria: Categoria;
    private subCategoria: SubCategoria;

  constructor(name: string, preco: number, categoria: Categoria, subCategoria: SubCategoria ) {
      this.name = name;
      this.preco = preco;
      this.categoria = categoria;
      this.subCategoria = subCategoria;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(preco) {
    this.preco = preco;
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
}
