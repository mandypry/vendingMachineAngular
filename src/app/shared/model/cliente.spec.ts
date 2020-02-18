import { Cliente } from './cliente';

fdescribe('Cliente', () => {

  // tslint:disable-next-line: prefer-const
  let component: Cliente;

  it('should create an instance', () => {
    expect(new Cliente('Amanda', 'Brasil', 31 )).toBeTruthy();
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
