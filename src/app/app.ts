import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Home } from "./componentes/home/home";
import { ListaDisciplinas } from "./componentes/lista-disciplinas/lista-disciplinas";
import { EditaDisciplina } from "./componentes/edita-disciplina/edita-disciplina";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, ListaDisciplinas, EditaDisciplina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app-escola';
}