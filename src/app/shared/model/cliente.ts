
export class Cliente {
    private nome: string;
    private pais: string;
    private idade: number;
  // private Estado estado; //Objeto estado
  // private Cidade cidade; //Objeto Cidade

  constructor(nome: string, pais: string, idade: number ) {
      this.nome = nome;
      this.pais = pais;
      this.idade = idade;
  }

  get userNome() {
    return this.nome;
  }

  set userNome(nome) {
    this.nome = nome;
  }

  get userPais() {
    return this.pais;
  }

  set userPais(pais) {
    this.pais = pais;
  }

  get userIdade() {
    return this.idade;
  }

  set userIdade(idade) {
    this.idade = idade;
  }
}
