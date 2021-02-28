import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginFlag = new BehaviorSubject<boolean>(false);
  logIn: Observable<boolean> = this.loginFlag.asObservable();

  constructor() { }

  setLoginFlag(flag: boolean) {
    this.loginFlag.next(flag);
  }
}
