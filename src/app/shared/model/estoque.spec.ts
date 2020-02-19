import { Estoque } from './estoque';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';
import { Produto } from './produto';

describe('Estoque', () => {

  // tslint:disable-next-line: prefer-const
  let produto: Produto;
  // tslint:disable-next-line: prefer-const
  let categoria: Categoria;
  // tslint:disable-next-line: prefer-const
  let subCategoria: SubCategoria;

  it('should create an instance', () => {
    expect(new Estoque(produto, categoria, subCategoria, 10)).toBeTruthy();
  });
});
