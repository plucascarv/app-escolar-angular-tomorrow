import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDisciplinas } from './lista-disciplinas';

describe('ListaDisciplinas', () => {
  let component: ListaDisciplinas;
  let fixture: ComponentFixture<ListaDisciplinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDisciplinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDisciplinas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
