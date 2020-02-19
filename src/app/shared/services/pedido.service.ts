/**
 * Serviço de clientes com Angular
 * @author Amanda Silva <amanda.adgti@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Produto } from '../model/produto';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  public cliente: Cliente;
  public produto: Produto;

  pedido() {
    return new Pedido(this.cliente, this.produto);
  }
}

