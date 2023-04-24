import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss']
})

export class AllHeroesComponent {

  
  constructor(private http:HttpClient){
  }

  ngOnInit(){
      this.getAllHeroes().subscribe((response: any) => {
        console.log(response);
      });
  }

  getAllHeroes(): Observable<any>{
    return this.http.get("http://localhost:8080/heroes");
  }


}
