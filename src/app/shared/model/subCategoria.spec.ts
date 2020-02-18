import { TestBed } from '@angular/core/testing';
import { SubCategoria } from './subCategoria';
import { SubCategoriaService } from '../services';
import { Categoria } from './categoria';

describe('SubCategoriaService', () => {

    let categoria: Categoria;

    it('should create an instance', () => {
    expect(new SubCategoria('Liquido', categoria)).toBeTruthy();
  });
});
