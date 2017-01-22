import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
import {TaskService} from './task.service';

@Component({
	moduleId: module.id,
	selector: 'task',
	templateUrl: 'task.component.html',
	styleUrls: [ 'task.component.css' ],
	providers: [TaskService]
})
export class TaskComponent {
	@Input('task') data: Task;
  @Output() deleteTask = new EventEmitter<Task>();
	@Output() editTask = new EventEmitter<Task>();
	constructor(
		private taskService: TaskService){}
  task: Task[]

	editClicked(task) {
			this.editTask.next(this.task);
			task.toggle();
  }

  deleteClicked() {
		//console.log(this.task);
    this.deleteTask.next(this.task);
  }
}
