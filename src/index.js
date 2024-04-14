import { createNewTask , displayTasks , myTasks, taskDate, taskDescription, taskPriority, taskTitle, taskNote, tasksList, submitTaskBtn, taskProject } from "./project";

//create tasks

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important', '04/10/2024', 'do it everyday', 'Clean the House');
const secondTask = new createNewTask('Sweep the floor', 'clean under furniture with a broom', 'low priority', '04/10/2024','', 'Clean the House');

myTasks.push(firstTask);
myTasks.push(secondTask);

displayTasks();

submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    taskPriority.forEach(radio => {
        if (radio.checked) {
            const newTask = new createNewTask(taskTitle.value, taskDescription.value, radio.value, taskDate.value, taskNote.value, taskProject.value);
            myTasks.push(newTask);
            displayTasks();
        };
    });
});

//add new project

const projectsList = document.querySelector('#projectsList');

const addNewProjectsBtn = document.querySelector('#addNewProjectsBtn');
const newProject = document.querySelector('#newProject');
addNewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerHTML = `<p id="project"><div>${newProject.value}</div><button id="deleteProjectBtn">x</button></p>`
    projectsList.appendChild(p);
})








