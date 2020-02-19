import { Categoria } from './categoria';

describe('Categoria', () => {
    it('should create an instande', () => {
        expect(new Categoria('Alimenticio')).toBeTruthy();
    });
})