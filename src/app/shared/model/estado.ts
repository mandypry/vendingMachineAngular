export class Estado {

    private nome: string;
    private sigla: string;

    constructor(nome: string, sigla: string){
        this.nome = nome;
        this.sigla = sigla;
    }

    getNomeEstado() {
        return this.nome;
    }

    setNomeEstado(nome) {
        this.nome = nome;
    }

    getSiglaEstado() {
        return this.sigla;
    }

    setSiglaEstado(sigla) {
        this.sigla = sigla;
    }

}