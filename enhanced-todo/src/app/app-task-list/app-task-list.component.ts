import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './app-task-list.component.html',
  styleUrls: ['./app-task-list.component.css']
})
export class AppTaskListComponent {

  @Input() childTaskList: Task[];
  @Output() assignCurrentTask = new EventEmitter();

  filterByCompleteness: string = "incompleteTasks";

  setCurrentTask(myTask: Task){
    this.assignCurrentTask.emit(myTask);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleComplete(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.complete = setCompleteness;
  }

}
