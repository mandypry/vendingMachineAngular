import { Cliente } from './cliente';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente('Amanda', 'Brasil', 31 )).toBeTruthy();
  });
});
