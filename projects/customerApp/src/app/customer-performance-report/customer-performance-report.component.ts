import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-performance-report',
  templateUrl: './customer-performance-report.component.html',
  styleUrls: ['./customer-performance-report.component.css']
})
export class CustomerPerformanceReportComponent implements OnInit {

  customer_performance_report: any;
  filtered_list: any;
  pie_chart: any;

  constructor(private dataService: DataService, private data: CustomerService) {

  }

  ngOnInit(): void {
    this.dataService.getPerformanceReport().subscribe(res => {
      this.customer_performance_report = res;
      this.data.fetchList(res);
      this.filtered_list = res;
    });

    this.dataService.getPieChart().subscribe(res => {
      this.pie_chart = res;
    })


    this.data.currentMessage.subscribe(message => {
      this.filtered_list = this.customer_performance_report && this.customer_performance_report.filter(({ id }) => id === message)
    })
  }
}
