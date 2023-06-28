import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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


  public heroNamesList$?: Observable<string[]>;
  setHeroNames(heroNamesList$: Observable<string[]>) {
    console.log("setting heroNames from shared service!");
    this.heroNamesList$ = heroNamesList$;
  }

  getHeroNamesList(): Observable<string[]> | undefined {
    console.log("get heroNames from sharedService!");
    return this.heroNamesList$;
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
