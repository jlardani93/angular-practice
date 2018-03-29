import { Component } from '@angular/core';
import { Task } from './models/task.models';

@Component({
  selector: 'task',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course", 3);
  secondTask: Task = new Task("Destroy Alex", 1);
  thirdTask: Task = new Task("Force feed Ernest carbs", 2);

  tasks: Task[] = [this.firstTask, this.secondTask, this.thirdTask, new Task("Eat coffee butter", 2)];
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  selectedTask: Task;

  finishedEditing() {
    this.selectedTask = null; 
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
