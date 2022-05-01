// Change header text colors
document.getElementById("top-header").style.color = "maroon";
document.getElementById("bottom-header").style.color = "#b73c21";

// Input current date at bottom of card
const date = new Date();
const dateSpan = document.createElement("span");
document.body.append(date);

// add event listener to Enter Task input field when Add Task button clicked
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".taskList");
const li = document.createElement("li");
li.style.display = "flex";
li.style.justifyContent = "space-between";
li.dataset.id = "data-list-item-text";
const taskAddedBtn = document.querySelector("span");
const deleteX = document.createElement("span");
deleteX.style.cursor = "pointer";
const delX = "&times;";
delX.className = "closeBtn";
li.className = "task";
const clearAllBtn = document.querySelector(".btn-clear");
const btnClone = clearAllBtn.cloneNode();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // add span with button when Add Task button clicked after input entered
  let taskInputTxt = taskInput.value;
  if (`${(taskInputTxt = !"")}`) {
    taskAddedBtn.className = "btn taskAdded";
    taskAddedBtn.innerText = "Task Added";

    setTimeout(() => {
      taskAddedBtn.remove();
    }, 2000);
  }

  // Adding a new task element
  li.appendChild(document.createTextNode(`${taskInput.value}`));
  taskList.appendChild(li);
  // place x in li when generated for deletion of specific task element
  li.appendChild(deleteX).innerHTML = delX;

  // remove item when clicked
  deleteX.addEventListener("click", () => {
    li.remove();
  });

  //clear the text field
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
});

// Add event listener to change Clear All button text when clicked
// for loop to remove iterations of task list
document.querySelector(".btn-clear").addEventListener("click", (e) => {
  confirm("Are You Sure?");

  const clearAll = document.querySelector("li.task");
  // clear the task list
  clearAll.remove();
  e.target.innerText = "Done";

  setTimeout(() => {
    // convert clearAllBtn to original state
    clearAllBtn.replaceWith(btnClone);
    btnClone.innerHTML = "Clear All";
  }, 2000);
});
