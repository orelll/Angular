import { Injectable } from '@angular/core';
import { ToDo } from './common/todo';
import { TODOES } from './common/todoesList';

@Injectable({
  providedIn: 'root'
})
export class TodoesServiceService {

  constructor() { }

getToDoes():ToDo[]{
  return TODOES;
}

  getToDo(id: number):ToDo {
    return TODOES.find(todo => todo.id === id);
  }
}
