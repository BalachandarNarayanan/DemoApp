import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getReportList() {
    return this.http.get('/api/reportList');
  }

  getProfileList() {
    return this.http.get('/api/profileMenu');
  }

  getAdminSetting() {
    return this.http.get('/api/admin_setting');
  }

  getPerformanceReport() {
    return this.http.get('/api/customer_performance_report');
  }

  getPieChart() {
    return this.http.get('/api/pie_chart');
  }

  getCustomerServiceReport() {
    return this.http.get('/api/customer_service_report');
  }

  getCustomerShipmentReport() {
    return this.http.get('/api/customer_shipment_report');
  }

  getCustomerTransactionDetails() {
    return this.http.get('/api/customer_transaction_details');
  }

  getBarChart() {
    return this.http.get('/api/bar_chart');
  }

  getLoginUserDetails() {
    return this.http.get('/api/login_user_details');
  }

  getLoginUser() {
    return this.http.get('/api/login_credential');
  }

}
