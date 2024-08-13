import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantdashboardComponent } from './consultantdashboard.component';

describe('ConsultantdashboardComponent', () => {
  let component: ConsultantdashboardComponent;
  let fixture: ComponentFixture<ConsultantdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
