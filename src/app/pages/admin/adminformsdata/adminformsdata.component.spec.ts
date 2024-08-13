import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminformsdataComponent } from './adminformsdata.component';

describe('AdminformsdataComponent', () => {
  let component: AdminformsdataComponent;
  let fixture: ComponentFixture<AdminformsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminformsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminformsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
