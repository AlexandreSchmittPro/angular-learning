import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddCarComponent } from './button-add-car.component';

describe('ButtonAddCarComponent', () => {
  let component: ButtonAddCarComponent;
  let fixture: ComponentFixture<ButtonAddCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
