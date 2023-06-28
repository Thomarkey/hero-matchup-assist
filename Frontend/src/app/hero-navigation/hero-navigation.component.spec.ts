import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNavigationComponent } from './hero-navigation.component';

describe('HeroNavigationComponent', () => {
  let component: HeroNavigationComponent;
  let fixture: ComponentFixture<HeroNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroNavigationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
