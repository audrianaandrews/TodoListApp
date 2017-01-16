import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {Http, Response, Request, RequestMethod} from '@angular/http';

import { Task } from './task';

@Component({
	selector: 'task-form',
	template: `
<div class="card card-block">
  <h2 class="card-title">Add A Task</h2>
    <form #form="ngForm" (ngSubmit)="addTaskToDB(form.value)"  action="/add-task" method="POST">
  <div class="input-group">

    <input type="text"
            id="txtAddTask"
           class="form-control"
name='task'
           #task
    ngModel >
    <span class="input-group-btn">
  <button type="submit"
          class="btn btn-primary"
(click)="createTask(task.value)"
          ><span class="glyphicon glyphicon-ok"></span>
  </button></span></div>
    </form>
</div>
  `
})
export class TaskFormComponent {
	@Output() taskCreated = new EventEmitter<Task>();
    @Input() task: Task;
    constructor (private http: Http) {}
    errorMessage: string;

	createTask(task: string) {
		this.taskCreated.emit(new Task(task));
        (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
	}
    
addTaskToDB(form: any){
        //console.log(form.task);
        return this.http.post('/add-task', {'task': form.task});
    }
}
