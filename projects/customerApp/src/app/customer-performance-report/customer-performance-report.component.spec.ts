import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPerformanceReportComponent } from './customer-performance-report.component';

describe('CustomerPerformanceReportComponent', () => {
  let component: CustomerPerformanceReportComponent;
  let fixture: ComponentFixture<CustomerPerformanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPerformanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
