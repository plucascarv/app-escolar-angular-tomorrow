import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../disciplina.model';
import { DisciplinaService } from '../../disciplina';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-disciplina',
  imports: [FormsModule],
  templateUrl: './edita-disciplina.html',
  styleUrl: './edita-disciplina.css'
})
export class EditaDisciplina {
  editando:Disciplina|null = null;
  disciplinas: Disciplina[] = [];
  codigo:string|null = "";
  nome:string|null = "";

  constructor(private disciplinaService:DisciplinaService, private route:ActivatedRoute) {
    this.atualizarLista()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id) {
        this.editando = this.disciplinaService.encontrar(id);
      }
    })
  }

  atualizarLista(){
    this.disciplinaService.todas().subscribe( disciplinas => this.disciplinas = disciplinas)
  }

  salvar() {
    if(this.editando){
      try {
        this.disciplinaService.salvar(this.editando?.id,this.editando?.codigo as string, this.editando?.nome as string).subscribe(disciplina => {
          this.atualizarLista();
        })
      }
      catch(e) {
        console.log(e);
      }
    } else {
      try{
        this.disciplinaService.salvar(null, this.codigo as string, this.nome as string);
      }
      catch(e) {
        console.log(e);
      }
    }
  }

  cancelar() {
    this.disciplinaService.cancelar();
  }
}
