import { createNewProjects } from "./project";
import { displaySideBar } from "./project";
import { myProjects } from "./project";

const firstProject = new createNewProjects('Work Out');
const secondProject = new createNewProjects('Clean the house');
const thirdProject = new createNewProjects('Make the bed');

myProjects.push(firstProject);
myProjects.push(secondProject);
myProjects.push(thirdProject);

const addNewProjectsBtn = document.querySelector('#addNewProjectsBtn');
const newProject = document.querySelector('#newProject');

displaySideBar();

addNewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const project = new createNewProjects(newProject.value);
    myProjects.push(project);
    displaySideBar();
})








