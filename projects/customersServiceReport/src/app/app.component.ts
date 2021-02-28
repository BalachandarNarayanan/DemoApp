import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() customer_service_report: any;

  constructor() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.customer_service_report[0]);
  }


}
