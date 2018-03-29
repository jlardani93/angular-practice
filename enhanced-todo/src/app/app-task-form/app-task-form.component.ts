import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './app-task-form.component.html',
  styleUrls: ['./app-task-form.component.css']
})
export class AppTaskFormComponent {

  @Output() sendTask = new EventEmitter();

  newTask(description: string, date: string){
    let myTask: Task = new Task(description, date);
    this.sendTask.emit(myTask); 
  }
}
