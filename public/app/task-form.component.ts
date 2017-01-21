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
	moduleId: module.id,
	selector: 'task-form',
	templateUrl: 'task-form.component.html',
	styleUrls: [ 'task-form.component.css' ]
})
export class TaskFormComponent {
	@Output() taskCreated = new EventEmitter<Task>();
    @Input() task: Task;

			constructor(private http: Http,public fb: FormBuilder){}
			private headers = new Headers({'Content-Type': 'application/json'});
	/*createTask(task: string) {
		this.taskCreated.emit(new Task(task));
        (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
	}*/

	public taskForm = this.fb.group({
    taskText: [""]
  });

addTaskToDB(event, task: string){
				this.taskCreated.emit(new Task(task));
				(<HTMLInputElement>document.getElementById("txtAddTask")).value = "";

				let formData = JSON.stringify(this.taskForm.value);
        //console.log(formData);

        return this.http.post('add-task', formData, {headers: this.headers});
    }
}
