
import { Cliente } from './cliente';
import { Produto } from './produto';

export class Pedido {

    private cliente: Cliente;
    private produto: Produto;

  constructor(cliente: Cliente, produto: Produto ) {
    this.cliente = cliente;
    this.produto = produto;
  }

  getCliente() {
    return this.cliente;
  }

  setCliente(cliente) {
    this.cliente = cliente;
  }

  getProduto() {
    return this.produto;
  }

  setProduto(produto) {
    this.produto = produto;
  }
}
