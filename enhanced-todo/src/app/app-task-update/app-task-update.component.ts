import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task.model';

@Component({
  selector: 'app-task-update',
  templateUrl: './app-task-update.component.html',
  styleUrls: ['./app-task-update.component.css']
})
export class AppTaskUpdateComponent {

  @Input() childCurrentTask: Task = null;

  updateTask(newDescription: string, newDate: string){
    this.childCurrentTask.description = newDescription;
    this.childCurrentTask.dueDate = newDate; 
  }
}
