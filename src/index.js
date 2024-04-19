import {
  addTaskForm,
  openTaskPopUp,
  closeTaskPopUp,
  dialog,
  createNewTask,
  displayTasks,
  myTasks,
  taskDate,
  taskDescription,
  taskPriority,
  taskTitle,
  taskNote,
  submitTaskBtn,
  taskProject,
  createNewProject,
  myProjects,
  projectName,
  displayAllTasks,
  saveTask,
  displayTodayTasks,
  displayWeekTasks,
} from "./project";
import "./style.css";
import { format } from "date-fns";

//create tasks

submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  taskPriority.forEach((radio) => {
    if (radio.checked) {
      const newTask = new createNewTask(
        taskTitle.value,
        taskDescription.value,
        radio.value,
        format(new Date(taskDate.value), "MM/dd/yyyy"),
        taskNote.value,
        taskProject.value
      );
      myTasks.push(newTask);
      projectName = taskProject.value;
      projectTodoName.textContent = taskProject.value;
      saveTask();
      displayTasks();
      dialog.close();
      addTaskForm.reset();
      closeTaskPopUp.style.display = "block";
    }
  });
});

displayAllTasks();

closeTaskPopUp.addEventListener("click", () => {
  dialog.close();
});

//add new project

const projectsList = document.querySelector("#projectsList");
const projectTodoName = document.querySelector("#projectTodoName");

const addNewProjectsBtn = document.querySelector("#addNewProjectsBtn");
const newProject = document.querySelector("#newProject");

addNewProjectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const anotherProject = new createNewProject(newProject.value);
  myProjects.push(anotherProject);
  saveData();
  renderProjects();
  newProject.value = "";
});

function saveData() {
  localStorage.setItem("localProjects", JSON.stringify(myProjects));
}

//render projectsC

function renderProjects() {
  projectsList.innerHTML = "";

  taskProject.innerHTML = "";

  myProjects.forEach((project, index) => {
    taskProject.innerHTML += `<option value="${project.name}">${project.name}</option>`;

    const p = document.createElement("p");

    const nameProject = document.createElement("div");
    nameProject.setAttribute("id", "nameProject");

    ///
    nameProject.textContent = project.name;
    ///

    nameProject.addEventListener("click", () => {
      projectTodoName.textContent = project.name;
      projectName = project.name;
      displayTasks();
    });

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.setAttribute("id", "deleteProjectBtn");
    deleteProjectBtn.textContent = "x";
    deleteProjectBtn.addEventListener("click", () => {
      myProjects.splice(index, 1);
      displayAllTasks();
      saveData();
      p.remove(index);
    });

    p.appendChild(nameProject);
    p.appendChild(deleteProjectBtn);

    projectsList.appendChild(p);
  });
}

renderProjects();

openTaskPopUp.addEventListener("click", () => {
  dialog.showModal();
});

const todayBtn = document.querySelector("#today");

todayBtn.addEventListener("click", () => {
  displayTodayTasks();
});
/*
const weekBtn = document.querySelector("#thisWeek");

weekBtn.addEventListener("click", () => {
  displayWeekTasks();
});
*/
