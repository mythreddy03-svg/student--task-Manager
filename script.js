function addTask() {
   
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateCounts();
}

function completeTask(task) {

    task.style.textDecoration = "line-through";
    task.style.color = "gray";

    updateCounts();
}

function deleteTask(button) {

    button.parentElement.remove();

    updateCounts();
}

function updateCounts() {

    let tasks = document.querySelectorAll("#taskList li");

    let pending = 0;
    let completed = 0;

    tasks.forEach(function(task) {

        let text = task.querySelector("span");

        if (text.style.textDecoration === "line-through") {
            completed++;
        } else {
            pending++;
        }
    });

    document.getElementById("pendingCount").textContent = pending;
    document.getElementById("completedCount").textContent = completed;
}