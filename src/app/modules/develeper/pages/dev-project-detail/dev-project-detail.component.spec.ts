import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProjectDetailComponent } from './dev-project-detail.component';

describe('DevProjectDetailComponent', () => {
  let component: DevProjectDetailComponent;
  let fixture: ComponentFixture<DevProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
