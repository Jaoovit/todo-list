
export function createNewTask(title, description, priority, dueDate, note) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.note = note
};

export let myTasks = [];

export const tasksList = document.querySelector('#tasksList');
export const submitTaskBtn = document.querySelector('#submitTaskBtn');

export const taskTitle = document.querySelector('#taskTitle');
export const taskDescription = document.querySelector('#taskDescription');
export const taskPriority = document.getElementsByName('taskPriority');
export const taskDate = document.querySelector('#taskDate');
export const taskNote = document.querySelector('#taskNote');

export function displayTasks() {

    tasksList.innerHTML = '';

    myTasks.forEach((task, index) => {

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



/*

// edit project button

        editProjectBtn.addEventListener('click', () => {
            p.innerHTML = '<input id="editProjectInput"></input> <button type="submit" id="saveProjectBtn">save</button>';
            const editProjectInput = document.querySelector('#editProjectInput');
            const saveProjectBtn = document.querySelector('#saveProjectBtn');
            
            saveProjectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                myTasks[index].title = editTaskInput.value;
                displayTasks();
            });
        });

        */
