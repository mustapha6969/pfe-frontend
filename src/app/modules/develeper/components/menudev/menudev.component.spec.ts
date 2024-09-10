import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudevComponent } from './menudev.component';

describe('MenudevComponent', () => {
  let component: MenudevComponent;
  let fixture: ComponentFixture<MenudevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
