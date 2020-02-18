import { Categoria } from './categoria';

export class SubCategoria {

    private unidMedida: string;
    private categoria: Categoria;

    constructor(unidMedida: string, categoria: Categoria) {
        this.unidMedida = unidMedida;
        this.categoria = categoria;
    }

    getUnidMedida() {
        return this.unidMedida;
    }

    setUnidMedida(unidMedida) {
        this.unidMedida = unidMedida;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }
}