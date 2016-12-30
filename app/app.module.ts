import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent, TaskComponent, TaskListComponent, TaskFormComponent  }  from './app.component';


@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		TaskComponent,
		TaskListComponent,
		TaskFormComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}