import { createNewTask , displayTasks , myTasks, taskDate, taskDescription, taskPriority, taskTitle, taskNote, submitTaskBtn, createNewProjects, myProjects, displayProjects } from "./project";

// create projects

const firstProject = new createNewProjects('Clean up the room', myTasks);

myProjects.push(firstProject);

//create tasks

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important', '04/10/2024');
const secondTask = new createNewTask('Sweep the floor', 'clean under furniture with a broom', 'low priority', '04/10/2024');

myTasks.push(firstTask);
myTasks.push(secondTask);


displayProjects();

displayTasks();

///

submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    taskPriority.forEach(radio => {
        if (radio.checked) {
            const newTask = new createNewTask(taskTitle.value, taskDescription.value, radio.value, taskDate.value, taskNote.value);
            myTasks.push(newTask);
            displayTasks();
        };
    });
});





/*

//add new project

const addNewProjectsBtn = document.querySelector('#addNewProjectsBtn');
const newProject = document.querySelector('#newProject');

addNewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const project = new createNewProjects(newProject.value);
    myTasks.push(project);
    displayTasks();
})

*/

//const todosList = document.querySelector('#todosList')









