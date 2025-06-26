import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { ListaDisciplinas } from './componentes/lista-disciplinas/lista-disciplinas';
import { EditaDisciplina } from './componentes/edita-disciplina/edita-disciplina';
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
    path:"discip´linas/:id",
    component: EditaDisciplina
  }
];
