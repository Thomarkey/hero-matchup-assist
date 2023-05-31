import { TestBed } from '@angular/core/testing';

import { PropertiesZScoresService } from './properties-zscores.service';

describe('PropertiesZScoresService', () => {
  let service: PropertiesZScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesZScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
