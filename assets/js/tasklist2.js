//inciando código

let flag = -1;

//primeira class vai conter as informções necessárias para as lógicas
class TaskList {
    constructor(title, id, status){
        this.title = title;
        this.id = id;
        this.status = status;
    }
}

//segunda class será nosso array
class ArrList{
    constructor(){
        this.tasks = [];
    }
//se estiver vazio

    //armazenando no array
    addTask(task){
        this.tasks.push(task)
    }

    //marcando o botão
    markTask(id) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                task.status == !task.status;
                document.getElementById(id + '-button').classList.toggle('taskDone');
            }
        });
        
    }

    //removendo
    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    //favoritar botão
    favoriteTask2(id){
        let star = false;
        if(task.id == star){
             task.id == !star;
        }
        document.getElementById('favoriteStar').classList.toggle('taskStar');
    }
     
}

//chamando instância
veryBigList = new ArrList();


function createList(){
    const valor = document.getElementById('InputAdd').value;
    if(valor == ''){
        document.getElementById("test").innerHTML="Seu campo está vazio"
    }else{
    
    if (flag > 0) {

        taskEdit = '';

        veryBigList.tasks.forEach(task => {
            if (task.id == flag) {
                taskEdit = task;
            }
        });

        taskEdit.title = valor;
        flag = -1;

    } else {
        const task = new TaskList(valor, generateId(), false);
       veryBigList.addTask(task);
    }
    renderTasks();
    clenField();
    document.getElementById("test").innerHTML=""
}
}


//dando valor para os ids
function generateId() {
    return Math.floor(Math.random() * 9999);
}


//trazendo pro html
function renderTasks() {
    let element = "";

    veryBigList.tasks.forEach(task => {
        element += ` <div class="things">
        <span class="task"id="${task.id}-title">${task.title}</span>
         <div id="botoes">
         <button id="${task.id}-button" 
             onclick="doneTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></i>
        </button>
        <button class="edit" onclick="editTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></button>
        <button class="remover" onclick="deleteTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
        <button class="favorite" id="favoriteStar" onclick="favoriteTask(${task.id})"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fcfcfc}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></button>
        </div>
        
        </div>`;
    });
    
    
//exibiu o element
document.getElementById("result").innerHTML = element;


}

//treco do verdinho
function doneTask(id) {
    veryBigList.markTask(id);
}


//chamando o de remover
function deleteTask(id) {
    veryBigList.removeTask(id);
    renderTasks();
}


//fazendo o edit
function editTask(id){

    let taskEdit = ''
    flag = id

    veryBigList.tasks.forEach(task => {
        if (task.id == id) {
            taskEdit = task
        }
    });

    document.getElementById('InputAdd').value = taskEdit.title
       

}


//limpando o input
function clenField(){
    document.getElementById("InputAdd").value = "";
}