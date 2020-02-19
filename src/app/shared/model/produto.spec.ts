import { Produto } from './produto';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';

describe('Produto', () => {

  // tslint:disable-next-line: prefer-const
  let component: Produto;
  // tslint:disable-next-line: prefer-const
  let categoria: Categoria;
  // tslint:disable-next-line: prefer-const
  let subCategoria: SubCategoria;

  it('should create an instance', () => {
    expect(new Produto('Suco de Frutas Vermelhas', 3.10, categoria, subCategoria)).toBeTruthy();
  });

  
});
