import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { ListaDisciplinas } from './componentes/lista-disciplinas/lista-disciplinas';
import { EditaDisciplina } from './componentes/edita-disciplina/edita-disciplina';
import { Error } from './componentes/error/error';
import path from 'path';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "disciplinas",
    component: ListaDisciplinas
  },
  {
    path:"disciplinas/novo",
    component: EditaDisciplina
  },
  {
    path:"disciplinas/:id",
    component: EditaDisciplina
  },
  {
    path: "**",
    component: Error
  }
];
