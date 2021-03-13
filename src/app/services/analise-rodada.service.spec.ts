import { TestBed } from '@angular/core/testing';

import { AnaliseRodadaService } from './analise-rodada.service';

describe('AnaliseRodadaService', () => {
  let service: AnaliseRodadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnaliseRodadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
