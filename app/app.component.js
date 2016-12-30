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
var Task = (function () {
    function Task(task) {
        this.task = task;
    }
    return Task;
}());
exports.Task = Task;
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskCreated = new core_1.EventEmitter();
    }
    TaskFormComponent.prototype.createTask = function (task) {
        this.taskCreated.emit(new Task(task));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskFormComponent.prototype, "taskCreated", void 0);
    TaskFormComponent = __decorate([
        core_1.Component({
            selector: 'task-form',
            template: "\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">Create a task</h4>\n  <div class=\"form-group\">\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Enter a new task\"\n           #task>\n  </div>\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"createTask(task.value)\">Add a new task\n  </button>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
var TaskComponent = (function () {
    function TaskComponent() {
        this.deleteTask = new core_1.EventEmitter();
    }
    TaskComponent.prototype.deleteClicked = function () {
        this.deleteTask.next(this.task);
    };
    __decorate([
        core_1.Input('task'), 
        __metadata('design:type', Task)
    ], TaskComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "deleteTask", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'task',
            template: "\n  <div class=\"row\">\n    <div class=\"col-xs-10\"><p>{{data.task}}</p></div>\n  <div class=\"col-xs-2\"><button (click)=\"deleteClicked()\" aria-label=\"Delete\"><span aria-hidden=\"true\">&times;</span></button></div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.tasks = [];
    }
    TaskListComponent.prototype.addTask = function (task) {
        this.tasks.unshift(task);
    };
    TaskListComponent.prototype.deleteTask = function (taskIndex) {
        this.tasks.splice(taskIndex, 1);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "<div class=\"row\">\n      <div class=\"col-sm-12\">\n<task-form (taskCreated)=\"addTask($event)\"></task-form>\n<div class=\"card card-block\">\n<h5>Todo List</h5>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n<task *ngFor=\"let t of tasks; let i = index;\" [task]=\"t\" (deleteTask)=\"deleteTask(i)\"></task>\n</div>\n</div>\n</div>\n</div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<task-list></task-list>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map