import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCompComponent } from './contacto-comp.component';

describe('ContactoCompComponent', () => {
  let component: ContactoCompComponent;
  let fixture: ComponentFixture<ContactoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
