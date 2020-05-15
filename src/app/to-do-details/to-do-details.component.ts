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
  border: string;
  cpZapiszText: string;
  cpAnulujText: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private todoesService: TodoesServiceService
  ) {}

  ngOnInit(): void {
    this.getToDo();
    this.background = '#f3f3f3';
    this.border = '#a7a7a7';
    this.cpZapiszText = 'wybierz';
    this.cpAnulujText = 'anuluj';
    document.getElementById('note_content').contentEditable = 'true';
  }

  getToDo() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoesService.getToDo(id);
  }

  setNoteStyles(): any {
    return {
      'background-color': this.background,
      border: this.border,
      'border-width': '2px',
      'border-style': 'solid',
      'border-radius': '10px',
    };
  }

  cpClose() {
    this.recalculateBorder();
    console.log(`changed to ${this.background}, border: (${this.border})`);
  }

  cpColorChanged() {
    this.recalculateBorder();
    console.log(`changed to ${this.background}, border: (${this.border})`);
  }

  recalculateBorder() {
    const colorasrgb = this.hexToRgb(this.background);
    const darker = this.makeDarker(colorasrgb);
    this.border = this.rgbToHex(darker.r, darker.g, darker.b);
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  makeDarker(rgb): any {
    const step = 50;
    rgb.r = rgb.r + step <= 255 ? rgb.r + step : rgb.r;
    rgb.g = rgb.g + step <= 255 ? rgb.g + step : rgb.g;
    rgb.b = rgb.b + step <= 255 ? rgb.b + step : rgb.b;
    return rgb;
  }
}
