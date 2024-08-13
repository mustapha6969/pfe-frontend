import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantformsComponent } from './consultantforms.component';

describe('ConsultantformsComponent', () => {
  let component: ConsultantformsComponent;
  let fixture: ComponentFixture<ConsultantformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
