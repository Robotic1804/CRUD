import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCompComponent } from './proyectos-comp.component';

describe('ProyectosCompComponent', () => {
  let component: ProyectosCompComponent;
  let fixture: ComponentFixture<ProyectosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
