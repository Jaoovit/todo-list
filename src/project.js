
export function createNewTask(title) {
    this.title = title
};

export let myTasks = [];

export const tasksList = document.querySelector('#tasksList');

export function displayTasks() {

    tasksList.innerHTML = '';

    myTasks.forEach((task, index) => {
        const p = document.createElement('p');
        p.setAttribute('id', 'newProject');
        p.textContent = task.title;
        tasksList.appendChild(p);

        const editTaskBtn = document.createElement('button');
        editTaskBtn.setAttribute('id', 'editTaskBtn');
        editTaskBtn.textContent = 'edit';
        p.appendChild(editTaskBtn);

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.setAttribute('id', 'deleteTaskBtn');
        deleteTaskBtn.textContent = "x";
        p.appendChild(deleteTaskBtn);

        deleteTaskBtn.addEventListener('click', () => {
            myTasks.splice(index, 1)
            p.remove(index);
        });

        editTaskBtn.addEventListener('click', () => {
            p.innerHTML = '<input id="editTaskInput"></input> <button type="submit" id="saveTaskBtn">save</button>';
            const editTaskInput = document.querySelector('#editTaskInput');
            const saveTaskBtn = document.querySelector('#saveTaskBtn');
            
            saveTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();
                myTasks[index].title = editTaskInput.value;
                displayTasks();
            });
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
