import { createNewTask , displayTasks , myTasks} from "./project";

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important');
const secondTask = new createNewTask('Sweep the floor', 'clean under furniture with a broom', 'low priority');


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









