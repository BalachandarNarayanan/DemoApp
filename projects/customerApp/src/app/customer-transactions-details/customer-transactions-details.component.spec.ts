import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionsDetailsComponent } from './customer-transactions-details.component';

describe('CustomerTransactionsDetailsComponent', () => {
  let component: CustomerTransactionsDetailsComponent;
  let fixture: ComponentFixture<CustomerTransactionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTransactionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransactionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
