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
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        this.deleteTask = new core_1.EventEmitter();
        this.editTask = new core_1.EventEmitter();
    }
    TaskComponent.prototype.editClicked = function (task) {
        this.editTask.next(this.task);
        task.toggle();
    };
    TaskComponent.prototype.deleteClicked = function () {
        //console.log(this.task);
        this.deleteTask.next(this.task);
    };
    __decorate([
        core_1.Input('task'), 
        __metadata('design:type', task_1.Task)
    ], TaskComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "deleteTask", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "editTask", void 0);
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task',
            templateUrl: 'task.component.html',
            styleUrls: ['task.component.css'],
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
