import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon' ; 
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatMenuModule } from '@angular/material/menu';
import { ToDoPreviewComponent } from './to-do-preview/to-do-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToDoDetailsComponent,
    ToDoPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ColorPickerModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


