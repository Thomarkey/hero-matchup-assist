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


  private firstHeroSubject = new BehaviorSubject<Hero | undefined>(undefined);
  public firstHero$ = this.firstHeroSubject.asObservable();

  private secondHeroSubject = new BehaviorSubject<Hero | undefined>(undefined);
  public secondHero$ = this.secondHeroSubject.asObservable();

  setFirstHero(hero: Hero | undefined): void {
    this.firstHeroSubject.next(hero);
  }

  setSecondHero(hero: Hero | undefined): void {
    this.secondHeroSubject.next(hero);
  }

}
