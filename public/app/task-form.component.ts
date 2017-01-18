import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {Http, Response, Request, RequestMethod} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Task } from './task';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'task-form',
	template: `
<div class="card card-block">
  <h2 class="card-title">Add A Task</h2>
    <form [formGroup]="taskForm" (ngSubmit)="addTaskToDB($event)">
  <div class="input-group">
	<label for="txtAddTask" class="sr-only">Add Task</label>
    <input type="text"
            id="txtAddTask"
           class="form-control" name="task"
           #task
    formControlName="taskText" >
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

			constructor(private http: Http,
			public fb: FormBuilder){}

	createTask(task: string) {
		this.taskCreated.emit(new Task(task));
        (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
	}

	public taskForm = this.fb.group({
    taskText: [""]
  });

addTaskToDB(event){
				let headers = new Headers({ 'Content-Type': 'application/json' });
				let options = new RequestOptions({ headers: headers });

				let formData = this.taskForm.value;
        //console.log(formData);
        return this.http.post('/add-task', JSON.stringify(formData), options).map(res => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
