import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';

export class Produto {
    private name: string;
    private price: number;
    private categoria: Categoria;
    private subCategoria: SubCategoria;

  constructor(name: string, price: number, categoria: Categoria, subCategoria: SubCategoria ) {
      this.name = name;
      this.price = price;
      this.categoria = categoria;
      this.subCategoria = subCategoria;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
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
