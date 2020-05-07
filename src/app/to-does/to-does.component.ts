import { Component, OnInit } from '@angular/core';
import { ToDo } from '../common/todo';
import { TodoesServiceService } from '../todoes-service.service';

@Component({
  selector: 'app-to-does',
  templateUrl: './to-does.component.html',
  styleUrls: ['./to-does.component.css']
})
export class ToDoesComponent implements OnInit {

  selectedTodo: ToDo;
  todoes: ToDo[] = TODOES;

  constructor(private todoesService: TodoesServiceService) {
    this.getTodoesList();
  }

  ngOnInit(): void {

  }

  getTodoesList() {
    this.todoes = this.todoesService.getToDoes();
  }

  onSelect(todo: ToDo) {
    this.selectedTodo = todo;
  }

}

export const TODOES: ToDo[] = [
  
];
