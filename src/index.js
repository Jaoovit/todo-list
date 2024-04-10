import { createNewTask , displayTasks , myTasks} from "./project";

const firstTask = new createNewTask('Work Out');
const secondTask = new createNewTask('Clean the house');


myTasks.push(firstTask);
myTasks.push(secondTask);

displayTasks();

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









