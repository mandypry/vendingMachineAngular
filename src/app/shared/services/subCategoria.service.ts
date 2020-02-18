import { Injectable } from '@angular/core';
import { SubCategoria } from '../model/subCategoria';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})

export class SubCategoriaService {

  public categoria: Categoria;

  subCategoria() {
    return new SubCategoria('Liquido', this.categoria);
  }
}
