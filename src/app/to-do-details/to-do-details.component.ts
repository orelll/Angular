import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoesServiceService } from '../todoes-service.service';
import { ToDo } from '../common/todo';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css'],
})
export class ToDoDetailsComponent implements OnInit {
  todo: ToDo;
  background: string;
  border: string;

  constructor(
    private todoesService: TodoesServiceService,
    private route: ActivatedRoute
  ) {
    this.getToDoDetails();
  }

  ngOnInit(): void {
    this.background = '#f3f3f3';
    this.border = '#a7a7a7';
  }

  getToDoDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoesService.getToDo(id);
  }
}
