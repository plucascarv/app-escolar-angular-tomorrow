import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../../disciplina.model';
import { RouterModule } from '@angular/router';
import { DisciplinaService } from '../../disciplina';

@Component({
  selector: 'app-lista-disciplinas',
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-disciplinas.html',
  styleUrl: './lista-disciplinas.css'
})
export class ListaDisciplinas {
  disciplinas:Disciplina[]= [];
  selecionado:null|Disciplina = null;

  constructor (private disciplinaService:DisciplinaService) {
    this.atualizarLista();
  }

  atualizarLista() {
    this.disciplinaService.todas().subscribe(disciplinas => this.disciplinas = disciplinas);
  }

  selecionar(disciplina:Disciplina) {
    this.selecionado = disciplina;
  }

  excluir(disciplina:Disciplina) {
    if (confirm('Tem certeza que deseja excluir a disciplina '+disciplina.nome+'?')) {
      try {
        this.disciplinaService.excluir(disciplina.id)
      }
      catch(e) {
        console.log(e);
      }
    }
  }
}
