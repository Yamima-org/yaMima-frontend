import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixProduitComponent } from './choix-produit.component';

describe('ChoixProduitComponent', () => {
  let component: ChoixProduitComponent;
  let fixture: ComponentFixture<ChoixProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
