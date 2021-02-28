import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private messageSource = new BehaviorSubject<any>("");
  currentMessage: Observable<any> = this.messageSource.asObservable();
  private list = new BehaviorSubject<any>([]);
  fullList: Observable<any> = this.list.asObservable();

  constructor() { }

  changeMessage(id: any) {
    this.messageSource.next(id)
  }

  fetchList(filterIds: any) {
    this.list.next(filterIds)
  }
}
