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
var core_1 = require("@angular/core");
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
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        //makes it so angular doesn't look for related files in root folder
        moduleId: module.id,
        selector: 'task-list',
        templateUrl: 'task-list.component.html',
        styleUrls: ['task-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map