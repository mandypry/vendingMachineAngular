import { TestBed } from '@angular/core/testing';
import { SubCategoria } from './subCategoria';
import { SubCategoriaService } from '../services';
import { Categoria } from './categoria';

describe('SubCategoriaService', () => {

  let subCategoria: SubCategoria;
  // tslint:disable-next-line: prefer-const
  let categoria: Categoria;

  beforeEach(() => {
    categoria = new Categoria('Alimenticio');
    subCategoria = new SubCategoria('Liquido', categoria);
  });

  it('should unidadeMedida', () => {
    subCategoria.setUnidMedida('Liquido');
    expect(subCategoria.getUnidMedida()).toEqual('Liquido');
  });

  it('should categoria', () => {
    subCategoria.setCategoria(categoria);
    expect(subCategoria.getCategoria()).toEqual(categoria);
  });
});
