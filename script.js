const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const clearBtn = document.getElementById("clearBtn");

let total = 0;
let completed = 0;

// Add Task Button
addBtn.addEventListener("click", addTask);

// Enter Key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Add Task Function
function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create Task
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task;

    // Buttons Container
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    total++;
    updateCount();

    taskInput.value = "";

    // Complete Task
    completeBtn.addEventListener("click", function () {

        if (span.classList.contains("completed")) {

            span.classList.remove("completed");
            completed--;

        } else {

            span.classList.add("completed");
            completed++;

        }

        updateCount();

    });

    // Delete Task
    deleteBtn.addEventListener("click", function () {

        if (span.classList.contains("completed")) {
            completed--;
        }

        total--;

        li.remove();

        updateCount();

    });

}

// Clear All
clearBtn.addEventListener("click", function () {

    taskList.innerHTML = "";

    total = 0;
    completed = 0;

    updateCount();

});

// Update Counter
function updateCount() {

    totalTasks.textContent = total;
    completedTasks.textContent = completed;

}