import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';

@Component({
	moduleId: module.id,
	selector: 'task',
	templateUrl: 'task.component.html',
	styleUrls: [ 'task.component.css' ]
})
export class TaskComponent {
	@Input('task') data: Task;
    @Output() deleteTask = new EventEmitter<Task>();
    task: Task[]
      deleteClicked() {
        this.deleteTask.next(this.task);
      }
}
