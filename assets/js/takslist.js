class TaskList{
    constructor(doing){
        this.doing = document.getElementById("InputAdd").value;
    }

}

function addTaskList(){
    const list = new TaskList();
    console.log(list)
}