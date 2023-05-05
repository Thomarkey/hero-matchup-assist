import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPropertiesComponent } from './hero-card.component';

describe('HeroPropertiesComponent', () => {
  let component: HeroPropertiesComponent;
  let fixture: ComponentFixture<HeroPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
