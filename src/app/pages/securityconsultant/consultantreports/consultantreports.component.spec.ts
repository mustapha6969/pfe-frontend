import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantreportsComponent } from './consultantreports.component';

describe('ConsultantreportsComponent', () => {
  let component: ConsultantreportsComponent;
  let fixture: ComponentFixture<ConsultantreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
