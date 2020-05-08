import { Component, OnInit } from '@angular/core';
import { TodoesServiceService } from '../todoes-service.service';
import { ToDo } from '../common/todo';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoes: ToDo[];

  constructor(private todesService: TodoesServiceService) {
    this.getTodoes();
   }

  ngOnInit(): void {
  }

  getTodoes(){
    this.todoes = this.todesService.getToDoes();
  }

}
