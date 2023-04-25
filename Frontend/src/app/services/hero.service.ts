import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private backendApiUrl  = 'http://localhost:8080/hero';

  constructor(private http: HttpClient) {}

  getHero(heroName:string): Observable<Hero> {
    const url = `${this.backendApiUrl}/${heroName}`;
    return this.http.get<Hero>(url);
  }

  getHeroNames(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/heroNames');
  }

}
