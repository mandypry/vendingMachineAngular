import { Produto } from './produto';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';

describe('Produto', () => {

  let produto: Produto;
  let categoria: Categoria;
  let subCategoria: SubCategoria;

  beforeEach(() => {
    categoria = new Categoria('Alimenticio');
    subCategoria = new SubCategoria('Liquido', categoria);
    produto = new Produto(
      'Suco de Frutas Vermelhas',
      10.40,
      categoria,
      subCategoria
      );
  });

  it('should nameProduto', () => {
    produto.setName('Suco de Frutas Vermelhas');
    expect(produto.getName()).toEqual('Suco de Frutas Vermelhas');
  });

  it('should preçoProduto', () => {
    produto.setPreco(10.40);
    expect(produto.getPreco()).toEqual(10.40);
  });

  it('should categoriaProduto', () => {
    produto.setCategoria(categoria);
    expect(produto.getCategoria()).toEqual(categoria);
  });

  it('should subCategoriaProduto', () => {
    produto.setSubCategoria(subCategoria);
    expect(produto.getSubCategoria()).toEqual(subCategoria);
  });

});
