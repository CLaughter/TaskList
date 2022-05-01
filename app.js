// Change header text colors
document.getElementById("top-header").style.color = "maroon";
document.getElementById("bottom-header").style.color = "#b73c21";

// Input current date at bottom of card
const date = new Date();
const dateSpan = document.createElement("span");
document.body.append(date);

// Define UI variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".taskList");
const taskAddedBtn = document.querySelector("span");
const deleteList = document.querySelector(".btn-clear");

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
  form.addEventListener("submit", addTask);
  deleteList.addEventListener("click", dumpAll);
}

// Add task
function addTask(e) {
  if (`${(taskInputTxt = !"")}`) {
    taskAddedBtn.className = "btn taskAdded";
    taskAddedBtn.innerText = "Task Added";

    setTimeout(() => {
      taskAddedBtn.remove();
    }, 2000);
  }
  const li = document.createElement("li");
  li.className = "taskList-item";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  li.appendChild(document.createTextNode(taskInput.value));
  taskList.appendChild(li);
  // place x in li when generated for deletion of specific task element
  const deleteX = document.createElement("span");
  const delX = "&times;";
  li.appendChild(deleteX).innerHTML = delX;
  deleteX.style.cursor = "pointer";
  deleteX.style.color = "rgb(174, 40, 40)";

  // remove item when clicked
  deleteX.addEventListener("click", () => {
    li.remove();
  });

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

// Add event listener to change Clear All button text when clicked
function dumpAll(e) {
  confirm("Are You Sure?");

  const clearAll = document.querySelector(".taskList");
  const clearAllBtn = document.querySelector(".btn-clear");
  const btnClone = clearAllBtn.cloneNode();
  // clear the task list
  clearAll.remove();
  e.target.innerText = "Done";

  setTimeout(() => {
    // convert clearAllBtn to original state
    clearAllBtn.replaceWith(btnClone);
    btnClone.innerHTML = "Clear All";
  }, 2000);
}
