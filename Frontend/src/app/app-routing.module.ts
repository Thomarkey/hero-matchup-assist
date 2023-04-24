import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "hero/:name", component: HeroComponent},
  {path: "heroes", component: AllHeroesComponent},
  // {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

