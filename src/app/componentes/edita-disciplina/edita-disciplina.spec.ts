import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaDisciplina } from './edita-disciplina';

describe('EditaDisciplina', () => {
  let component: EditaDisciplina;
  let fixture: ComponentFixture<EditaDisciplina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaDisciplina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaDisciplina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
