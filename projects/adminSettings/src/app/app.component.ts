import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() admin_setting: any;

  constructor() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.admin_setting[0]);
  }

}
