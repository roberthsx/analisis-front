import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRodadaComponent } from './analise-rodada.component';

describe('AnaliseRodadaComponent', () => {
  let component: AnaliseRodadaComponent;
  let fixture: ComponentFixture<AnaliseRodadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliseRodadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseRodadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
