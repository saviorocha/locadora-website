import { TestBed } from '@angular/core/testing';

import { InstanciaFilmeService } from './instancia-filme.service';

describe('InstanciaFilmeService', () => {
  let service: InstanciaFilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstanciaFilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
