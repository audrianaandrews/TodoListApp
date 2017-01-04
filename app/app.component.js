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
var Task = (function () {
    function Task(task) {
        this.task = task;
        this.inputHidden = true;
        this.textHidden = false;
    }
    Task.prototype.toggle = function () {
        this.textHidden = !this.textHidden;
        this.inputHidden = !this.inputHidden;
    };
    return Task;
}());
exports.Task = Task;
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskCreated = new core_1.EventEmitter();
    }
    TaskFormComponent.prototype.createTask = function (task) {
        this.taskCreated.emit(new Task(task));
        document.getElementById("txtAddTask").value = "";
    };
    return TaskFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskFormComponent.prototype, "taskCreated", void 0);
TaskFormComponent = __decorate([
    core_1.Component({
        selector: 'task-form',
        template: "\n<div class=\"card card-block\">\n  <h2 class=\"card-title\">Add A Task</h2>\n  <div class=\"input-group\">\n\n    <input type=\"text\"\n            id=\"txtAddTask\"\n           class=\"form-control\"\n           #task>\n    <span class=\"input-group-btn\">\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"createTask(task.value)\"><span class=\"glyphicon glyphicon-ok\"></span>\n  </button></span></div>\n</div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TaskFormComponent);
exports.TaskFormComponent = TaskFormComponent;
var TaskComponent = (function () {
    function TaskComponent() {
        this.deleteTask = new core_1.EventEmitter();
    }
    TaskComponent.prototype.deleteClicked = function () {
        this.deleteTask.next(this.task);
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input('task'),
    __metadata("design:type", Task)
], TaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskComponent.prototype, "deleteTask", void 0);
TaskComponent = __decorate([
    core_1.Component({
        selector: 'task',
        template: "\n  <div class=\"row\">\n    <div class=\"col-xs-10\"><p [hidden]=\"data.textHidden\">{{data.task}}</p><input type=\"text\" [hidden]=\"data.inputHidden\" [(ngModel)]=\"data.task\"></div>\n\t\t<div class=\"col-xs-2\">\n\t\t<button id=\"deleteButton\"(click)=\"deleteClicked()\" aria-label=\"Delete\"><span aria-hidden=\"true\">&times;</span></button><button (click)=\"data.toggle()\" aria-label=\"Edit\" [hidden]=\"data.textHidden\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span></button>\n<button (click)=\"data.toggle()\" aria-label=\"Edit\" [hidden]=\"data.inputHidden\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n\n\t\t</div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TaskComponent);
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
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'task-list',
        template: "<div class=\"row\">\n      <div class=\"col-sm-12\">\n    <h1>Your Todo List</h1>\n    <div class=\"task-container\">\n<task *ngFor=\"let t of tasks; let i = index;\" [task]=\"t\" (deleteTask)=\"deleteTask(i)\"></task>\n</div>\n<hr>\n<task-form (taskCreated)=\"addTask($event)\"></task-form>\n</div>\n</div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n<task-list></task-list>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map