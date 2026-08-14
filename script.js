let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    displayTasks();
}


function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            <span 
                onclick="completeTask(${index})"
                class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });

    updateCounts();
}


function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}


function updateCounts() {

    let pending = 0;
    let completed = 0;

    tasks.forEach(function(task) {

        if (task.completed) {
            completed++;
        } else {
            pending++;
        }
    });

    document.getElementById("pendingCount").textContent = pending;
    document.getElementById("completedCount").textContent = completed;
}


displayTasks();