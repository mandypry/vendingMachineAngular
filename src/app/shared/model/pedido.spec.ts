import { Produto } from './produto';
import { Cliente } from './cliente';
import { Pedido } from './pedido';
import { Estado } from './estado';
import { Cidade } from './cidade';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';


describe('Pedido', () => {

  let cliente: Cliente;
  let produto: Produto;
  let pedido: Pedido;
  let estado: Estado;
  let cidade: Cidade;
  let categoria: Categoria;
  let subCategoria: SubCategoria;

  beforeEach(() => {
    estado = new Estado ('São Paulo', 'SP');
    cidade = new Cidade ('São Paulo', estado);
    categoria = new Categoria('Alimenticio');
    subCategoria = new SubCategoria('Liquido', categoria);
    cliente = new Cliente(
      'Amanda',
      'Brasil',
      31,
      estado,
      cidade
    );
    produto = new Produto(
      'Suco de Frutas Vermelhas', 
      10.40,
      categoria,
      subCategoria
      );
    pedido = new Pedido(cliente, produto);
  });

  it('should clientePedido', () => {
    pedido.setCliente(cliente);
    expect(pedido.getCliente()).toEqual(cliente);
  });

  it('should produtoPedido', () => {
    pedido.setProduto(produto);
    expect(pedido.getProduto()).toEqual(produto);
  });

});
