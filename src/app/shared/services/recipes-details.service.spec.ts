import { TestBed } from '@angular/core/testing';

import { RecipesDetailsService } from './recipes-details.service';

describe('RecipesDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesDetailsService = TestBed.get(RecipesDetailsService);
    expect(service).toBeTruthy();
  });
});
