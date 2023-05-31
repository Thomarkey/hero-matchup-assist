import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private backendApiUrl = 'http://localhost:8080/hero';

  constructor(private http: HttpClient) { }

  getHero(heroName: string): Observable<Hero> {
    const url = `${this.backendApiUrl}/${heroName}`;
    return this.http.get<Hero>(url);
  }

  getHeroNames(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/heroNames');
  }

  getHeroPropertyZScore(heroName: string, propertyName: string): Observable<number> {
    const url = `${this.backendApiUrl}/${heroName}/${propertyName}`;
    return this.http.get<number>(url);
  }

  getAllHeroesPropertiesZScores(): Observable<Map<string, Map<string, number>>> {
    const url = `http://localhost:8080/propertiesZScores`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }

  getAllHeroesMinMaxPropertiesValues(): Observable<Map<string, Map<string, number>>> {
    const url = `http://localhost:8080/minMaxPropertiesValues`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }
}
