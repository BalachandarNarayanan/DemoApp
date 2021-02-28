import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() customer_shipment_report: any;

  constructor() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.customer_shipment_report[0]);
  }
}
