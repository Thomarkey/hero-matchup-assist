import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { HeroDropdownComponent } from './hero-dropdown/hero-dropdown.component';
import { RoundPipe } from './pipes/round.pipe';
import { TransformedPropertiesPipe } from './pipes/transformed-properties.pipe';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroPropertyCheckboxesComponent } from './hero-property-checkboxes/hero-property-checkboxes.component';
import { LoaderComponent } from './loader/loader.component';
import { HeroPropertiesZscoreComponent } from './hero-properties-zscore/hero-properties-zscore.component';
import { HomeDropdownComponent } from './home-dropdown/home-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDropdownComponent,
    RoundPipe,
    TransformedPropertiesPipe,
    HeroCardComponent,
    HeroPropertyCheckboxesComponent,
    LoaderComponent,
    HeroPropertiesZscoreComponent,
    HomeDropdownComponent,
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
