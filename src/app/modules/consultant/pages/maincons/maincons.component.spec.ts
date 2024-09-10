import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainconsComponent } from './maincons.component';

describe('MainconsComponent', () => {
  let component: MainconsComponent;
  let fixture: ComponentFixture<MainconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
