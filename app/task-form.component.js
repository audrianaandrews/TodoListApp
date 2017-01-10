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
var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.taskCreated = new core_1.EventEmitter();
    }
    TaskFormComponent.prototype.createTask = function (task) {
        this.taskCreated.emit(new task_1.Task(task));
        document.getElementById("txtAddTask").value = "";
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskFormComponent.prototype, "taskCreated", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskFormComponent.prototype, "task", void 0);
    TaskFormComponent = __decorate([
        core_1.Component({
            selector: 'task-form',
            template: "\n<div class=\"card card-block\">\n  <h2 class=\"card-title\">Add A Task</h2>\n  <div class=\"input-group\">\n\n    <input type=\"text\"\n            id=\"txtAddTask\"\n           class=\"form-control\"\n           #task>\n    <span class=\"input-group-btn\">\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"createTask(task.value)\"><span class=\"glyphicon glyphicon-ok\"></span>\n  </button></span></div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map