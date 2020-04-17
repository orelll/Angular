import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToDo } from '../common/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {

todo: ToDo = { id: 1, name: 'notka 1', content: 'lorem ipsum'};

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
