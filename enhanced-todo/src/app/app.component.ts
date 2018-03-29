import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './models/Task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  masterTaskList: Task[] = [];
  currentTask: Task = null;

  addTask(newTask: Task){
    this.masterTaskList.push(newTask);
    console.log(this.masterTaskList.length);
  }

  getCurrentTask(){
    console.log(this.currentTask); 
  }


}
