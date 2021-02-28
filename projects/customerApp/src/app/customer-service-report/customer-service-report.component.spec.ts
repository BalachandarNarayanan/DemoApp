import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceReportComponent } from './customer-service-report.component';

describe('CustomerServiceReportComponent', () => {
  let component: CustomerServiceReportComponent;
  let fixture: ComponentFixture<CustomerServiceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
