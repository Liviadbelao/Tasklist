/* class TaskList {
    constructor(doing, status, id) {
        this.doing = doing;
        this.status = false;
        this.id = id;
    }
  

} */



/* class Lists {
    constructor() {
        this.arrList = [];

    }

    addArr(things) {
        this.arrList.push(things)
    }

    removeTask(index) {
        posts.splice(index, 1);
        addTaskList();
    }

    checkedTask(status){
        status = false;
        if (status == true) {
            document.getElementById("green").style.backgroundColor = "green";
            status = false;
        } else {
            document.getElementById('green').style.backgroundColor = "#2a2a2a";
            status = true;
        }
    }

    noexib(){
        if(this.arrList == ''){
            document.getElementById("p1").innerHTML = "Insira um título para sua tarefa!"
        }
    }
} */

/* function addTaskList() {
    const task = document.getElementById("InputAdd").value;
    const list = new TaskList(task);
   

    console.log(list)
    document.getElementById('result').innerHTML += `<div id="results"><p id="list1">${list.doing}</p><button id="green" onclick="exib()"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f5f5f5}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button> <button onclick="remove()" id="clean"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f7f9fd}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg><buton</div>`;
    /*   list.getEmpty(); 
    document.getElementById("InputAdd").value = '';
    const list1 = new Lists(task);
    list1.noexib()
    list1.checkedTask()
}




function exib(){
    const list1 = new Lists(task);

    list1.checkedTask()
}



function remove() {
    const task = document.getElementById("InputAdd").value;
    const arrLists = new Lists(task);
    arrLists.getArr(task);
    console.log(arrLists)
    document.getElementById("results").style.display = "none";
    arrLists.removeTask();
}
 */
/* class TaskList {
    constructor(doing, status, id) {
        this.doing = doing;
        this.status = false;
        this.id = id;
    }
  

}
//class metodos e array
class Lists {
    constructor() {
        this.arrList = [];

    }

    addArr(things) {
        this.arrList.push(things)
    }

    removeTask(index) {
        posts.splice(index, 1);
        
    }

    checkedTask(status){
        status = false;
        if (status == true) {
            document.getElementById("green").style.backgroundColor = "green";
            status = false;
        } else {
            document.getElementById('green').style.backgroundColor = "#2a2a2a";
            status = true;
        }
    }

    noexib(){
        if(this.arrList == ''){
            document.getElementById("p1").innerHTML = "Insira um título para sua tarefa!"
        }
    }
}
//functions para adicionar
function addTaskList(){
    const task = document.getElementById("InputAdd").value;
    const list = new TaskList(task)
    document.getElementById('result').innerHTML += `<div id="results"><p id="list1">${list.doing}</p><button id="green" onclick="exib()"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f5f5f5}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button> <button onclick="remove()" id="clean"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f7f9fd}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg><buton</div>`;
    document.getElementById("InputAdd").value = '';

    
}
function ids(){
    return Math.floor(Math.random() * 3000)
} */
let flag = -1;
class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }


    addTask(param) {
        this.tasks.push(param);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    markTask(id) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                task.status = !task.status;
            }
        });
        document.getElementById(id + "-button").classList.toggle("taskDone");
    }

    editTask(id){
         
    }
}

const veryBigList = new TaskList();

function createTask() {
    const taskTitle = document.getElementById("result").value;

    const task = new Task(generateId(), taskTitle, false);

    veryBigList.addTask(task);
    document.getElementById("InputAdd").value = '';
    console.log(veryBigList);
    renderTasks();
}

function generateId() {
    return Math.floor(Math.random() * 9999);
}

function renderTasks() {
    let element = "";

    veryBigList.tasks.forEach(task => {
        element += ` <div id="${task.id}" clas="results">
        <p class="list1"id="${task.id}--title">${task.title}</p>
        <div>
        <button id="${task.id}--button" class="green"
            onclick="doneTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f5f5f5}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </button>
            <button class="clean" onclick="deleteTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
            </div>
            </div>`
    });

    document.getElementById("result").innerHTML = element;
}

function deleteTask(id) {
    veryBigList.removeTask(id);
    renderTasks();
}

function doneTask(id) {
    veryBigList.markTask(id);
}