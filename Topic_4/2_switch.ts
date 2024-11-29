enum task {
    first,
    second,
    third
}


let Task:task = task.second;
function getTask(){
    switch(Task){
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
getTask()