import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerServiceReportComponent } from './customer-service-report/customer-service-report.component';
import { CustomerPerformanceReportComponent } from './customer-performance-report/customer-performance-report.component';
import { CustomerShipmentReportComponent } from './customer-shipment-report/customer-shipment-report.component';
import { CustomerTransactionsDetailsComponent } from './customer-transactions-details/customer-transactions-details.component';
import { FilterComponent } from './filter/filter.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { LoginUserDetailsComponent } from './login-user-details/login-user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerServiceReportComponent,
    CustomerPerformanceReportComponent,
    CustomerShipmentReportComponent,
    CustomerTransactionsDetailsComponent,
    FilterComponent,
    AdminSettingsComponent,
    LoginUserDetailsComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
