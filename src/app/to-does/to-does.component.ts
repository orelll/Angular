import { Component, OnInit } from '@angular/core';
import { ToDo } from '../common/todo';

@Component({
  selector: 'app-to-does',
  templateUrl: './to-does.component.html',
  styleUrls: ['./to-does.component.css']
})
export class ToDoesComponent implements OnInit {

  selectedTodo: ToDo;
  todoes: ToDo[] = TODOES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(todo: ToDo){
    this.selectedTodo = todo;
  }

}

export const TODOES: ToDo[] = [
  { id: 11, name: 'Zakupy', content: 'Mleko, mąka, jajka' },
  { id: 12, name: 'Mechanik', content: 'Zapytać o wymianę filtrów' },
  { id: 13, name: 'Prezenty', content: 'Książka dla taty' }
];
