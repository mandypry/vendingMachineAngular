import { TestBed } from '@angular/core/testing';

import { EstoqueService } from './estoque.service';

describe('ProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    const service: EstoqueService = TestBed.get(EstoqueService);
    expect(service).toBeTruthy();
  });
});
