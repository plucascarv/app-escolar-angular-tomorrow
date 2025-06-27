import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../disciplina.model';
import { DisciplinaService } from '../../disciplina';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-disciplina',
  imports: [FormsModule, RouterModule],
  templateUrl: './edita-disciplina.html',
  styleUrl: './edita-disciplina.css'
})
export class EditaDisciplina implements OnInit {
  editando:Disciplina|null = null;
  disciplinas: Disciplina| null = null;
  codigo:string|null = "";
  nome:string|null = "";
  id:string|null = null;

  constructor(private disciplinaService:DisciplinaService, private route:ActivatedRoute, private router:Router) {
    this.atualizarLista()

  }

  ngOnInit() {
  }
 

  atualizarLista(){
    this.route.params.subscribe(params=>{
      if(params["id"]){
        this.disciplinaService.encontrar(params["id"]).subscribe(disciplinas=>{this.disciplinas=disciplinas
          this.codigo = this.disciplinas?.codigo || null
          this.nome = this.disciplinas?.nome || null
          this.id=this.disciplinas?.id || null
          this.editando = this.disciplinas
      })
      }
    })

  }

  salvar() {
    if(this.editando){
      try{
        this.disciplinaService.salvar(this.editando?.id,this.codigo as string,this.nome as string).subscribe(disciplina => {
          this.router.navigate(['/disciplinas'])
        })
        }
        catch(e){
           console.log(e)
        }     
    }else{
      try{
        this.disciplinaService.salvar(null,this.codigo as string,this.nome as string).subscribe(disciplina => {
          this.router.navigate(['/disciplinas'])
        })
      }
      catch(e){
        console.log(e)
      }
    }
  }
          

   
    /*  this.disciplinaService.salvar(null, this.codigo as string, this.nome as string).subscribe({
        next: (novaDisciplina) => {
          console.log(novaDisciplina);
          this.router.navigate(['/disciplinas']);
        },
        error: (e) => {
          console.log(e);
        }
      })*/
    

  cancelar() {
    this.disciplinaService.cancelar();
  }

}
