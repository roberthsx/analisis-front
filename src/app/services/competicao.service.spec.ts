import { TestBed } from '@angular/core/testing';

import { CompeticaoService } from './competicao.service';

describe('CompeticaoService', () => {
  let service: CompeticaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompeticaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
