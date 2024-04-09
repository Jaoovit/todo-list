
export function createNewProjects(title) {
    this.title = title
};

export let myProjects = [];

export const projectsList = document.querySelector('#projectsList');

export function displaySideBar() {

    projectsList.innerHTML = '';

    myProjects.forEach((project, index) => {
        const p = document.createElement('p');
        p.setAttribute('id', 'newProject');
        p.textContent = project.title;
        projectsList.appendChild(p);

        const editProjectBtn = document.createElement('button');
        editProjectBtn.setAttribute('id', 'editProjectBtn');
        editProjectBtn.textContent = 'edit';
        p.appendChild(editProjectBtn);

        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.setAttribute('id', 'deleteProjectBtn');
        deleteProjectBtn.textContent = "x";
        p.appendChild(deleteProjectBtn);

        deleteProjectBtn.addEventListener('click', () => {
            myProjects.splice(index, 1)
            p.remove(index);
        });

        editProjectBtn.addEventListener('click', () => {
            p.innerHTML = '<input id="editProjectInput"></input> <button type="submit" id="saveProjectBtn">save</button>';
            const editProjectInput = document.querySelector('#editProjectInput');
            const saveProjectBtn = document.querySelector('#saveProjectBtn');
            
            saveProjectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                myProjects[index].title = editProjectInput.value;
                displaySideBar();
            });
        });

        
    });
};
    