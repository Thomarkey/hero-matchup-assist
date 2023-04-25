import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroComparisonComponent } from './hero-comparison/hero-comparison.component';
import { HeroDropdownComponent } from './hero-dropdown/hero-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    AllHeroesComponent,
    HeroComparisonComponent,
    HeroDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
