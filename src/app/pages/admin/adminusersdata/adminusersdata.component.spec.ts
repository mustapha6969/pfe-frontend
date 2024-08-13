import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusersdataComponent } from './adminusersdata.component';

describe('AdminusersdataComponent', () => {
  let component: AdminusersdataComponent;
  let fixture: ComponentFixture<AdminusersdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusersdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
