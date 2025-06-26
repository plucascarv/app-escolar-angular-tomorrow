import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../../disciplina.model';
import { RouterModule } from '@angular/router';
import { DisciplinaService } from '../../disciplina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-disciplinas',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-disciplinas.html',
  styleUrl: './lista-disciplinas.css'
})
export class ListaDisciplinas {
  disciplinas:Disciplina[]= [];
  disciplinasFiltradas:Disciplina[]= [];
  selecionado:null|Disciplina = null;
  termoBusca:string = "";

  constructor (private disciplinaService:DisciplinaService) {
    this.atualizarLista();
  }

  atualizarLista() {
    this.disciplinaService.todas().subscribe(disciplinas => {
      this.disciplinas = disciplinas,
      this.aplicarFiltro()
    });
  }

  aplicarFiltro() {
    if (this.termoBusca != "") {
      this.disciplinasFiltradas = this.disciplinas.filter(disciplina => 
        disciplina.nome.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
        disciplina.codigo.toLowerCase().includes(this.termoBusca.toLowerCase()));
    } else {
      this.disciplinasFiltradas = [...this.disciplinas];
    }
  }

  selecionar(disciplina:Disciplina) {
    this.selecionado = disciplina;
  }

  excluir(disciplina:Disciplina) {
    if (confirm('Tem certeza que deseja excluir a disciplina '+disciplina.nome+'?')) {
      this.disciplinaService.excluir(disciplina.id).subscribe({
        next: () => {
          this.atualizarLista();
        },
        error: (e) => {
          console.error(e);
        }
      })
    }
  }
}
