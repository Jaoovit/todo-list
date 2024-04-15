export function createNewTask(title, description, priority, dueDate, note, project) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.note = note;
    this.project = project
};

export let myTasks = [];

export const openEditTaskPopUp = document.querySelector('#openPopUp');
export const closeEditTaskPopUp = document.querySelector('#closePopUp');
export const dialog = document.querySelector('dialog');

export const tasksList = document.querySelector('#tasksList');
export const submitTaskBtn = document.querySelector('#submitTaskBtn');

export const taskTitle = document.querySelector('#taskTitle');
export const taskDescription = document.querySelector('#taskDescription');
export const taskPriority = document.getElementsByName('taskPriority');
export const taskDate = document.querySelector('#taskDate');
export const taskNote = document.querySelector('#taskNote');
export const taskProject = document.querySelector('#taskProject');

const allTasks = document.querySelector('#allTasks');

allTasks.addEventListener('click', () => {
    displayAllTasks()
})

export let myProjects = [];

export function createNewProject(name) {
    this.name = name
};

const exProject = new createNewProject('Clean the House');
myProjects.push(exProject);


export let projectName = '';


export function displayTasks() {

    tasksList.innerHTML = '';

    let filterProject = myTasks.filter(function(project) {
        return project.project === projectName;
       });

    filterProject.forEach((task, index) => {

        const div = document.createElement('div');
        div.setAttribute('id', 'newTask');
        tasksList.appendChild(div);
        
        const title = document.createElement('p');
        title.setAttribute('id', 'title');
        title.textContent = task.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.setAttribute('id', 'description');
        description.textContent = task.description;
        div.appendChild(description);

        const priority = document.createElement('p');
        priority.setAttribute('id', 'priority');
        priority.textContent = task.priority;
        div.appendChild(priority);

        const date = document.createElement('p');
        date.setAttribute('id', 'date');
        date.textContent = task.dueDate;
        div.appendChild(date);

        const note = document.createElement('p');
        note.setAttribute('id', 'note');
        note.textContent = task.note;
        div.appendChild(note);

        const editTaskBtn = document.createElement('button');
        editTaskBtn.setAttribute('id', 'editTaskBtn');
        editTaskBtn.textContent = 'edit';
        div.appendChild(editTaskBtn);

        editTaskBtn.addEventListener('click', () => {
            dialog.showModal();
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            
            if(task.priority == 'low priority') {
                taskPriority[0].checked = 'true';
            } else if (task.priority == 'important'){
                taskPriority[1].checked = 'true';
            } else if (task.priority == 'urgent'){
                taskPriority[2].checked = 'true';
            };


            taskNote.value = task.note;
            myTasks.splice(index, 1);
        })

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.setAttribute('id', 'deleteTaskBtn');
        deleteTaskBtn.textContent = 'x';
        div.appendChild(deleteTaskBtn);
        

        deleteTaskBtn.addEventListener('click', () => {
            myTasks.splice(index, 1);
            div.remove(index);
        });
    });   
};

export function displayAllTasks() {

    tasksList.innerHTML = '';

    myTasks.forEach((task, index) => {

        projectTodoName.textContent = 'All tasks';

        const div = document.createElement('div');
        div.setAttribute('id', 'newTask');
        tasksList.appendChild(div);
        
        const title = document.createElement('p');
        title.setAttribute('id', 'title');
        title.textContent = task.title;
        div.appendChild(title);

        const description = document.createElement('p');
        description.setAttribute('id', 'description');
        description.textContent = task.description;
        div.appendChild(description);

        const priority = document.createElement('p');
        priority.setAttribute('id', 'priority');
        priority.textContent = task.priority;
        div.appendChild(priority);

        const date = document.createElement('p');
        date.setAttribute('id', 'date');
        date.textContent = task.dueDate;
        div.appendChild(date);

        const note = document.createElement('p');
        note.setAttribute('id', 'note');
        note.textContent = task.note;
        div.appendChild(note);

        const editTaskBtn = document.createElement('button');
        editTaskBtn.setAttribute('id', 'editTaskBtn');
        editTaskBtn.textContent = 'edit';
        div.appendChild(editTaskBtn);

        editTaskBtn.addEventListener('click', () => {
            dialog.showModal();
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            taskNote.value = task.note;

            if(task.priority == 'low priority') {
                taskPriority[0].checked = 'true';
            } else if (task.priority == 'important'){
                taskPriority[1].checked = 'true';
            } else if (task.priority == 'urgent'){
                taskPriority[2].checked = 'true';
            };

            console.log(task.priority)
            myTasks.splice(index, 1);
        })

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.setAttribute('id', 'deleteTaskBtn');
        deleteTaskBtn.textContent = 'x';
        div.appendChild(deleteTaskBtn);

        deleteTaskBtn.addEventListener('click', () => {
            myTasks.splice(index, 1)
            div.remove(index);
        });
    });
};
