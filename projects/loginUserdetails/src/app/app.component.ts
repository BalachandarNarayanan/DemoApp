import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  displayColumns: any;
  @Input() login_user_details: any;

  constructor() {
  }

  ngOnChanges() {
    this.displayColumns = Object.keys(this.login_user_details[0]);
  }

}
