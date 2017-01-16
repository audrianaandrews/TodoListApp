import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form.component';
//import { HttpModule } from '@angular/http';
//import { Http, Headers, RequestOptions, Response } from 'angular2/http';

@Component({
	selector: 'task-list',
	template: `<div class="row">
      <div class="col-sm-12">
    <h1>Your Todo List</h1>
    <div class="task-container">
<task *ngFor="let t of tasks; let i = index;" [task]="t" (deleteTask)="deleteTask(i)"></task>
</div>
<hr>
<task-form (taskCreated)="addTask($event)"></task-form>
</div>
</div>
  `
})
export class TaskListComponent {
	tasks: Task[];

	constructor() {
		this.tasks = [];
	}
    //constructor (private http: Http) {}

	addTask(task) {
		this.tasks.unshift(task);
	}
  deleteTask(taskIndex) {
		this.tasks.splice(taskIndex, 1);
	}
}
