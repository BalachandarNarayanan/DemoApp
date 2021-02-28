import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-transactions-details',
  templateUrl: './customer-transactions-details.component.html',
  styleUrls: ['./customer-transactions-details.component.css']
})
export class CustomerTransactionsDetailsComponent implements OnInit {

  customer_transaction_details: any;
  filtered_list: any;
  bar_chart: any;

  constructor(private dataService: DataService, private data: CustomerService) {
  }

  ngOnInit(): void {
    this.dataService.getCustomerTransactionDetails().subscribe(res => {
      this.customer_transaction_details = res;
      this.data.fetchList(res);
      this.filtered_list = res;
    });
    this.dataService.getBarChart().subscribe(res => {
      this.bar_chart = res;
    });

    this.data.currentMessage.subscribe(message => {
      this.filtered_list = this.customer_transaction_details && this.customer_transaction_details.filter(({ id }) => id === message)
    })
  }

}
