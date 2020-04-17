import { Component, OnInit } from '@angular/core';
import { ToDo } from '../common/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoes: ToDo[] = TODOES;

  constructor() { }

  ngOnInit(): void {
  }

}


export const TODOES: ToDo[] = [
  { id: 11, name: 'Zakupy', content: 'Mleko, mąka, jajka' },
  { id: 12, name: 'Mechanik', content: 'Zapytać o wymianę filtrów' },
  { id: 13, name: 'Prezenty', content: 'Książka dla taty' }
];