import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsReportsComponent } from './cons-reports.component';

describe('ConsReportsComponent', () => {
  let component: ConsReportsComponent;
  let fixture: ComponentFixture<ConsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
