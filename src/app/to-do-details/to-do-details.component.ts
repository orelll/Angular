import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToDo } from '../common/todo';
import { TodoesServiceService } from '../todoes-service.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {

  todo: ToDo;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private todoesService: TodoesServiceService) { }

  ngOnInit(): void {
    this.getToDo();
  }

  getToDo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoesService.getToDo(id);
  }

  goBack(): void {
    this.location.back();
  }
}
