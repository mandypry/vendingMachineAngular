import { Estado } from './estado';

export class Cidade {

    private name: string;
    private estado: Estado;

    constructor(name: string, estado: Estado) {
        this.name = name;
        this.estado = estado;
    }

    getCityName() {
        return this.name;
    }

    setCityName(name) {
        this.name = name;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}