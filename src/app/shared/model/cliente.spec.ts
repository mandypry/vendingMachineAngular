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
    estado = new Estado ('São Paulo', 'SP');
    cidade = new Cidade ('São Paulo', estado);
    cliente = new Cliente(
      'Amanda',
      'Brasil',
      31,
      estado,
      cidade
    );
  });

  // it('should create an instance', () => {
  //   expect(new Cliente('Amanda', 'Brasil', 31, estado, cidade)).toBeTruthy();
  // });

  // it('should create newEstado', () => {
  //   expect(new Estado('Sao Paulo', 'SP')).toBeTruthy();
  // });
  
  // it('should create newCidade', () => {
  //   expect(new Cidade('Guarulhos', estado)).toBeTruthy();
  // });

  // it('should CriarNovoCliente', () => {
  //   const name = 'Amanda';
  //   cliente.setName(name);
  //   expect(cliente.setName(name)).toBeUndefined();
  // });

  it('should CriarNomeCliente2', () => {
    cliente.setName('Amanda');
    expect(cliente.getName()).toEqual('Amanda');
  });

  it('Should CriarPaisCliente', () => {
    cliente.setPais('Brasil');
    expect(cliente.getPais()).toEqual('Brasil');
  });

  it('Should CriarIdadeCliente', () => {
    cliente.setAge(11);
    expect(cliente.getAge()).toEqual(11);
  });

  it('Should CriarNameEstado', () => {
    estado.setStateName('Sao Paulo');
    expect(estado.getStateName()).toEqual('Sao Paulo');
  });

  it('Should CriarSiglaEstado', () => {
    estado.setStateInitials('SP');
    expect(estado.getStateInitials()).toEqual('SP');
  });

  it('Should CriarNameCidade', () => {
    cidade.setCityName('Guarulhos');
    expect(cidade.getCityName()).toEqual('Guarulhos');
  });

  it('Should CriarClienteEstado', () => {
    cliente.setEstado(estado);
    expect(cliente.getEstado()).toEqual(estado);
  });

  it('Should CriarClienteCidade', () => {
    cliente.setCidade(cidade);
    expect(cliente.getCidade()).toEqual(cidade);
  });

});
