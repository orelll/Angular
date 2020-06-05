import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-app';

  constructor(private iconRegistry: MatIconRegistry
    ,         private sanitizer: DomSanitizer) { 
      this.registerIcons();
    }

  private registerIcons() {
    this.iconRegistry.addSvgIcon(
      'search',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/search.svg'));
    this.iconRegistry.addSvgIcon(
      'move_back',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/move_back.svg'));
    this.iconRegistry.addSvgIcon(
      'pin',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/pin.svg'));
    this.iconRegistry.addSvgIcon(
      'wheels',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/wheels.svg'));
  }

}
