import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerproduitComponent } from './creerproduit.component';

describe('CreerproduitComponent', () => {
  let component: CreerproduitComponent;
  let fixture: ComponentFixture<CreerproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
