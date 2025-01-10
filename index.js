document.getElementById('addTaskButton').addEventListener('click', function() {
    addTask();
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('clearCompletedButton').addEventListener('click', function() {
    clearCompletedTasks();
});

document.getElementById('searchButton').addEventListener('click', function() {
    searchTasks();
});

document.getElementById('searchInput').addEventListener('input', function() {
    searchTasks();
});

document.getElementById('searchDateButton').addEventListener('click', function() {
    searchTasksByDate();
});

document.getElementById('searchDate').addEventListener('input', function() {
    searchTasksByDate();
});

document.getElementById('lightThemeButton').addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    document.querySelector('.container').classList.remove('dark-mode');
});

document.getElementById('darkThemeButton').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.querySelector('.container').classList.add('dark-mode');
});

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskDate = document.getElementById('taskDate').value;
    let taskText = taskInput.value;
    if (taskText === '') return;

    let li = document.createElement('li');
    li.textContent = taskText + ' - ' + (taskDate ? taskDate : 'Pas de date');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
    document.getElementById('taskDate').value = '';
}

function clearCompletedTasks() {
    let completedTasks = document.querySelectorAll('li.completed');
    completedTasks.forEach(function(task) {
        task.remove();
    });
}
function searchTasks() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(function(task) {
        let taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchInput)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function searchTasksByDate() {
    let searchDate = document.getElementById('searchDate').value;
    let tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(function(task) {
        let taskDate = task.textContent.split(' - ')[1];
        if (taskDate.includes(searchDate)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

