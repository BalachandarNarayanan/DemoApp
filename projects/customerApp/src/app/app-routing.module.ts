import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CustomerServiceReportComponent } from './customer-service-report/customer-service-report.component';
import { CustomerPerformanceReportComponent } from './customer-performance-report/customer-performance-report.component';
import { CustomerTransactionsDetailsComponent } from './customer-transactions-details/customer-transactions-details.component';
import { CustomerShipmentReportComponent } from './customer-shipment-report/customer-shipment-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { LoginUserDetailsComponent } from './login-user-details/login-user-details.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/1', component: CustomerServiceReportComponent },
  { path: 'dashboard/2', component: CustomerPerformanceReportComponent },
  { path: 'dashboard/3', component: CustomerTransactionsDetailsComponent },
  { path: 'dashboard/4', component: CustomerShipmentReportComponent },
  { path: 'admin-settings', component: AdminSettingsComponent },
  { path: 'login-user-details', component: LoginUserDetailsComponent },
  { path: 'filter', component: FilterComponent },
  // { path: '**', component : PageNotFoundComponent, canActivate : [AuthguardGuard]}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
