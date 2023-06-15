import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/hero';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private backendApiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) { }

  getHero(heroName: string): Observable<Hero> {
    const url = `${this.backendApiUrl}/hero/${heroName}`;
    return this.http.get<Hero>(url);
  }

  getHeroNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.backendApiUrl}/heroNames`);
  }

  getHeroPropertyZScore(heroName: string, propertyName: string): Observable<number> {
    const url = `${this.backendApiUrl}/hero/${heroName}/${propertyName}`;
    return this.http.get<number>(url);
  }

  getAllHeroesPropertiesZScores(): Observable<Map<string, Map<string, number>>> {
    const url = `${this.backendApiUrl}/propertiesZScores`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }

  getAllHeroesMinMaxPropertiesValues(): Observable<Map<string, Map<string, number>>> {
    const url = `${this.backendApiUrl}/minMaxPropertiesValues`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }
}
