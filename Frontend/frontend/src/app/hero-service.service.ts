import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HeroService {

private heroesUrl : string;

  constructor(private http: HttpClient) {
  this.heroesUrl = 'http://localhost:8080/heroes'}


/* 
   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
*/ 

}


