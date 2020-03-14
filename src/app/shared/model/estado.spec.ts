import { Estado } from './estado';

describe('Estado', () => {

    let estado: Estado;

    beforeEach(() => {
        estado = new Estado( 'São Paulo', 'SP');
    });

    it('should criarNameEstado', () => {
        estado.setNomeEstado('São Paulo');
        expect(estado.getNomeEstado()).toEqual('São Paulo');
    });

    it('should criarInitialsEstado', () => {
        estado.setSiglaEstado('SP');
        expect(estado.getSiglaEstado()).toEqual('SP');
    });
})