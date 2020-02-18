import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaComponent } from './subCategoria.component';

describe('CategoriaComponent', () => {
  let component: SubCategoriaComponent;
  let fixture: ComponentFixture<SubCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
