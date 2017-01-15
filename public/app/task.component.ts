import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';

@Component({
	selector: 'task',
	template: `
  <div class="row">
    <div class="col-xs-7 col-sm-10"><p [hidden]="data.textHidden">{{data.task}}</p><input type="text" [hidden]="data.inputHidden" [(ngModel)]="data.task"></div>
		<div class="col-xs-5 col-sm-2">
		<button id="deleteButton"(click)="deleteClicked()" aria-label="Delete"><span aria-hidden="true">&times;</span></button><button (click)="data.toggle()" aria-label="Edit" [hidden]="data.textHidden"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
<button (click)="data.toggle()" aria-label="Edit" [hidden]="data.inputHidden"><span class="glyphicon glyphicon-ok"></span></button>
		</div>
  </div>
  `
})
export class TaskComponent {
	@Input('task') data: Task;
    @Output() deleteTask = new EventEmitter<Task>();
task: Task[]
      deleteClicked() {
        this.deleteTask.next(this.task);
      }
}
