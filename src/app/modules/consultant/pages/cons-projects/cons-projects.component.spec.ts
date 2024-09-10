import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsProjectsComponent } from './cons-projects.component';

describe('ConsProjectsComponent', () => {
  let component: ConsProjectsComponent;
  let fixture: ComponentFixture<ConsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
