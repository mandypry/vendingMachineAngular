import { TestBed } from '@angular/core/testing';
import { SubCategoria } from './subCategoria';
import { SubCategoriaService } from '../services';

describe('SubCategoriaService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should create an instande', () => {
        const service: SubCategoriaService = TestBed.get(SubCategoriaService);
        expect(service).toBeTruthy();
    });
})