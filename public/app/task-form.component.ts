import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
import {TaskService} from './task.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'task-form',
	templateUrl: 'task-form.component.html',
	styleUrls: [ 'task-form.component.css' ],
	providers: [TaskService]
})
export class TaskFormComponent {
	@Output() taskCreated = new EventEmitter<Task>();
  @Input() task: Task;

	constructor(
		public fb: FormBuilder,
		private taskService: TaskService){}

	public taskForm = this.fb.group({
    taskText: [""]
  });

addTaskToDB(event, task: string) {
				this.taskService.addTask(this.taskForm).subscribe(
						res => {
							this.taskCreated.emit(new Task(res.latestTask));
							(<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
						},
						 err => {
								 // Log errors if any
								 console.log(err);
						 });
    }
}
