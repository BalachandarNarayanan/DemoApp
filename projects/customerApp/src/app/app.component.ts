import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { LoginService } from './login.service';
import { DataService } from './data.service';

@Component({
  selector: 'customer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = "App";
  reportList: any;
  filterQueue: any;
  profileMenu: any;
  profileItem: any = "";
  reportItem: any = "";
  filterItem: any = "";
  hideName: any;
  constructor(private router: Router, private data: CustomerService, private loginService: LoginService, private dataService: DataService) {
  }

  reportType() {
    this.profileItem = "";
    let report = this.reportItem;
    if (report.id === "1") {
      this.router.navigate(['dashboard', report.id]);
    } else if (report.id === "2") {
      this.router.navigate(['dashboard', report.id]);
    } else if (report.id === "3") {
      this.router.navigate(['dashboard', report.id]);
    }
    else if (report.id === "4") {
      this.router.navigate(['dashboard', report.id]);
    }
  }

  selectMenu() {
    this.reportItem = "";
    let item = this.profileItem;
    if (item.id === "1") {
      this.router.navigate(['admin-settings']);
    } else if (item.id === "2") {
      this.router.navigate(['login-user-details']);
    } else if (item.id === "4") {
      this.loginService.setLoginFlag(false)
      this.router.navigate(['']);
    }
  }

  filterCustomer() {
    let value = this.filterItem;
    this.data.changeMessage(value.id);
  }

  ngOnInit(): void {
    this.loginService.logIn.subscribe(item => {
      this.hideName = item;
    })

    this.dataService.getReportList().subscribe(res => {
      this.reportList = res;
    });
    this.dataService.getProfileList().subscribe(res => {
      this.profileMenu = res;
    });

    this.data.fullList.subscribe(item => {
      this.filterItem = "";
      this.filterQueue = item;
    })

    this.loadScript("/assets/customersServiceReport-elements-es5.js");
    this.loadScript("/assets/customersPerformanceReport-elements-es5.js");
    this.loadScript("/assets/customerTransactionDetails-elements-es5.js");
    this.loadScript("/assets/adminSettings-elements-es5.js");
    this.loadScript("/assets/customersShipmentReport-elements-es5.js");
    this.loadScript("/assets/customersFilter-elements-es5.js");
    this.loadScript("/assets/loginUserdetails-elements-es5.js");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
