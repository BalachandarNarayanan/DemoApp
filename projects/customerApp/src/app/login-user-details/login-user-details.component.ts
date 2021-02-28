import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-user-details',
  templateUrl: './login-user-details.component.html',
  styleUrls: ['./login-user-details.component.css']
})
export class LoginUserDetailsComponent implements OnInit {

  login_user_details: any;

  constructor(private dataService: DataService) {
    let value = localStorage.getItem("username");
    this.dataService.getLoginUser().subscribe(res => {
      this.login_user_details = res;
      this.login_user_details = this.login_user_details.filter(({ username }) => username === value);
    });
  }

  ngOnInit(): void {
  }


}
