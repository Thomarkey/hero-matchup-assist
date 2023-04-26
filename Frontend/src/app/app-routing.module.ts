import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HeroComparisonComponent } from './hero-comparison/hero-comparison.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "hero/:heroName", component: HeroComponent},
  {path: "heroes", component: AllHeroesComponent},
  // {path: "", component: HomeComponent},
  {path: "hero-comparison/:heroName1/:heroName2", component: HeroComparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

