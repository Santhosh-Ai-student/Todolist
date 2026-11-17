
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        };

        let button = document.createElement("button");
        button.textContent = "Delete";
        button.classList.add("delete");

        button.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: value,
        completed: false
    });

    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
