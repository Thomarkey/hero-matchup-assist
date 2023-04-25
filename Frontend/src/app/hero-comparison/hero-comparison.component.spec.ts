import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComparisonComponent } from './hero-comparison.component';

describe('HeroComparisonComponent', () => {
  let component: HeroComparisonComponent;
  let fixture: ComponentFixture<HeroComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
