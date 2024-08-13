import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprojectsdataComponent } from './adminprojectsdata.component';

describe('AdminprojectsdataComponent', () => {
  let component: AdminprojectsdataComponent;
  let fixture: ComponentFixture<AdminprojectsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprojectsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprojectsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
