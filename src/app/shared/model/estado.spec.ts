import { Estado } from './estado';

fdescribe('Estado', () => {

    let estado: Estado;

    beforeEach(() => {
        estado = new Estado( 'São Paulo', 'SP');
    });

    it('should criarNameEstado', () => {
        estado.setStateName('São Paulo');
        expect(estado.getStateName()).toEqual('São Paulo');
    });

    it('should criarInitialsEstado', () => {
        estado.setStateInitials('SP');
        expect(estado.getStateInitials()).toEqual('SP');
    });
})