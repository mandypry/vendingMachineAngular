import { Produto } from './produto';
import { Categoria } from './categoria';
import { SubCategoria } from './subCategoria';

fdescribe('Produto', () => {

  // tslint:disable-next-line: prefer-const
  let component: Produto;
  // tslint:disable-next-line: prefer-const
  let categoria: Categoria;
  // tslint:disable-next-line: prefer-const
  let subCategoria: SubCategoria;

  it('should create an instance', () => {
    expect(new Produto('Suco de Frutas Vermelhas', 3.10, categoria, subCategoria)).toBeTruthy();
  });

  // it('should CriarNovoCliente', () => {
  //   const name = 'Amanda';
  //   component.setName(name);
  //   expect(component.setName(name)).toBeUndefined();
  //   // expect(component.getName()).toEqual(name);
  // });

  // it('CriarNovoCliente2', () => {
  //   component.setName('Amanda');
  //   expect(component.getName()).toEqual(name);
  // });
});
