import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsProjectDetailComponent } from './cons-project-detail.component';

describe('ConsProjectDetailComponent', () => {
  let component: ConsProjectDetailComponent;
  let fixture: ComponentFixture<ConsProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
