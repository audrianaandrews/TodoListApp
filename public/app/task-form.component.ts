import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
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

	/*createTask(task: string) {
		this.taskCreated.emit(new Task(task));
        (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
	}*/

	public taskForm = this.fb.group({
    taskText: [""]
  });

addTaskToDB(event, task: string) {
				let formData = JSON.stringify(this.taskForm.value);
				let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        //console.log(formData);

        return this.http.post('add-task', formData, options)
				.map((res:Response) => res.json())
				.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
				.subscribe(res => {
					/*this.taskCreated.emit(new Task(task));
					(<HTMLInputElement>document.getElementById("txtAddTask")).value = "";*/
				},
	      err => {
	          // Log errors if any
	          console.log(err);
	      });
    }
}
