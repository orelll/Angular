import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'colors-wheel',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/wheels.svg'));
    iconRegistry.addSvgIcon(
      'move-back',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/move_back.svg'));
  }
}
