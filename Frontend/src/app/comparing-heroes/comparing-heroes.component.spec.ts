import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparingHeroesComponent } from './comparing-heroes.component';

describe('ComparingHeroesComponent', () => {
  let component: ComparingHeroesComponent;
  let fixture: ComponentFixture<ComparingHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparingHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparingHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
