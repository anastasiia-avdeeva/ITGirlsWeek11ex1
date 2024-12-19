const userInput = document.getElementById("inputTask");
const taskList = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

const listItemClass = "list-item";
const taskDescriptionClass = "taskDescription";
const checkboxClass = "checkbox";
const checkedClass = "taskDescription-Checked";

function addTask() {
  const task = userInput.value.trim();

  if (task) {
    // create li
    const newListItem = document.createElement("li");
    // add class
    newListItem.classList.add(listItemClass);
    // add custom checkbox
    newListItem.append(addCheckBox());
    // add task description
    newListItem.append(addTaskDescription(task));
    // add element to the list
    taskList.append(newListItem);
  }
  // clear input field
  userInput.value = "";
}

function addCheckBox() {
  // create span elem for custom checkbox
  const newCheckbox = document.createElement("span");
  //add class
  newCheckbox.classList.add(checkboxClass);
  return newCheckbox;
}

function addTaskDescription(task) {
  // create span for task description
  const newListText = document.createElement("span");
  // add class
  newListText.classList.add(taskDescriptionClass);
  // add task text
  newListText.textContent = task;
  return newListText;
}

addBtn.addEventListener("click", addTask);

function toggleCheckedState(event) {
  // find clicked list-item
  const clickedTask = event.target.closest("." + listItemClass);
  //  check if list-item was found
  if (clickedTask) {
    // find span with task description
    const taskDescription = clickedTask.querySelector(
      "." + taskDescriptionClass,
    );
    // toggle checked state for description
    taskDescription.classList.toggle(checkedClass);
    // add or delete tick from checkbox
    toggleTick(clickedTask, taskDescription);
  }
}

function toggleTick(listItem, taskDescription) {
  // find checkbox element
  const checkbox = listItem.querySelector("." + checkboxClass);
  // check if task was completed and delete or add tick
  if (taskDescription.classList.contains(checkedClass)) {
    checkbox.innerHTML = "&#10003;";
  } else {
    checkbox.innerHTML = "";
  }
}

taskList.addEventListener("click", toggleCheckedState);
