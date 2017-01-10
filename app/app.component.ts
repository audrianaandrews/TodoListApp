import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { TaskListComponent  }  from './task-list.component';

@Component({
	selector: 'app',
	template: `
<task-list></task-list>
  `
})
export class AppComponent {
}
