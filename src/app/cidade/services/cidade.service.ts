import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  private nome: string;
  // private Estado estado; //Objeto estado

  constructor() { }

  get userNome() {
    return this.nome;
  }

  set userNome(nome) {
    this.nome = nome;
  }

}
