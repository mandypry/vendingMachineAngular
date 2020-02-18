export class Categoria {

    private tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    getTipo() {
        return this.tipo;
    }

    setStateName(tipo) {
        this.tipo = tipo;
    }

}