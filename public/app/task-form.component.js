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
var forms_1 = require("@angular/forms");
var TaskFormComponent = (function () {
    function TaskFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.taskCreated = new core_1.EventEmitter();
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        /*createTask(task: string) {
            this.taskCreated.emit(new Task(task));
            (<HTMLInputElement>document.getElementById("txtAddTask")).value = "";
        }*/
        this.taskForm = this.fb.group({
            taskText: [""]
        });
    }
    TaskFormComponent.prototype.addTaskToDB = function (event, task) {
        this.taskCreated.emit(new task_1.Task(task));
        document.getElementById("txtAddTask").value = "";
        var formData = JSON.stringify(this.taskForm.value);
        //console.log(formData);
        return this.http.post('add-task', formData, { headers: this.headers });
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
        moduleId: module.id,
        selector: 'task-form',
        templateUrl: 'task-form.component.html',
        styleUrls: ['task-form.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], TaskFormComponent);
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map