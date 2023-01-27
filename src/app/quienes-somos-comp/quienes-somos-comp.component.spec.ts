import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosCompComponent } from './quienes-somos-comp.component';

describe('QuienesSomosCompComponent', () => {
  let component: QuienesSomosCompComponent;
  let fixture: ComponentFixture<QuienesSomosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesSomosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
