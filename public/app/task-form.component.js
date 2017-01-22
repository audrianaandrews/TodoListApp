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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var forms_1 = require('@angular/forms');
var TaskFormComponent = (function () {
    function TaskFormComponent(fb, taskService) {
        this.fb = fb;
        this.taskService = taskService;
        this.taskCreated = new core_1.EventEmitter();
        this.taskForm = this.fb.group({
            taskText: [""]
        });
    }
    TaskFormComponent.prototype.addTaskToDB = function (event, task) {
        var _this = this;
        this.taskService.addTask(this.taskForm).subscribe(function (res) {
            _this.taskCreated.emit(new task_1.Task(res.latestTask));
            document.getElementById("txtAddTask").value = "";
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
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
            moduleId: module.id,
            selector: 'task-form',
            templateUrl: 'task-form.component.html',
            styleUrls: ['task-form.component.css'],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, task_service_1.TaskService])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
