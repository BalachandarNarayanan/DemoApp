import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // reportList: any;
  constructor(private http: HttpClient, private loginService: LoginService) {
    // this.http.get('/api/reportList').subscribe(res => {
    //   this.reportList = res
    // });
  }

  // reportType(report) {
  //   if (report.id === "1") {
  //     this.router.navigate(['dashboard', report.id]);
  //   } else if (report.id === "2") {
  //     this.router.navigate(['dashboard', report.id]);
  //   } else if (report.id === "3") {
  //     this.router.navigate(['dashboard', report.id]);
  //   }
  //   else if (report.id === "4") {
  //     this.router.navigate(['dashboard', report.id]);
  //   }
  // }

  ngOnInit(): void {
    //   this.loadScript("/assets/customersServiceReport-elements-es5.js");
    //   this.loadScript("/assets/customersPerformanceReport-elements-es5.js");
    //   this.loadScript("/assets/customerTransactionDetails-elements-es5.js");
    //  this.loadScript("/assets/customersShipmentReport-elements-es5.js");
    this.loginService.logIn.subscribe(item => {
      console.log("gggggggg", item)
    })
  }

  // public loadScript(url: string) {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
}
