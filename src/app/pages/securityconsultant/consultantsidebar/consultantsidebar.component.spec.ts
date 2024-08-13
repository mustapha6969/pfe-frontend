import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsidebarComponent } from './consultantsidebar.component';

describe('ConsultantsidebarComponent', () => {
  let component: ConsultantsidebarComponent;
  let fixture: ComponentFixture<ConsultantsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
