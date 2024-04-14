import { createNewTask , displayTasks , myTasks, taskDate, taskDescription, taskPriority, taskTitle, taskNote, submitTaskBtn, createNewProjects, myProjects, displayProjects, taskProject } from "./project";

//create tasks

const firstTask = new createNewTask('Make the bad', 'organize pillows and sheets', 'important', '04/10/2024', 'Clean the House');
const secondTask = new createNewTask('Sweep the floor', 'clean under furniture with a broom', 'low priority', '04/10/2024', 'Clean the House');

myTasks.push(firstTask);
myTasks.push(secondTask);


displayTasks();


submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    taskPriority.forEach(radio => {
        if (radio.checked) {
            const newTask = new createNewTask(taskTitle.value, taskDescription.value, radio.value, taskDate.value, taskNote.value, taskProject.value);
            myTasks.push(newTask);
            displayTasks();
        };
    });
});









