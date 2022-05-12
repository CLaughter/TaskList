// Change header text colors
document.getElementById("top-header").style.color = "#a0522d";
document.getElementById("bottom-header").style.color = "#a0522d";

// Input current date at bottom of card
const date = new Date();
document.body.append(date);

// Define UI variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector(".btn-add");
const taskList = document.querySelector(".taskList");
const taskAddedBtn = document.querySelector("span");
const deleteList = document.querySelector(".btn-clear");
const filter = document.querySelector("#filter");
const clearField = document.querySelector(".btn-clearField");

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  addTaskBtn.addEventListener("click", addedBtn);
  taskList.addEventListener("click", removeTask);
  deleteList.addEventListener("click", dumpAll);
  filter.addEventListener("keyup", filterTasks);
  clearField.addEventListener("click", clearText);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (taskInput) {
    const li = document.createElement("li");
    li.className = "taskList-item";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.padding = "0 3px";
    li.appendChild(document.createTextNode(taskInput));

    // Style and place x in li when generated to deletion
    const deleteX = document.createElement("span");
    const delX = "&times;";

    deleteX.className = "spanX";
    deleteX.style.cursor = "pointer";
    deleteX.style.color = "#b22222";
    deleteX.style.fontWeight = "bold";
    deleteX.style.paddingLeft = ".5em";

    li.appendChild(deleteX).innerHTML = delX;
    taskList.appendChild(li);
  });
}

// Add task, style and append li with delete btn span
function addTask(e) {
  const li = document.createElement("li");
  li.className = "taskList-item";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.padding = "0 3px";
  li.appendChild(document.createTextNode(taskInput.value));

  // Style and place x in li when generated to deletion
  const deleteX = document.createElement("span");
  const delX = "&times;";

  deleteX.className = "spanX";
  deleteX.style.cursor = "pointer";
  deleteX.style.color = "#b22222";
  deleteX.style.fontWeight = "bold";

  li.appendChild(deleteX).innerHTML = delX;
  taskList.appendChild(li);

  // Local storage of task
  storeTaskLS(taskInput.value);

  taskInput.value = "";

  // Alternating background colors of tasks using 2 different loops
  const liOdd = document.querySelectorAll("li:nth-child(odd)");
  const liEven = document.querySelectorAll("li:nth-child(even)");

  // 2 different loop types to do the same thing
  liOdd.forEach(function (li) {
    li.style.background = "#f4f4f4f4";
  });

  for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#ccc";
  }
  e.preventDefault();
}

// Persist local storage task
function storeTaskLS(taskInput) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInput);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task Added button and hide after 2 seconds
function addedBtn() {
  if (`${(taskInputTxt = !"")}`) {
    const addBtnDiv = document.querySelector(".addBtn");
    taskAddedBtn.className = "btn taskAdded";
    taskAddedBtn.innerText = "Task Added";
    addBtnDiv.appendChild(taskAddedBtn);

    setTimeout(() => {
      taskAddedBtn.remove();
    }, 2000);
  }
}

// Remove individual task li
function removeTask(e) {
  if (e.target.classList.contains("spanX")) {
    e.target.parentElement.remove();
  }
  removeStoredTask(e.target.parentElement);
}

function removeStoredTask(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task);
    tasks.splice(index, 1);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear the task list
// Change Clear All button text when clicked and revert to previous state
function dumpAll(e) {
  let x = confirm("Are You Sure?");
  if (x == true) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
      removeStoredTaskList(e.target.parentElement);
    }

    const clearAllBtn = document.querySelector(".btn-clear");
    const btnClone = clearAllBtn.cloneNode();
    e.target.innerText = "Done";

    setTimeout(() => {
      clearAllBtn.replaceWith(btnClone);
      btnClone.innerHTML = "Clear All";
    }, 2000);
  } else {
    return;
  }
  window.location.reload();
}

function removeStoredTaskList(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task);
    tasks.splice(index, 1);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Filter through tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const taskItem = ".taskList-item";
  document.querySelectorAll(taskItem).forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function clearText() {
  filter.value = filter.defaultValue;
}
