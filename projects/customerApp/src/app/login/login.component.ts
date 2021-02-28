import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseData: any;
  message = "";
  constructor(private router: Router, private loginService: LoginService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLoginUser().subscribe(response => {
      this.responseData = response;
    })
  }

  onLogin(user: string, pass: string) {
    this.responseData.map(({ username, password }) => {
      if (user === username && pass === password) {
        localStorage.setItem('username', username);
        this.loginService.setLoginFlag(true)
        this.router.navigate(['dashboard']);
        return true;
      }
      else {
        this.message = 'Invalid Username or Password';
      }
    })
  }
}
