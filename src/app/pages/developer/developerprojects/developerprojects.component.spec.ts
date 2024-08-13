import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperprojectsComponent } from './developerprojects.component';

describe('DeveloperprojectsComponent', () => {
  let component: DeveloperprojectsComponent;
  let fixture: ComponentFixture<DeveloperprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
