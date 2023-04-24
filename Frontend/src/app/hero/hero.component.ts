import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  
  heroName: string;


  constructor (private http:HttpClient){
  }

  ngOnInit(){
    this.getHero().subscribe((response: any) => {
      console.log(response);
    });
}

  getHero(heroName: string): Observable<any>{
    return this.http.get(`http://localhost:8080/heroes/${heroName}`);
  }
  
}
