import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComponenteComponent } from './actualiza-componente.component';

describe('ActualizaComponenteComponent', () => {
  let component: ActualizaComponenteComponent;
  let fixture: ComponentFixture<ActualizaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
