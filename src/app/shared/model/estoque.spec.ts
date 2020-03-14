import { Estoque } from './estoque';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';
import { Produto } from './produto';

describe('Estoque', () => {

  let produto: Produto;
  let categoria: Categoria;
  let subCategoria: SubCategoria;
  let estoque: Estoque;

  beforeEach(() =>{
    categoria = new Categoria('Alimenticio');
    subCategoria = new SubCategoria('Liquido', categoria);
    produto = new Produto(
      'Suco de Frutas Vermelhas',
      10.40,
      categoria,
      subCategoria
      );
    estoque = new Estoque(produto, categoria, subCategoria, 10);
  });

  it('should categoriaEstoque', () => {
    estoque.setCategoria(categoria);
    expect(estoque.getCategoria()).toEqual(categoria);
  });

  it('should subCategoriaEstoque', () => {
    estoque.setSubCategoria(subCategoria);
    expect(estoque.getSubCategoria()).toEqual(subCategoria);
  });

  it('should produtoEstoque', () => {
    estoque.setProduto(produto);
    expect(estoque.getProduto()).toEqual(produto);
  });

  it('should quantidadeEstoque', () => {
    estoque.setQuantidade(10);
    expect(estoque.getQuantidade()).toEqual(10);
  });

});
