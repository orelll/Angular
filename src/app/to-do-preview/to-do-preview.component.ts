import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from  '../common/todo';

@Component({
  selector: 'app-to-do-preview',
  templateUrl: './to-do-preview.component.html',
  styleUrls: ['./to-do-preview.component.css']
})
export class ToDoPreviewComponent implements OnInit {

  @Input() currentToDo: ToDo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
