import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form.component';
//import { HttpModule } from '@angular/http';
//import { Http, Headers, RequestOptions, Response } from 'angular2/http';

@Component({
	//makes it so angular doesn't look for related files in root folder
	moduleId: module.id,
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
	styleUrls: [ 'task-list.component.css' ]
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
