import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsDetailComponent } from './cons-detail.component';

describe('ConsDetailComponent', () => {
  let component: ConsDetailComponent;
  let fixture: ComponentFixture<ConsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
