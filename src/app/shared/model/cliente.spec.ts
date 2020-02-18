import { Cliente } from './cliente';
import { Estado } from './estado';
import { Cidade } from './cidade';

fdescribe('Cliente', () => {

  // tslint:disable-next-line: prefer-const
  let component: Cliente;
  let estado: Estado;
  let cidade: Cidade;

  it('should create an instance', () => {
    expect(new Cliente('Amanda', 'Brasil', 31, estado, cidade)).toBeTruthy();
  });

  // it('should CriarNovoCliente', () => {
  //   const name = 'Amanda';
  //   component.setName(name);
  //   expect(component.setName(name)).toBeUndefined();
  //   // expect(component.getName()).toEqual(name);
  // });

  it('CriarNovoCliente2', () => {
    component.setName('Amanda');
    expect(component.getName()).toEqual(name);
  });

});
