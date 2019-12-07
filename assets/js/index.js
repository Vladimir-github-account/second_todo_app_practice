'use strict';

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
        taskListElem.prepend(createTask({value: inputTaskElem.value})); // разобрать как работает ошибка при отсутствии передачи параметра
         inputTaskElem.value = "";
     }

}


function createTask(task) {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("taskItem");
    listItemElem.appendChild(createLetterInTheCircleContainerElem(task));
    listItemElem.appendChild(createTaskAndDataWrapperElem(task));
    return listItemElem;
}

function createTaskAndDataWrapperElem(task){
    const taskAndDataWrapper = document.createElement("div");
    taskAndDataWrapper.classList.add("taskAndDataWrapper");
    taskAndDataWrapper.appendChild(createTaskTextParagraphElem(task));
    return taskAndDataWrapper;
}

function createTaskTextParagraphElem(task) {
    const taskTextParagraph = document.createElement("p");
    taskTextParagraph.classList.add("taskTextParagraph");
    taskTextParagraph.innerText = task.value;
    return taskTextParagraph;
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