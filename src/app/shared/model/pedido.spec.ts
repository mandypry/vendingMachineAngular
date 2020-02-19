import { Produto } from './produto';
import { Cliente } from './cliente';
import { Pedido } from './pedido';


describe('Pedido', () => {

  // tslint:disable-next-line: prefer-const
  let cliente: Cliente;
  // tslint:disable-next-line: prefer-const
  let produto: Produto;

  it('should create an instance', () => {
    expect(new Pedido(cliente, produto)).toBeTruthy();
  });

});
