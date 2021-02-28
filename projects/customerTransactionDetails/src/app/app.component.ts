import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() customer_transaction_details: any;
  @Input() bar_chart: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLegend = true;
  public barChartPlugins = [];
  barChartLabels: any;
  barChartType: any;
  barChartData: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.customer_transaction_details[0]);
  }

  ngDoCheck() {
    this.barChartLabels = this.bar_chart.label;
    this.barChartType = this.bar_chart.type;
    this.barChartData = [
      { data: this.bar_chart.data1, label: this.bar_chart.label1 },
      { data: this.bar_chart.data2, label: this.bar_chart.label2 }
    ];

  }
}
