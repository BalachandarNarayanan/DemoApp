import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-shipment-report',
  templateUrl: './customer-shipment-report.component.html',
  styleUrls: ['./customer-shipment-report.component.css']
})
export class CustomerShipmentReportComponent implements OnInit {

  customer_shipment_report: any;
  filtered_list: any;

  constructor(private dataService: DataService, private data: CustomerService) {

  }

  ngOnInit(): void {
    this.dataService.getCustomerShipmentReport().subscribe(res => {
      this.customer_shipment_report = res;
      this.data.fetchList(res);
      this.filtered_list = res;
    });
    this.data.currentMessage.subscribe(message => {
      this.filtered_list = this.customer_shipment_report && this.customer_shipment_report.filter(({ id }) => id === message)
    })
  }

}
