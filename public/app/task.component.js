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
var TaskComponent = (function () {
    function TaskComponent() {
        this.deleteTask = new core_1.EventEmitter();
    }
    TaskComponent.prototype.deleteClicked = function () {
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
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'task',
            template: "\n  <div class=\"row\">\n    <div class=\"col-xs-7 col-sm-10\"><p [hidden]=\"data.textHidden\">{{data.task}}</p><input type=\"text\" [hidden]=\"data.inputHidden\" [(ngModel)]=\"data.task\"></div>\n\t\t<div class=\"col-xs-5 col-sm-2\">\n\t\t<button id=\"deleteButton\"(click)=\"deleteClicked()\" aria-label=\"Delete\"><span aria-hidden=\"true\">&times;</span></button><button (click)=\"data.toggle()\" aria-label=\"Edit\" [hidden]=\"data.textHidden\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span></button>\n<button (click)=\"data.toggle()\" aria-label=\"Edit\" [hidden]=\"data.inputHidden\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n\t\t</div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
