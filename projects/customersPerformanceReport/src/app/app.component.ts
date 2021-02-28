import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'performance-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() customer_performance_report: any;
  @Input() pie_chart: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartLabels: any;
  pieChartData: any;
  pieChartType: any;
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.customer_performance_report[0]);
  }

  ngDoCheck() {
    this.pieChartLabels = this.pie_chart.label;
    this.pieChartType = this.pie_chart.type;
    this.pieChartData = this.pie_chart.data;
  }


}
