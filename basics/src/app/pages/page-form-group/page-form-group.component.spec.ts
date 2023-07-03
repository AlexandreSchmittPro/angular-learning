import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormGroupComponent } from './page-form-group.component';

describe('PageFormGroupComponent', () => {
  let component: PageFormGroupComponent;
  let fixture: ComponentFixture<PageFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
