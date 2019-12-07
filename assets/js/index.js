'use strict';

const tasks = [];

const taskListElem = document.getElementById("taskList");
const inputTaskElem = document.getElementById("inputTask");
const createTaskButtonElem = document.getElementById("createTaskButton");
const checkIconContainerElem = document.getElementById("checkIconContainer");


checkIconContainerElem.addEventListener("click", onCheckIconContainerElemClick);
let flag = false;
function onCheckIconContainerElemClick(event) {
    flag = !flag;
    if (flag){
        createTaskButtonElem.style.display = "block";
        inputTaskElem.style.display = "block";
    } else {
        createTaskButtonElem.style.display = "none";
        inputTaskElem.style.display = "none";
    }
}

createTaskButtonElem.addEventListener("click", onCreateTaskButtonElemClick);

function onCreateTaskButtonElemClick(event) {

     const {value} = inputTaskElem;
     if (value){
        tasks.push(value);
        taskListElem.prepend(createTask({
            value: inputTaskElem.value[0].toUpperCase() + inputTaskElem.value.slice(1),
            id:tasks.length -1
        })); // разобрать как работает ошибка при отсутствии передачи параметра
        inputTaskElem.value = "";
     }

}


function createTask(task) {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("taskItem");
    listItemElem.setAttribute("id", task.id);
    listItemElem.appendChild(createLetterInTheCircleContainerElem(task));
    listItemElem.appendChild(createTaskAndDataWrapperElem(task));
    listItemElem.appendChild(createDeleteTaskImgElem(task));

    return listItemElem;
}

function createTaskAndDataWrapperElem(task){
    const taskAndDataWrapper = document.createElement("div");
    taskAndDataWrapper.classList.add("taskAndDataWrapper");
    taskAndDataWrapper.appendChild(createTaskTextParagraphElem(task));
    taskAndDataWrapper.appendChild(createTaskDateParagraphElem(task));
    return taskAndDataWrapper;
}

function createTaskTextParagraphElem(task) {
    const taskTextParagraph = document.createElement("p");
    taskTextParagraph.classList.add("taskText");
    taskTextParagraph.innerText = task.value;
    return taskTextParagraph;
}

function createTaskDateParagraphElem(task) {
    const taskDateParagraph = document.createElement("p");
    taskDateParagraph.classList.add("taskDate");
    taskDateParagraph.innerText = `Created on ${
        new Date().toLocaleDateString("en-US", {
            day:'2-digit',
            month:'2-digit',
            year: 'numeric'
        })}`;
    return taskDateParagraph;
}

function createDeleteTaskImgElem(task) {
    const deleteTaskImg = document.createElement("img");
    deleteTaskImg.setAttribute("src", "assets/img/icons/delete.png");
    deleteTaskImg.setAttribute("alt", "delete task");
    deleteTaskImg.setAttribute("data-taskid", task.id); // почему мы используем data- атрибут вместо того что б передать id в обработчик
    // deleteTaskImg.onclick = onListItemClickHandler(listItemElem);
    deleteTaskImg.addEventListener("click", onDeleteTaskImgHandler);
    return deleteTaskImg;

}

function onDeleteTaskImgHandler() {
    document.getElementById(this.dataset.taskid).remove();
}

function createLetterInTheCircleContainerElem(task){
    const letterInTheCircleContainer = document.createElement("div");
    letterInTheCircleContainer.classList.add("letterInTheCircle");
    letterInTheCircleContainer.appendChild(createLetterSpanElem(task));
    return letterInTheCircleContainer;
}

function createLetterSpanElem(task) {
    const letterSpanElem =  document.createElement("span");
    letterSpanElem.innerText = task.value[0];
    return letterSpanElem;
}