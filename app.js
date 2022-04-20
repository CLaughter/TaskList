// Change header text colors
document.getElementById("top-header").style.color = "maroon";
document.getElementById("bottom-header").style.color = "#b73c21";

// Change task wording
const items = document.querySelectorAll("ul.taskList li.task");

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});
console.log(items);

// Change task item4 text
const lis = document.getElementsByTagName("li");
lis[3].textContent = "DoDat";

// add event listener to Enter Task input field when Add Task button clicked
const form = document.querySelector("form");
const taskInput = document.getElementById("task-input");
const taskAdded = document.querySelector("span");

form.addEventListener("submit", runEvent);
function runEvent(e) {
  // add span button when Add Task button clicked after input entered
  let taskInputTxt = document.querySelector("task-input");
  if (`${(taskInputTxt = !"")}`) {
    taskAdded.className = "btn";
    taskAdded.innerText = "Task Added";
  }

  // // Remove Task Added button when input text area clicked
  // taskInputTxt.addEventListener("click", hide);
  // setInterval(function () {
  //   taskAdded.hidden;
  //   e.preventDefault();
  // }, 1000);

  // Adding a new task element
  const li = document.createElement("li");
  li.className = "task";
  li.appendChild(document.createTextNode(`${taskInput.value}`));
  revList = document.querySelector("ul.taskList").appendChild(li);

  console.log(`EVENT TYPE: ${e.type}`);
  //grab the input field text
  console.log(taskInput.value);
  //clear the text field
  taskInput.value = "";
  e.preventDefault();
}

// Alternating background colors of tasks using 2 different loops
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

// Add event listener to change Clear All button text when clicked
// for loop to remove iterations of task list
const clearAll = document.querySelector("ul.taskList li.task");
document.querySelector(".btn-clear").addEventListener("click", clearClick);
function clearClick(e) {
  let val;
  val = e;
  e.target.innerText = "Done";
  // clear the task list
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
  }
}

// use this format for li delete x
// const delItem = document.querySelector("li");
// delItem.addEventListener("click", deleteItem);
// function deleteItem(e) {
//   console.log("delete item");
//   console.log(e.target);
// }

// function print(variable) {
//   let c = 3;

//   return function func(variable2) {
//     console.log(variable);
//     console.log(variable2);
//     console.log(c);
//   };
// }
// let a = print(1);
// a(2);

let a = {
  a: 10,
  b: [1, 2],
};
console.table(a);
