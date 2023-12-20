// 3 skaidre

const toDoListDiv = document.querySelector("#toDoList");
const toDoListForm = document.querySelector("#toDoForm");
const addTaskButton = document.querySelector("#addTask");
const toDoListTable = document.querySelector("#table");

const tikrintiLs = localStorage.getItem("toDoList");
const toDoList = tikrintiLs === null ? [] : JSON.parse(tikrintiLs);
console.log(toDoList);


const taskList = document.querySelector("#taskList");
taskList.innerHTML = "";
toDoList.forEach(element => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${element.task}</td>
    <td>${element.priority}</td>`;

    taskList.appendChild(newRow)
});


addTaskButton.addEventListener('click', (event)=>{
    event.preventDefault();
    
    const listTaskInput = document.querySelector("#task");
    const listSelect = document.querySelector("#priority");

})



