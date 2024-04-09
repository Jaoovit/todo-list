import { createNewProjects } from "./project";
import { displaySideBar } from "./project";
import { myProjects } from "./project";

const firstProject = new createNewProjects('Work Out');
const secondProject = new createNewProjects('Clean the house');
const thirdProject = new createNewProjects('Make the bed');

myProjects.push(firstProject);
myProjects.push(secondProject);
myProjects.push(thirdProject);

displaySideBar();

