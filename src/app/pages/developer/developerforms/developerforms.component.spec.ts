import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperformsComponent } from './developerforms.component';

describe('DeveloperformsComponent', () => {
  let component: DeveloperformsComponent;
  let fixture: ComponentFixture<DeveloperformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
