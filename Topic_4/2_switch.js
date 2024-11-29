var task;
(function (task) {
    task[task["first"] = 0] = "first";
    task[task["second"] = 1] = "second";
    task[task["third"] = 2] = "third";
})(task || (task = {}));
var Task = task.second;
function getTask() {
    switch (Task) {
        case task.first:
            console.log("first task");
            break;
        case task.second:
            console.log("Second task");
            break;
        case task.third:
            console.log("third task");
            break;
        default:
            console.log("Invalid task");
    }
}
getTask();
