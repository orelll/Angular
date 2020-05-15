import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'move-back',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/move_back.svg'));
    iconRegistry.addSvgIcon(
      'colors-wheel',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/wheels.svg'));
    iconRegistry.addSvgIcon(
      'menu-three-dots',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu_three_dots.svg'));
    iconRegistry.addSvgIcon(
      'camera',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/camera.svg'));
    iconRegistry.addSvgIcon(
      'checkmark',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/checked.svg'));
    iconRegistry.addSvgIcon(
      'picture',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/picture.svg'));
  }
}
