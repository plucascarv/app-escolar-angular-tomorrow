import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../disciplina.model';
import { DisciplinaService } from '../../disciplina';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-edita-disciplina',
  imports: [FormsModule, RouterModule],
  templateUrl: './edita-disciplina.html',
  styleUrl: './edita-disciplina.css'
})
export class EditaDisciplina implements OnInit {
  editando:Disciplina|null = null;
  disciplinas: Disciplina[] = [];
  codigo:string|null = "";
  nome:string|null = "";
  id:number|null = null;

  constructor(private disciplinaService:DisciplinaService, private route:ActivatedRoute, private router:Router) {
    this.atualizarLista()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam && idParam !== 'novo' && idParam !== ':id') {
        this.id = +idParam;
        this.disciplinaService.encontrar(this.id).subscribe(
          disciplina => {
            this.editando = disciplina;
            this.codigo = disciplina.codigo;
            this.nome = disciplina.nome;
          },
          error => {
            console.error(error);
          }
        );
      } else {
        this.editando = null;
        this.id = null;
        this.codigo = "";
        this.nome = "";
      }
    })
  }

  atualizarLista(){
    this.disciplinaService.todas().subscribe( disciplinas => this.disciplinas = disciplinas)
  }

  salvar() {
    if(this.editando && this.editando.id){
      this.disciplinaService.salvar(this.editando.id, this.codigo as string, this.nome as string).subscribe({
        next: (disciplinaSalva) => {
          console.log(disciplinaSalva)
          this.router.navigate(['/disciplinas'])
        },
        error: (e) => {
          console.error(e)
        }
      });
    } else {
      this.disciplinaService.salvar(null, this.codigo as string, this.nome as string).subscribe({
        next: (novaDisciplina) => {
          console.log(novaDisciplina);
          this.router.navigate(['/disciplinas']);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

  cancelar() {
    this.disciplinaService.cancelar();
  }
}
