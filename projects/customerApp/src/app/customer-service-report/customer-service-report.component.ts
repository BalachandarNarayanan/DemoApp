import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-service-report',
  templateUrl: './customer-service-report.component.html',
  styleUrls: ['./customer-service-report.component.css']
})
export class CustomerServiceReportComponent implements OnInit {

  customer_service_report: any;
  filtered_list: any;

  constructor(private dataService: DataService, private data: CustomerService) {
  }

  ngOnInit(): void {
    this.dataService.getCustomerServiceReport().subscribe(res => {
      this.customer_service_report = res;
      this.data.fetchList(res);
      this.filtered_list = res;
    });

    this.data.currentMessage.subscribe(message => {
      this.filtered_list = this.customer_service_report && this.customer_service_report.filter(({ id }) => id === message)
    })

  }
}
