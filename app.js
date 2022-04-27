// Change header text colors
document.getElementById("top-header").style.color = "maroon";
document.getElementById("bottom-header").style.color = "#b73c21";

// Input current date at bottom of card
const date = new Date();
const dateSpan = document.createElement("span");
document.body.append(date);

// add event listener to Enter Task input field when Add Task button clicked
const form = document.querySelector("form");
const taskInput = document.getElementById("task-input");
const taskAddedBtn = document.querySelector("span");
const li = document.createElement("li");
const deleteX = document.createElement("span");
deleteX.className = "closeBtn";
li.className = "task";

form.addEventListener("submit", runEvent);
function runEvent(e) {
  // add span with button when Add Task button clicked after input entered
  let taskInputTxt = document.querySelector("task-input");
  if (`${(taskInputTxt = !"")}`) {
    taskAddedBtn.className = "btn taskAdded";
    // taskAdded.classList.add("taskAdded");
    taskAddedBtn.innerText = "Task Added";
  }

  // Adding a new task element
  li.appendChild(document.createTextNode(`${taskInput.value}`));
  document.querySelector("ul.taskList").appendChild(li);

  // li.append(deleteX) (<button class="close-button"></button>);
  li.appendChild(deleteX).innerHTML = "&times;";

  console.log(`EVENT TYPE: ${e.type}`);
  //grab the input field text
  console.log(taskInput.value);
  //clear the text field
  taskInput.value = "";
  e.preventDefault();

  // Alternating background colors of tasks using 2 different loops
  const liOdd = document.querySelectorAll("li:nth-child(odd)");
  const liEven = document.querySelectorAll("li:nth-child(even)");

  // 2 different loop types to do the same thing
  liOdd.forEach(function (li) {
    li.style.background = "#ccc";
  });

  for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#f4f4f4";
  }

  // remove item when clicked
  li.addEventListener("click", () => {
    li.remove();
  });
}

// Add event listener to change Clear All button text when clicked
// for loop to remove iterations of task list
const clearAll = document.querySelector("ul.taskList li.task");

document.querySelector(".btn-clear").addEventListener("click", clearClick);
function clearClick(e) {
  e.target.innerText = "Done";
  confirm("Are You Sure?");

  // clear the task list
  // for (let i = 0; i < clearAll.length; i++) {
  //   lis[i].remove();
  // }
  console.log(clearAll);
}
