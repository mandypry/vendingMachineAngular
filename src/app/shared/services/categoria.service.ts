import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  estado() {
    return new Categoria('Alimenticio');
  }
}
