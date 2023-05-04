import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPropertiesZscoreComponent } from './hero-properties-zscore.component';

describe('HeroPropertiesZscoreComponent', () => {
  let component: HeroPropertiesZscoreComponent;
  let fixture: ComponentFixture<HeroPropertiesZscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPropertiesZscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPropertiesZscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
