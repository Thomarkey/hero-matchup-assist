import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/hero';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private backendApiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getHero(heroName: string): Observable<Hero> {
    const url = `${this.backendApiUrl}/hero/${heroName}`;
    return this.http.get<Hero>(url);
  }

  getHeroNames(): Observable<string[]> {
    const cachedHeroNamesList$ = this.sharedService.getHeroNamesList();
    if (cachedHeroNamesList$) {
      return cachedHeroNamesList$;
    } else {
      const heroNamesList$ = this.http.get<string[]>(`${this.backendApiUrl}/heroNames`)
      this.sharedService.setHeroNames(heroNamesList$);
      return heroNamesList$;
    }
  }


  //TODO: put in sharedService like getHeroNames() above
  getHeroPropertyZScore(heroName: string, propertyName: string): Observable<number> {
    const url = `${this.backendApiUrl}/hero/${heroName}/${propertyName}`;
    return this.http.get<number>(url);
  }

  //TODO: put in sharedService like getHeroNames() above
  getAllHeroesPropertiesZScores(): Observable<Map<string, Map<string, number>>> {
    const url = `${this.backendApiUrl}/propertiesZScores`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }

  //TODO: put in sharedService like getHeroNames() above
  getAllHeroesMinMaxPropertiesValues(): Observable<Map<string, Map<string, number>>> {
    const url = `${this.backendApiUrl}/minMaxPropertiesValues`;
    return this.http.get<Map<string, Map<string, number>>>(url);
  }
}
