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
var http_1 = require('@angular/http');
var task_1 = require('./task');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Rx_1 = require('rxjs/Rx');
var forms_1 = require('@angular/forms');
var TaskFormComponent = (function () {
    function TaskFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.taskCreated = new core_1.EventEmitter();
        /*createTask(task: string) {
            this.taskCreated.emit(new Task(task));
            (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
        }*/
        this.taskForm = this.fb.group({
            taskText: [""]
        });
    }
    TaskFormComponent.prototype.addTaskToDB = function (event, task) {
        var formData = JSON.stringify(this.taskForm.value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        //console.log(formData);
        return this.http.post('add-task', formData, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); })
            .subscribe(function (res) {
            /*this.taskCreated.emit(new Task(task));
            (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";*/
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
            styleUrls: ['task-form.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http, forms_1.FormBuilder])
    ], TaskFormComponent);
    return TaskFormComponent;
}());
exports.TaskFormComponent = TaskFormComponent;
