import { Categoria } from './categoria';

describe('Cliente', () => {
    it('should create an instande', () => {
        expect(new Categoria('Alimenticio')).toBeTruthy();
    });
})