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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var task_1 = require("./task");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var Rx_1 = require("rxjs/Rx");
var forms_1 = require("@angular/forms");
var TaskFormComponent = (function () {
    function TaskFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.taskCreated = new core_1.EventEmitter();
        this.taskForm = this.fb.group({
            taskText: [""]
        });
    }
    TaskFormComponent.prototype.createTask = function (task) {
        this.taskCreated.emit(new task_1.Task(task));
        document.getElementById("txtAddTask").value = "";
    };
    TaskFormComponent.prototype.addTaskToDB = function (event) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var formData = this.taskForm.value;
        //console.log(formData);
        return this.http.post('/add-task', JSON.stringify(formData), options).map(function (res) { return res.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return TaskFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskFormComponent.prototype, "taskCreated", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], TaskFormComponent.prototype, "task", void 0);
TaskFormComponent = __decorate([
    core_1.Component({
        selector: 'task-form',
        template: "\n<div class=\"card card-block\">\n  <h2 class=\"card-title\">Add A Task</h2>\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"addTaskToDB($event)\" action=\"/add-task\" method=\"POST\">\n  <div class=\"input-group\">\n\t<label for=\"txtAddTask\" class=\"sr-only\">Add Task</label>\n    <input type=\"text\"\n            id=\"txtAddTask\"\n           class=\"form-control\" name=\"task\"\n           #task\n    formControlName=\"taskText\" >\n    <span class=\"input-group-btn\">\n  <button type=\"submit\"\n          class=\"btn btn-primary\"\n(click)=\"createTask(task.value)\"\n          ><span class=\"glyphicon glyphicon-ok\"></span>\n  </button></span></div>\n    </form>\n</div>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http,
        forms_1.FormBuilder])
], TaskFormComponent);
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map