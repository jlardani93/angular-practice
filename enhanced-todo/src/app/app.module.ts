import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './models/Task.model';


import { AppComponent } from './app.component';
import { AppTaskFormComponent } from './app-task-form/app-task-form.component';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
import { AppTaskUpdateComponent } from './app-task-update/app-task-update.component';
import { CompletenessPipe } from './completeness.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    AppTaskFormComponent,
    AppTaskListComponent,
    AppTaskUpdateComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
