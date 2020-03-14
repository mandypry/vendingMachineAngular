import { Estado } from './estado';

export class Cidade {

    private nome: string;
    private estado: Estado;

    constructor(nome: string, estado: Estado) {
        this.nome = nome;
        this.estado = estado;
    }

    getNomeCidade() {
        return this.nome;
    }

    setNomeCidade(nome) {
        this.nome = nome;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}