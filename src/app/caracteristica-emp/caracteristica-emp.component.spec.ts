import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaEmpComponent } from './caracteristica-emp.component';

describe('CaracteristicaEmpComponent', () => {
  let component: CaracteristicaEmpComponent;
  let fixture: ComponentFixture<CaracteristicaEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicaEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
