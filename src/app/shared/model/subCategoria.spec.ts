import { TestBed } from '@angular/core/testing';
import { SubCategoria } from './subCategoria';
import { SubCategoriaService } from '../services';
import { Categoria } from './categoria';

fdescribe('SubCategoriaService', () => {

  let subCategoria: SubCategoria;
  // tslint:disable-next-line: prefer-const
  let categoria: Categoria;

  beforeEach(() => {
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
