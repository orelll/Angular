import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoes',
  templateUrl: './todoes.component.html',
  styleUrls: ['./todoes.component.css']
})
export class TodoesComponent implements OnInit {

  myTodoes = TODOES;

  constructor() { }

  ngOnInit(): void {
  }

}

export const TODOES: string[] = [ "notatka jeden", "notka dwa", "trzy"]