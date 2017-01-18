import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent  }  from './app.component';
import { TaskFormComponent } from './task-form.component';
import { TaskListComponent  }  from './task-list.component';
import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [BrowserModule, HttpModule, ReactiveFormsModule, FormsModule],
	declarations: [
		AppComponent,
		TaskListComponent,
		TaskComponent,
		TaskFormComponent
	],
    providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
