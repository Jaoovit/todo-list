import { createNewTask , displayTasks , myTasks, taskDate, taskDescription, taskPriority, taskTitle, taskNote, tasksList, submitTaskBtn, taskProject, createNewProject, myProjects, projectName } from "./project";

//create tasks

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important', '04/10/2024', 'do it everyday', 'Clean the House');
const secondTask = new createNewTask('Sweep the floor', 'clean under mat with a broom', 'low priority', '04/10/2024','', 'Wash the Car');

myTasks.push(firstTask);
myTasks.push(secondTask);

submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    taskPriority.forEach(radio => {
        if (radio.checked) {
            const newTask = new createNewTask(taskTitle.value, taskDescription.value, radio.value, taskDate.value, taskNote.value, taskProject.value);
            myTasks.push(newTask);
            console.log(myTasks);
        };
    });
});

//add new project

const projectsList = document.querySelector('#projectsList');

const addNewProjectsBtn = document.querySelector('#addNewProjectsBtn');
const newProject = document.querySelector('#newProject');
addNewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const anotherProject = new createNewProject(newProject.value);
    myProjects.push(anotherProject);
    console.log(myProjects);
    renderProjects();
});

//render projects

function renderProjects() {

    projectsList.innerHTML = '';

        myProjects.forEach((project, index) => {
        const p = document.createElement('p');

        const nameProject = document.createElement('div');
        nameProject.setAttribute('id', 'nameProject');
        nameProject.textContent = project.name;
        nameProject.addEventListener('click', () => {
            projectName = project.name;
            console.log(projectName)
            displayTasks();
        })

        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.setAttribute('id', 'deleteProjectBtn');
        deleteProjectBtn.textContent = 'x';
        deleteProjectBtn.addEventListener('click', () => {
            myProjects.splice(index, 1);
            p.remove(index);
        })

        p.appendChild(nameProject);
        p.appendChild(deleteProjectBtn);

        projectsList.appendChild(p);
    });
};

renderProjects()
