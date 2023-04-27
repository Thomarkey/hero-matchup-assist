import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPropertyCheckboxesComponent } from './hero-property-checkboxes.component';

describe('HeroPropertyCheckboxesComponent', () => {
  let component: HeroPropertyCheckboxesComponent;
  let fixture: ComponentFixture<HeroPropertyCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPropertyCheckboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPropertyCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
