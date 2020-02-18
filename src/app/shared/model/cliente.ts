import { Estado } from './estado';
import { Cidade } from './cidade';

export class Cliente {
    private name: string;
    private country: string;
    private age: number;
    private estado: Estado;
    private cidade: Cidade;

  constructor(name: string, country: string, age: number ) {
      this.name = name;
      this.country = country;
      this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getCountry() {
    return this.country;
  }

  setCountry(country) {
    this.country = country;
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
