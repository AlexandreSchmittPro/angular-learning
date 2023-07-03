import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormControlComponent } from './page-form-control.component';

describe('PageFormControlComponent', () => {
  let component: PageFormControlComponent;
  let fixture: ComponentFixture<PageFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
