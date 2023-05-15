import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ComparingHeroesComponent } from './comparing-heroes/comparing-heroes.component';

const routes: Routes = [
  { path: "hero/:firstHero", component: HeroComponent },
  { path: ":firstHero/:secondHero", component: ComparingHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

