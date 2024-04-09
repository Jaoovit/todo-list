import { createNewProjects } from "./project";

let myPojects = [];

const firstProjects = new createNewProjects('Work Out');
const secondProject = new createNewProjects('Clean up the house');

myPojects.push(firstProjects);
myPojects.push(secondProject);

console.log(myPojects);
