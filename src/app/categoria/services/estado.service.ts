import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private nome: string;
  private sigla: string;
  constructor() { }

  get userNome() {
    return this.nome;
  }

  set userNome(nome) {
    this.nome = nome;
  }

  get userSigla() {
    return this.sigla;
  }

  set userSigla(sigla) {
    this.sigla = sigla;
  }

}
