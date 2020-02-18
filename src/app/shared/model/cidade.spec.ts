import { Cidade } from './cidade';
import { Estado } from './estado';


describe('Cidade', () => {

    let estado: Estado;

    it('should create an instande', () => {
        expect(new Cidade('Guarulhos', estado)).toBeTruthy();
    });
})