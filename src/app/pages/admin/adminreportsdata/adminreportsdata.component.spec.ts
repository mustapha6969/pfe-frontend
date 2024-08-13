import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreportsdataComponent } from './adminreportsdata.component';

describe('AdminreportsdataComponent', () => {
  let component: AdminreportsdataComponent;
  let fixture: ComponentFixture<AdminreportsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreportsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreportsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
