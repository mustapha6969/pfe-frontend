import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuconsComponent } from './menucons.component';

describe('MenuconsComponent', () => {
  let component: MenuconsComponent;
  let fixture: ComponentFixture<MenuconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
