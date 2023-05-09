import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDropdownComponent } from './home-dropdown.component';

describe('HomeDropdownComponent', () => {
  let component: HomeDropdownComponent;
  let fixture: ComponentFixture<HomeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
