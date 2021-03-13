import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeticaoComponent } from './competicao.component';

describe('CompeticaoComponent', () => {
  let component: CompeticaoComponent;
  let fixture: ComponentFixture<CompeticaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompeticaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
