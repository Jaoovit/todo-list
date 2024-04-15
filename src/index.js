import { openEditTaskPopUp, closeEditTaskPopUp, dialog, createNewTask , displayTasks , myTasks, taskDate, taskDescription, taskPriority, taskTitle, taskNote, tasksList, submitTaskBtn, taskProject, createNewProject, myProjects, projectName, displayAllTasks } from "./project";

const addTaskForm = document.querySelector('#addTaskForm');

//create tasks

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important', '04/10/2024', 'do it everyday', 'Clean the House');

myTasks.push(firstTask);

submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    taskPriority.forEach(radio => {
        if (radio.checked) {
            const newTask = new createNewTask(taskTitle.value, taskDescription.value, radio.value, taskDate.value, taskNote.value, taskProject.value);
            myTasks.push(newTask);

            projectName = taskProject.value;
            projectTodoName.textContent = taskProject.value;

            displayTasks();
            dialog.close();
            addTaskForm.reset();
        };
    });
});

//add new project

const projectsList = document.querySelector('#projectsList');
const projectTodoName = document.querySelector('#projectTodoName')

const addNewProjectsBtn = document.querySelector('#addNewProjectsBtn');
const newProject = document.querySelector('#newProject');
addNewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const anotherProject = new createNewProject(newProject.value);
    myProjects.push(anotherProject);
    
    renderProjects();
});

//render projects

function renderProjects() {

    projectsList.innerHTML = '';

    taskProject.innerHTML = '';

        myProjects.forEach((project, index) => {


        taskProject.innerHTML += `<option value="${project.name}">${project.name}</option>`

        const p = document.createElement('p');

        
        const nameProject = document.createElement('div');
        nameProject.setAttribute('id', 'nameProject');
        nameProject.textContent = project.name;

        nameProject.addEventListener('click', () => {
            projectTodoName.textContent = project.name;
            projectName = project.name;
            displayTasks();
        })
        
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.setAttribute('id', 'deleteProjectBtn');
        deleteProjectBtn.textContent = 'x';
        deleteProjectBtn.addEventListener('click', () => {
            myProjects.splice(index, 1);
            displayAllTasks()
            p.remove(index);
        })

        p.appendChild(nameProject);
        p.appendChild(deleteProjectBtn);

        projectsList.appendChild(p);
    });
};

renderProjects();
displayAllTasks();



openEditTaskPopUp.addEventListener('click', () => {
    dialog.showModal();
});

closeEditTaskPopUp.addEventListener('click', () => {
    dialog.close();
})


