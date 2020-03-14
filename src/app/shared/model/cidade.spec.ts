import { Cidade } from './cidade';
import { Estado } from './estado';


describe('Cidade', () => {

    let estado: Estado;
    let cidade: Cidade;

    beforeEach(() => {
        estado = new Estado ('São Paulo', 'SP');
        cidade = new Cidade ('Guarulhos', estado);
    });

    it('should nameCidade', () => {
        cidade.setNomeCidade('Guarulhos');
        expect(cidade.getNomeCidade()).toEqual('Guarulhos');
    });

    it('should estadoCidade', () => {
        cidade.setEstado(estado);
        expect(cidade.getEstado()).toEqual(estado);
    });
})