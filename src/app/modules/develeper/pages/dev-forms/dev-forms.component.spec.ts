import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFormsComponent } from './dev-forms.component';

describe('DevFormsComponent', () => {
  let component: DevFormsComponent;
  let fixture: ComponentFixture<DevFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
