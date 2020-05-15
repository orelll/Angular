import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToDo } from '../common/todo';
import { TodoesServiceService } from '../todoes-service.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css'],
})
export class ToDoDetailsComponent implements OnInit {
  todo: ToDo;
  background: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private todoesService: TodoesServiceService
  ) {
    
  }

  ngOnInit(): void {
    this.getToDo();
    this.background = '#f3f3f3';
    document.getElementById('note_content').contentEditable = 'true';
  }

  getToDo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoesService.getToDo(id);
  }

  setNoteStyles(): any{
    return {'background-color': this.background};
  }

}
