"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { HttpModule } from '@angular/http';
//import { Http, Headers, RequestOptions, Response } from 'angular2/http';
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.tasks = [];
    }
    //constructor (private http: Http) {}
    TaskListComponent.prototype.addTask = function (task) {
        this.tasks.unshift(task);
    };
    TaskListComponent.prototype.deleteTask = function (taskIndex) {
        this.tasks.splice(taskIndex, 1);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "<div class=\"row\">\n      <div class=\"col-sm-12\">\n    <h1>Your Todo List</h1>\n    <div class=\"task-container\">\n<task *ngFor=\"let t of tasks; let i = index;\" [task]=\"t\" (deleteTask)=\"deleteTask(i)\"></task>\n</div>\n<hr>\n<task-form (taskCreated)=\"addTask($event)\"></task-form>\n</div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
