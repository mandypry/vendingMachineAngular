import { Cidade } from './cidade';

describe('Cliente', () => {
    it('should create an instande', () => {
        expect(new Cidade('Guarulhos')).toBeTruthy();
    });
})