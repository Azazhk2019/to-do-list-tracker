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
