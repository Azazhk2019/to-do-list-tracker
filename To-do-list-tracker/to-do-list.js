let todoList = [];

function addTasks(taskname){
    let task = {task: taskname, done:false}
    todoList.push(task)
}

function showTasks(){
    todoList.forEach((task,index)=>{
        console.log(`${index+1}: ${task.task}  ${task.done ? "✅" : "❌"}`)
    })
}

function markDone(index){
    if (index < 1 || index > todoList.length){
        console.log(`Invalid task number`)
    }else{
        todoList[index -1].done = true
    }
    
}

function removeTask(index){
    if (index < 1 || index > todoList.length){
        console.log(`Invalid task number`)
    }else{
        todoList.splice(index -1,1)
    }
    
}

function markUndone(index){
    if (index < 1 || index > todoList.length){
        console.log(`Invalid task number`)
    }else{
         todoList[index-1].done = false
    }
   
}


/*
💡 Suggestions for Next Steps:
Edit a task name
Add a function like editTask(index, newTaskName) to change a task's name.

Clear all tasks
Add a clearAll() function to empty the list.

Save and load tasks (optional)
Use browser localStorage to persist your data (you’ll need DOM/HTML for this).

Group completed & incomplete tasks when showing
You could split the list into “To Do” and “Done” in showTasks().

Add timestamps (optional)
Store createdAt: new Date() in each task for logging.
*/