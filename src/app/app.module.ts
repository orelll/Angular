import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoesComponent } from './to-does/to-does.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoDetailsComponent,
    DashboardComponent,
    ToDoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


