import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';

export class Task {
	public task: string;

	constructor(task: string) {
		this.task = task;
	}
}


@Component({
	selector: 'task-form',
	template: `
<div class="card card-block">
  <h4 class="card-title">Create a task</h4>
  <div class="form-group">
    <input type="text"
           class="form-control"
           placeholder="Enter a new task"
           #task>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="createTask(task.value)">Add a new task
  </button>
</div>
  `
})
export class TaskFormComponent {
	@Output() taskCreated = new EventEmitter<Task>();

	createTask(task: string) {
		this.taskCreated.emit(new Task(task));
	}
}


@Component({
	selector: 'task',
	template: `
  <div class="row">
    <div class="col-xs-10"><p>{{data.task}}</p></div>
  <div class="col-xs-2"><button (click)="deleteClicked()" aria-label="Delete"><span aria-hidden="true">&times;</span></button></div>
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

@Component({
	selector: 'task-list',
	template: `<div class="row">
      <div class="col-sm-12">
<task-form (taskCreated)="addTask($event)"></task-form>
<div class="card card-block">
<h5>Todo List</h5>
    <div class="row">
      <div class="col-sm-12">
<task *ngFor="let t of tasks; let i = index;" [task]="t" (deleteTask)="deleteTask(i)"></task>
</div>
</div>
</div>
</div>
</div>
  `
})
export class TaskListComponent {
	tasks: Task[];

	constructor() {
		this.tasks = [];
	}

	addTask(task) {
		this.tasks.unshift(task);
	}
    deleteTask(taskIndex) {
		this.tasks.splice(taskIndex, 1);
	}
}


@Component({
	selector: 'app',
	template: `
<task-list></task-list>
  `
})
export class AppComponent {
}

