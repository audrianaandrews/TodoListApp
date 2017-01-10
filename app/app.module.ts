import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent  }  from './app.component';
import { TaskFormComponent } from './task-form.component';
import { TaskListComponent  }  from './task-list.component';
import { TaskComponent } from './task.component';

@NgModule({
	imports: [BrowserModule,
	        FormsModule],
	declarations: [
		AppComponent,
		TaskListComponent,
		TaskComponent,
		TaskFormComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
