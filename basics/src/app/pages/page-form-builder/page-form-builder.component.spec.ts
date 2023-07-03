import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormBuilderComponent } from './page-form-builder.component';

describe('PageFormBuilderComponent', () => {
  let component: PageFormBuilderComponent;
  let fixture: ComponentFixture<PageFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
