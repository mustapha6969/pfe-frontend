import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantprojectsComponent } from './consultantprojects.component';

describe('ConsultantprojectsComponent', () => {
  let component: ConsultantprojectsComponent;
  let fixture: ComponentFixture<ConsultantprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
