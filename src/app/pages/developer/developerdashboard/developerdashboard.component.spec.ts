import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperdashboardComponent } from './developerdashboard.component';

describe('DeveloperdashboardComponent', () => {
  let component: DeveloperdashboardComponent;
  let fixture: ComponentFixture<DeveloperdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
