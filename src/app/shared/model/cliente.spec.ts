import { Cliente } from './cliente';
import { Estado } from './estado';
import { Cidade } from './cidade';

fdescribe('Cliente', () => {
  let cliente: Cliente;
  // tslint:disable-next-line: prefer-const
  let estado: Estado;
  // tslint:disable-next-line: prefer-const
  let cidade: Cidade;

  beforeEach(() => {
    cliente = new Cliente(
      'Amanda',
      'Brasil',
      31,
      new Estado('São Paulo', 'SP'),
      new Cidade('São Paulo', new Estado('São Paulo', 'SP')));
  });

  it('should create an instance', () => {
    expect(new Cliente('Amanda', 'Brasil', 31, estado, cidade)).toBeTruthy();
  });

  it('should CriarNovoCliente', () => {
    const name = 'Amanda';
    cliente.setName(name);
    expect(cliente.setName(name)).toBeUndefined();
  });

  it('CriarNovoCliente2', () => {
    cliente.setName('Amanda');
    expect(cliente.getName()).toEqual('Amanda');
  });

});
