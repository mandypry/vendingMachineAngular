import { Categoria } from './categoria';

describe('Categoria', () => {
    let categoria: Categoria;

    beforeEach(() => {
        categoria = new Categoria('Alimenticio');
    });

    it('should criarCategoria', () => {
        categoria.setStateName('Alimenticio');
        expect(categoria.getTipo()).toEqual('Alimenticio');
    });
})