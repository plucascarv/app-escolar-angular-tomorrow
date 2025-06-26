import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private disciplinas:Disciplina[] = [];
  API_URL = '';

  constructor(private http:HttpClient) { }

  todas() {
    return this.http.get<Disciplina[]>(this.API_URL+'/disciplinas');
  }

  salvar(id:number|null, codigo:string, nome:string) {
    let editDisciplina = {id:id,codigo:codigo,nome:nome};
    if(id) {
      editDisciplina.codigo = codigo;
      editDisciplina.nome = nome;
      return this.http.patch(
        this.API_URL+"/disciplina"+id,
        editDisciplina
      );
    }
    editDisciplina.id = this.gerarProximoId();
    return this.http.post(this.API_URL+'/disciplinas/'+editDisciplina, {observe:'body'});
  }

  excluir(id:number):void {
    this.http.delete<void>(`${this.API_URL+"/disciplinas"}/${id}`);
  }

  encontrar(param:number|string):Observable<Disciplina> {
    return this.http.get<Disciplina>(this.API_URL+'/disciplina/'+param);
  }

  cancelar():void {
    this.disciplinas = [];
  }

  private gerarProximoId() {
    if (this.disciplinas.length === 0) return 1;

    const maior = Math.max(...this.disciplinas.map((d)=>d.id));
    return maior+1;
  }
}
