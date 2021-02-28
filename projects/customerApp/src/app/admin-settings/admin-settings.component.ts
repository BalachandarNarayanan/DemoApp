import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {
  admin_setting: any;

  constructor(private dataService: DataService) {
    this.dataService.getAdminSetting().subscribe(res => {
      this.admin_setting = res
    });
  }

  ngOnInit(): void {
  }

}
