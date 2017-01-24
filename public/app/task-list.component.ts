import {Component, OnInit,NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form.component';
import {TaskService} from './task.service';
//import { HttpModule } from '@angular/http';
//import { Http, Headers, RequestOptions, Response } from 'angular2/http';

@Component({
	//makes it so angular doesn't look for related files in root folder
	moduleId: module.id,
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
	styleUrls: [ 'task-list.component.css' ],
	providers: [TaskService]
})
export class TaskListComponent  implements OnInit{
	tasks: Task[];
	@Output() taskCreated = new EventEmitter<Task>();
	@Input() task: Task;

	constructor(private taskService: TaskService) {
		this.tasks = [];
	}
    //constructor (private http: Http) {}

	addTask(task) {
		this.tasks.push(task);
	}

	editTask(taskIndex,taskText) {
		var indexString = taskIndex.toString();
		//console.log(this.tasks[taskIndex]);
		//.toggle();
		this.taskService.updateTask(indexString, taskText.task)
											.subscribe(
													res => {
													},
													 err => {
															 // Log errors if any
															 console.log(err);
													 });
	}

  deleteTask(taskIndex) {
		//console.log(taskIndex);
		var indexString = taskIndex.toString();
		this.taskService.removeTask(indexString)
											.subscribe(
													res => {
														this.tasks.splice(taskIndex, 1);
													},
													 err => {
															 // Log errors if any
															 console.log(err);
													 });
		//this.tasks.splice(taskIndex, 1);
	}
	ngOnInit() {
            this.loadTasks();
    }

    loadTasks() {
         this.taskService.getTasks()
                           .subscribe(
                               res => {
																 var t;
																 for(t in res.userTasks){
																	 var newTask = new Task(res.userTasks[t]);
																	 this.tasks.push(newTask);
																 }
															 },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

}
