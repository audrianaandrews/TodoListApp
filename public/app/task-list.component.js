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
var task_1 = require('./task');
var task_service_1 = require('./task.service');
//import { HttpModule } from '@angular/http';
//import { Http, Headers, RequestOptions, Response } from 'angular2/http';
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.taskCreated = new core_1.EventEmitter();
        this.tasks = [];
    }
    //constructor (private http: Http) {}
    TaskListComponent.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskListComponent.prototype.editTask = function (taskIndex, taskText) {
        var indexString = taskIndex.toString();
        //console.log(this.tasks[taskIndex]);
        //.toggle();
        this.taskService.updateTask(indexString, taskText.task)
            .subscribe(function (res) {
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    TaskListComponent.prototype.deleteTask = function (taskIndex) {
        var _this = this;
        console.log(taskIndex);
        var indexString = taskIndex.toString();
        this.taskService.removeTask(indexString)
            .subscribe(function (res) {
            _this.tasks.splice(taskIndex, 1);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
        //this.tasks.splice(taskIndex, 1);
    };
    TaskListComponent.prototype.ngOnInit = function () {
        this.loadTasks();
    };
    TaskListComponent.prototype.loadTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (res) {
            var t;
            for (t in res.userTasks) {
                var newTask = new task_1.Task(res.userTasks[t]);
                _this.tasks.push(newTask);
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "taskCreated", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskListComponent.prototype, "task", void 0);
    TaskListComponent = __decorate([
        core_1.Component({
            //makes it so angular doesn't look for related files in root folder
            moduleId: module.id,
            selector: 'task-list',
            templateUrl: 'task-list.component.html',
            styleUrls: ['task-list.component.css'],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
