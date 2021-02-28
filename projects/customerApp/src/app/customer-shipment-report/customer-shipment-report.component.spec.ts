import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShipmentReportComponent } from './customer-shipment-report.component';

describe('CustomerShipmentReportComponent', () => {
  let component: CustomerShipmentReportComponent;
  let fixture: ComponentFixture<CustomerShipmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerShipmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShipmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
