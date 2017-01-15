"use strict";
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
//# sourceMappingURL=task.js.map