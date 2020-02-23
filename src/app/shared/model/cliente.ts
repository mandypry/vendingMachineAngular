import { Estado } from './estado';
import { Cidade } from './cidade';

export class Cliente {
    private name: string;
    private pais: string;
    private age: number;
    private estado: Estado;
    private cidade: Cidade;

  constructor(name: string, pais: string, age: number, estado: Estado, cidade: Cidade ) {
      this.name = name;
      this.pais = pais;
      this.age = age;
      this.estado = estado;
      this.cidade = cidade;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPais() {
    return this.pais;
  }

  setPais(pais) {
    this.pais = pais;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getEstado() {
    return this.estado;
  }

  setEstado(estado) {
    this.estado = estado;
  }

  getCidade() {
    return this.cidade;
  }

  setCidade(cidade) {
    this.cidade = cidade;
  }
}
