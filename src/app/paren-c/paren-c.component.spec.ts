import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenCComponent } from './paren-c.component';

describe('ParenCComponent', () => {
  let component: ParenCComponent;
  let fixture: ComponentFixture<ParenCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
