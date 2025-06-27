import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private disciplinas:Disciplina[] = [];
  API_URL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  todas() {
    return this.http.get<Disciplina[]>(this.API_URL+'/disciplinas');
  }

  salvar(id:string|null, codigo:string, nome:string) {
    let editDisciplina = {id:id,codigo:codigo,nome:nome};
    if(id) {
      return this.http.put(
        this.API_URL+"/disciplinas/"+id,
        editDisciplina
      );
    }
    editDisciplina.id = this.gerarProximoId();
    return this.http.post(this.API_URL+'/disciplinas/',editDisciplina);
  }

  excluir(id:string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/disciplinas/${id}`);
  }

  encontrar(param:string):Observable<Disciplina> {
    return this.http.get<Disciplina>(this.API_URL+'/disciplinas/'+param);
  }

  cancelar():void {
    this.disciplinas = [];
  }

  private gerarProximoId():string {

    const maior = this.disciplinas.map((d)=>Number(d.id)).filter(n => !isNaN(n));

    if (maior.length === 0) return "1";

    return String(Math.max(...maior) + 1);
  }
}
