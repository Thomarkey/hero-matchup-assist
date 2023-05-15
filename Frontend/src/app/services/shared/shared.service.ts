import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private isComparingSubject = new BehaviorSubject<boolean>(false);
  isComparing$ = this.isComparingSubject.asObservable();

  setComparingStatus(isComparing: boolean): void {
    this.isComparingSubject.next(isComparing);
  }

}
