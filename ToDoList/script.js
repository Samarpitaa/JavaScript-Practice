// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Event listener for adding a new task
addButton.addEventListener("click", addTask);

// Event listener for marking a task as completed
taskList.addEventListener("click", markCompleted);

// Event listener for removing a task
taskList.addEventListener("click", removeTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="completeButton">Complete</button>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

function markCompleted(event) {
  if (event.target.classList.contains("completeButton")) {
    const completeButton = event.target;
    const taskItem = completeButton.parentElement;

    completeButton.style.backgroundColor = "red";
    completeButton.textContent = "Completed";
  }
}

function removeTask(event) {
  if (event.target.classList.contains("deleteButton")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
}
